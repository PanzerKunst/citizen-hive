package controllers.api

import db.DbAdmin
import play.Play
import play.api.mvc.{Action, Controller}

object DbAdminApi extends Controller {
  def reCreateTables = Action {
    implicit request =>

      if (request.queryString.contains("key") &&
        request.queryString.get("key").get.head == Play.application().configuration().getString("application.secret")) {
        DbAdmin.reCreateTables()
        DbAdmin.initData()
        Created
      }
      else
        Forbidden
  }
}
