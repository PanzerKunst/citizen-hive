import controllers.FileController
import play.api._

object Global extends GlobalSettings {

  override def onStart(app: Application) {
    FileController.projectPicturesDir.mkdirs()
  }
}
