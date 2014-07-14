package controllers

import play.api.libs.json.Json
import play.api.mvc.{Action, Controller}
import java.io.File

object FileController extends Controller {
  private val homeDir = System.getProperty("user.home")
  val projectPicturesDir = new File(homeDir + "/data/project-pictures")

  def serveTempProjectPicture = Action { request =>
    request.session.get("id") match {
      case Some(sessionId) =>
        getTempProjectPicture(sessionId) match {
          case Some(file) => Ok.sendFile(
            content = file,
            inline = true
          ).withHeaders(Application.doNotCachePage: _*)

          case None => NoContent
        }

      case None =>
        NoContent
    }
  }

  def serveProjectPicture(projectId: Long) = Action { request =>
    getProjectPicture(projectId) match {
      case Some(file) => Ok.sendFile(
        content = file,
        inline = true
      ).withHeaders(Application.doNotCachePage: _*)

      case None => NoContent
    }
  }

  def uploadTempProjectPicture() = Action(parse.multipartFormData) { request =>
    val requestBody = request.body

    if (requestBody.files.nonEmpty) {
      val picture = requestBody.files.head

      request.session.get("id") match {
        case Some(sessionId) =>
          deleteExistingTempProjectPicture(sessionId)

          val extension = picture.filename.substring(picture.filename.lastIndexOf(".")).toLowerCase

          picture.ref.moveTo(new File(projectPicturesDir.getPath + "/" + sessionId + ".tmp" + extension))
          Ok(Json.obj("success" -> true))
        case None =>
          Ok(Json.obj(
            "success" -> false,
            "error" -> "Could not upload temp project picture: session ID now found!",
            "preventRetry" -> true)
          )
      }
    } else {
      Ok(Json.obj(
        "success" -> false,
        "error" -> "Couldn't find the file in the upload request!",
        "preventRetry" -> true)
      )
    }
  }

  def saveTempProfilePicture(projectId: Long, sessionId: String) {
    getProjectPicture(projectId) match {
      case Some(file) =>
        // Deleting actual profile pic
        deleteFile(file)

      case None =>
    }

    getTempProjectPicture(sessionId) match {
      case Some(tempFile) =>
        val fileName = tempFile.getName
        val extension = fileName.substring(fileName.lastIndexOf("."))
        if (!tempFile.renameTo(new File(projectPicturesDir.getPath + "/" + projectId + extension))) {
          throw new FileSystemException("Temporary project pic couldn't be moved to non-temp file!")
        }

      case None =>
    }
  }

  private def getTempProjectPicture(sessionId: String): Option[File] = {
    val isTemp = true
    getProjectPicture(sessionId, isTemp)
  }

  private def getProjectPicture(projectId: Long): Option[File] = {
    val isTemp = false
    getProjectPicture(projectId.toString, isTemp)
  }

  private def getProjectPicture(pictureId: String, isTemp: Boolean): Option[File] = {
    val prefix = if (isTemp) {
      """\.tmp"""
    } else {
      ""
    }

    val matchingRegex = (pictureId + prefix + """\.(jpg|jpeg|png)""").r

    val matchingFiles = projectPicturesDir.listFiles.filter(f => matchingRegex.findFirstIn(f.getName).isDefined)

    if (matchingFiles.size > 1)
      throw new InconsistentDataException("Found more than 1 project picture!")
    else if (matchingFiles.size == 1)
      Some(matchingFiles.head)
    else
      None
  }

  private def deleteExistingTempProjectPicture(sessionId: String) {
    getTempProjectPicture(sessionId) match {
      case Some(file) => deleteFile(file)
      case None =>
    }
  }

  private def deleteFile(file: File) {
    val deletionSuccessful = if (file.exists())
      file.delete()
    else true

    if (!deletionSuccessful) throw new FileSystemException("Could not delete file: " + file.getAbsolutePath)
  }
}
