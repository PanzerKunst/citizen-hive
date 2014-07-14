package db

import java.util.Date

import anorm._
import models.{Account, Country, Project}
import play.api.Logger
import play.api.Play.current
import play.api.db.DB

object ProjectDto {
  def create(project: Project): Option[Long] = {
    DB.withConnection {
      implicit c =>

        var countryIdForQuery = "NULL"
        val countryId = project.country.get.id
        if (countryId != Country.Global.id) {
          countryIdForQuery = countryId.toString
        }

        var localityForQuery = "NULL"
        if (project.locality.isDefined && project.locality.get != "") {
          localityForQuery = "'" + DbUtil.safetize(project.locality.get) + "'"
        }

        val query = """
               insert into open_project(owner_id, title, description, homepage_url, country_id, locality, creation_timestamp)
          values(""" + project.owner.get.id.get + """, '""" +
          DbUtil.safetize(project.title) + """',
          {description}, '""" +
          DbUtil.safetize(project.homepageUrl) + """', """ +
          countryIdForQuery + """, """ +
          localityForQuery + """, """ +
          new Date().getTime + """);"""

        Logger.info("ProjectDto.create():" + query)

        /* We need to use "on" otherwise Play crashes if "project.description" is too long. Also, it's useful to handle
        carriage returns */
        SQL(query).on(
          "description" -> project.description
        ).executeInsert()
    }
  }

  def getAll: List[Project] = {
    DB.withConnection {
      implicit c =>

        val query = """
          select p.id, owner_id, title, description, homepage_url, country_id, locality, creation_timestamp,
            username, email,
            name
          from open_project p
          inner join account a
            on a.id = p.owner_id
          left join country c
            on c.id = p.country_id
          order by creation_timestamp desc;"""

        Logger.info("ProjectDto.getAll():" + query)

        SQL(query)().map {
          row =>
            val account = row[Option[Long]]("owner_id") match {
              case Some(ownerId) => Some(Account(Some(ownerId),
                row[String]("username"),
                row[String]("email")))

              case None => None
            }

            val country = row[Option[Long]]("country_id") match {
              case Some(countryId) => CountryDto.getOfId(countryId)
              case None => None
            }

            Project(row[Option[Long]]("id"),
              account,
              row[String]("title"),
              row[String]("description"),
              row[String]("homepage_url"),
              country,
              row[Option[String]]("locality"),
              row[Option[Long]]("creation_timestamp"))
        }.toList
    }
  }

  def getOfId(id: Long): Option[Project] = {
    DB.withConnection {
      implicit c =>

        val query = """
          select owner_id, title, description, homepage_url, country_id, locality, creation_timestamp,
            username, email,
            name
          from open_project p
          inner join account a
            on a.id = p.owner_id
          left join country c
            on c.id = p.country_id
          where p.id = """ + id + """;"""

        Logger.info("ProjectDto.getOfId(" + id + "):" + query)

        SQL(query).apply().headOption match {
          case Some(row) =>
            val account = row[Option[Long]]("owner_id") match {
              case Some(ownerId) => Some(Account(Some(ownerId),
                row[String]("username"),
                row[String]("email")))

              case None => None
            }

            val country = row[Option[Long]]("country_id") match {
              case Some(countryId) => CountryDto.getOfId(countryId)
              case None => None
            }

            Some(
              Project(Some(id),
                account,
                row[String]("title"),
                row[String]("description"),
                row[String]("homepage_url"),
                country,
                row[Option[String]]("locality"),
                row[Option[Long]]("creation_timestamp"))
            )

          case None =>
            None
        }
    }
  }

  /* TODO
  def getOfCandidate(candidateId: Int): List[Report] = {
    DB.withConnection {
      implicit c =>

        val query = """
          select id, author_name, contact, is_money_in_politics_a_problem, is_supporting_amendment_to_fix_it,
            is_opposing_citizens_united, has_previously_voted_for_convention, support_level, notes,
            creation_timestamp
          from report
          where candidate_id = """ + candidateId + """
            and is_deleted is false
          order by creation_timestamp desc;"""

        Logger.info("ReportDto.getOfCandidate():" + query)

        SQL(query)().map {
          row =>
            Report(row[Option[Long]]("id"),
              candidateId,
              row[String]("author_name"),
              row[Option[String]]("contact"),
              row[Option[Boolean]]("is_money_in_politics_a_problem"),
              row[Option[Boolean]]("is_supporting_amendment_to_fix_it"),
              row[Option[Boolean]]("is_opposing_citizens_united"),
              row[Option[Boolean]]("has_previously_voted_for_convention"),
              row[Option[String]]("support_level").getOrElse(SupportLevel.UNKNOWN.toString),
              row[Option[String]]("notes"),
              row[Option[Long]]("creation_timestamp"))
        }.toList
    }
  }

  def update(report: Report) {
    DB.withConnection {
      implicit c =>

        var contactForQuery = "NULL"
        if (report.contact.isDefined && report.contact.get != "")
          contactForQuery = "'" + DbUtil.safetize(report.contact.get) + "'"

        var supportLevelForQuery = "NULL"
        if (report.supportLevel != SupportLevel.UNKNOWN.toString)
          supportLevelForQuery = "'" + DbUtil.safetize(report.supportLevel) + "'"

        var notesForQuery = "NULL"
        if (report.notes.isDefined && report.notes.get != "")
          notesForQuery = "'" + DbUtil.safetize(report.notes.get) + "'"

        val query = """
          update report set
          author_name = '""" + DbUtil.safetize(report.authorName) + """',
          contact = """ + contactForQuery + """,
          is_money_in_politics_a_problem = """ + report.isMoneyInPoliticsAProblem.getOrElse("NULL") + """,
          is_supporting_amendment_to_fix_it = """ + report.isSupportingAmendmentToFixIt.getOrElse("NULL") + """,
          is_opposing_citizens_united = """ + report.isOpposingCitizensUnited.getOrElse("NULL") + """,
          has_previously_voted_for_convention = """ + report.hasPreviouslyVotedForConvention.getOrElse("NULL") + """,
          support_level = """ + supportLevelForQuery + """,
          notes = """ + notesForQuery + """
          where id = """ + report.id.get + """;"""

        Logger.info("ReportDto.update():" + query)

        SQL(query).executeUpdate()
    }
  }

  def delete(report: Report) {
    DB.withConnection {
      implicit c =>

        val query = """
          update report set
          is_deleted = true
          where id = """ + report.id.get + """;"""

        Logger.info("ReportDto.delete():" + query)

        SQL(query).executeUpdate()
    }
  } */
}
