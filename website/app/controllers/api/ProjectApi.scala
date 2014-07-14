package controllers.api

import java.util.UUID

import controllers.FileController
import db.{AccountDto, DbUtil, ProjectDto}
import models.{Account, Project}
import play.api.libs.json.Json
import play.api.mvc.{Action, Controller}
import services.JsonUtil

object ProjectApi extends Controller {
  def saveInSession = Action(parse.json) { request =>
    val rawProject = JsonUtil.deserialize[Project](request.body.toString())

    val protocolMatcher = Project.regexPatternProtocol.matcher(rawProject.homepageUrl)

    val project = if (protocolMatcher.find()) {
      rawProject.copy(description = DbUtil.safetize(rawProject.description))
    } else {
      rawProject.copy(description = DbUtil.safetize(rawProject.description),
        homepageUrl = "http://" + rawProject.homepageUrl)
    }

    val newSession = request.session + ("project" -> Json.toJson(project).toString)
    Ok.withSession(newSession)
  }

  def create = Action { request =>
    request.session.get("project") match {
      case Some(projectJson) =>
        // TODO: remove
        val username = UUID.randomUUID.toString
        var owner = Account(None, username, username + "@mail.com", Some("s3cr37"))
        owner = AccountDto.create(owner) match {
          case Some(accountId) =>
            owner.copy(id = Some(accountId))

          case None =>
            owner
        }

        var project = JsonUtil.deserialize[Project](projectJson) // TODO: put as "val"

        // TODO: remove
        project = project.copy(owner = Some(owner))

        ProjectDto.create(project) match {
          case Some(id) =>
            request.session.get("id") match {
              case Some(sessionId) =>
                FileController.saveTempProfilePicture(id, sessionId)
                Ok(id.toString)

              case None =>
                BadRequest("Could not save project: 'id' not found in session")
            }

          case None =>
            InternalServerError("Creation of a project did not return an ID!")
        }
      case None =>
        BadRequest("Could not save project: project data not found in session")
    }
  }


  /* TODO
  def update = Action(parse.json) { request =>
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

  def delete(id: Long) = Action { request =>
      ProjectDto.getOfId(id) match {
        case None =>
          BadRequest("No project found for id '" + id + "'")
        case Some(report) =>
          ProjectDto.delete(report)
          Ok
      }
  } */
}
