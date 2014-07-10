package models

import java.text.SimpleDateFormat
import java.util.Date

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
    description.replaceAll("\\\\\n", "<br />")
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
}
