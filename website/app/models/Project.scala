package models

import java.text.SimpleDateFormat
import java.util.Date
import java.util.regex.Pattern

import com.fasterxml.jackson.databind.annotation.JsonDeserialize
import play.api.libs.json.{JsValue, Json, Writes}

case class Project(@JsonDeserialize(contentAs = classOf[java.lang.Long])
                   id: Option[Long] = None,

                   owner: Option[Account] = None,
                   title: String,
                   description: String,
                   homepageUrl: String,
                   country: Option[Country] = None,
                   locality: Option[String] = None,
                   creationTimestamp: Option[Long] = None) {

  def getReadableCreationTimestamp: String = {
    new SimpleDateFormat("MM/dd/YYYY h:mm aa").format(new Date(creationTimestamp.get))
  }

  def getDescriptionForWeb: String = {
    val matcher = Project.regexPatternUrl.matcher(description)

    val linkifiedDescription = if (matcher.find()) {
      val protocolMatcher = Project.regexPatternProtocol.matcher(matcher.group(1))

      if (protocolMatcher.find()) {
        matcher.replaceAll("<a href=\"$1\" target=\"_blank\">$1</a>")
      } else {
        matcher.replaceAll("<a href=\"http://$1\" target=\"_blank\">$1</a>")
      }
    } else {
      description
    }

    linkifiedDescription.replaceAll("\\n", "<br />")
  }
}

object Project {
  implicit val writes = new Writes[Project] {
    def writes(project: Project): JsValue = {
      Json.obj(
        "id" -> project.id,
        "owner" -> project.owner,
        "title" -> project.title,
        "description" -> project.description,
        "homepageUrl" -> project.homepageUrl,
        "country" -> project.country,
        "locality" -> project.locality,
        "creationTimestamp" -> project.creationTimestamp
      )
    }
  }

  val regexPatternUrl = Pattern.compile("(?i)\\b((?:[a-z]+://|www\\d{0,3}[.]|[a-z0-9.\\-]+[.][a-z]{2,4}/)(?:[^\\s()<>]+|\\(([^\\s()<>]+|(\\([^\\s()<>]+\\)))*\\))+(?:\\(([^\\s()<>]+|(\\([^\\s()<>]+\\)))*\\)|[^\\s`!()\\[\\]{};:\'\".,<>???“”‘’]))")
  val regexPatternProtocol = Pattern.compile("(?i)^[a-z]+://")
}
