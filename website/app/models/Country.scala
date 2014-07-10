package models

import play.api.libs.json.{Json, JsValue, Writes}

case class Country(id: Long,
                   name: String)

object Country {
  implicit val writes = new Writes[Country] {
    def writes(country: Country): JsValue = {
      Json.obj(
        "id" -> country.id,
        "name" -> country.name
      )
    }
  }

  val Global = Country(0, "Global")
}
