package db

import anorm._
import models.Country
import play.api.Logger
import play.api.Play.current
import play.api.db.DB

import scala.util.control.Breaks._

object CountryDto {
  val all = getAll

  def getOfId(id: Long): Option[Country] = {
    var result: Option[Country] = None
    breakable {
      for (country <- all) {
        if (country.id == id) {
          result = Some(country)
          break()
        }
      }
    }
    result
  }

  private def getAll: List[Country] = {
    DB.withConnection {
      implicit c =>

        val query = """
          select id, name
          from country
          order by name;"""

        Logger.info("CountryDto.getAll():" + query)

        SQL(query)().map {
          row =>
            Country(
              row[Long]("id"),
              row[String]("name")
            )
        }.toList
    }
  }
}
