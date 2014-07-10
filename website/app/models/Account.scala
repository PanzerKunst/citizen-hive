package models

import com.fasterxml.jackson.databind.annotation.JsonDeserialize
import play.api.libs.json.{JsValue, Json, Writes}

case class Account(@JsonDeserialize(contentAs = classOf[java.lang.Long])
                   id: Option[Long] = None,

                   username: String,
                   email: String,
                   password: Option[String] = None)

object Account {
  implicit val writes = new Writes[Account] {
    def writes(account: Account): JsValue = {
      Json.obj(
        "id" -> account.id.get,
        "username" -> account.username,
        "email" -> account.email
      )
    }
  }
}
