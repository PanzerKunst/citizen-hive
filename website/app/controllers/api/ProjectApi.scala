package controllers.api

import db.{DbUtil, ProjectDto}
import models.Project
import play.api.libs.json.Json
import play.api.mvc.{Action, Controller}
import services.JsonUtil

object ProjectApi extends Controller {
  def saveInSession = Action(parse.json) {
    implicit request =>

      val rawProject = JsonUtil.deserialize[Project](request.body.toString())

      val project = if (!rawProject.homepageUrl.startsWith("http://") && !rawProject.homepageUrl.startsWith("https://")) {
        rawProject.copy(description = DbUtil.safetize(rawProject.description),
          homepageUrl = "http://" + rawProject.homepageUrl)
      } else {
        rawProject.copy(description = DbUtil.safetize(rawProject.description))
      }

      val newSession = request.session + ("project" -> Json.toJson(project).toString)
      Ok.withSession(newSession)
  }

  def create = Action(parse.json) {
    implicit request =>

      val project = JsonUtil.deserialize[Project](request.body.toString())
      ProjectDto.create(project) match {
        case Some(id) => Ok(id.toString)
        case None => InternalServerError("Creation of a project did not return an ID!")
      }
  }

  /* TODO
  def update = Action(parse.json) {
    implicit request =>

      val report = JsonUtil.deserialize[Project](request.body.toString())

      report.id match {
        case Some(id) =>
          ProjectDto.getOfId(id) match {
            case None =>
              BadRequest("No project found for id '" + id + "'")
            case Some(existingReport) =>
              ProjectDto.update(report)
              Ok
          }
        case None =>
          BadRequest("Project ID missing")
      }
  }

  def delete(id: Long) = Action {
    implicit request =>

      ProjectDto.getOfId(id) match {
        case None =>
          BadRequest("No project found for id '" + id + "'")
        case Some(report) =>
          ProjectDto.delete(report)
          Ok
      }
  } */
}
