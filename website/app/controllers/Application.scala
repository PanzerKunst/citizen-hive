package controllers

import java.util.UUID

import db.{ProjectDto, AccountDto, CountryDto}
import models.{Country, Project, Account}
import play.api.mvc._
import services.JsonUtil

object Application extends Controller {

  val doNotCachePage = Array(CACHE_CONTROL -> "no-cache, no-store")

  def index = Action { request =>
    Ok(views.html.index(isSignedIn(request.session), ProjectDto.getAll))
  }

  def createProject = Action { request =>
    val sessionId = request.session.get("id").getOrElse(UUID.randomUUID.toString)

    val newSession = request.session.get("id") match {
      case Some(id) => request.session
      case None => request.session + ("id" -> sessionId)
    }

    Ok(views.html.createProject(isSignedIn(request.session), CountryDto.all))
      .withSession(newSession)
  }

  def previewNewProject = Action { request =>
    request.session.get("project") match {
      case Some(projectJson) =>
        val project = JsonUtil.deserialize[Project](projectJson)
        Ok(views.html.projectPreview(isSignedIn(request.session), project))

      case None =>
        BadRequest("Project not found in session")
    }
  }

  def join = Action { request =>
    Ok(views.html.join(isSignedIn(request.session)))
  }

  def viewProject(id: Long) = Action { request =>
    ProjectDto.getOfId(id) match {
      case Some(project) =>
        Ok(views.html.viewProject(isSignedIn(request.session), project))

      case None =>
        BadRequest("No project found for ID " + id)
    }
  }

  private def isSignedIn(session: Session): Boolean = {
    signedInUser(session).isDefined
  }

  def signedInUser(session: Session): Option[Account] = {
    session.get("accountId") match {
      case Some(accountId) => AccountDto.getOfId(accountId.toLong)
      case None => None
    }
  }
}