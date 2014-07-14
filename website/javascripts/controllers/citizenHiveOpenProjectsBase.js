CBR.Controllers.CitizenHiveOpenProjectsBase = P(CBR.Controllers.Base, function (c, base) {
    c._facebookProjectPictureRatio = 360 / 1430;

    c.initElements = function () {
        base.initElements.call(this);
    };

    c.resizeProjectPicOnResize = function($projectPic) {
        window.onresize = _.debounce(function (e) {
            this.initProjectPictureHeight($projectPic);
        }.bind(this), 100);
    };

    c.initNewProjectPic = function($projectPic) {
        // CSS style set in JavaScript to prevent caching
        $projectPic.css("background-image", "url(/files/project-pic/temp?time=" + new Date().getTime() + ")");

        this.initProjectPictureHeight($projectPic);
    };

    // We set the height in JS because it's hard to do in CSS, cf. http://stackoverflow.com/questions/5657964/css-why-doesn-t-percentage-height-work
    c.initProjectPictureHeight = function ($projectPics) {
        $projectPics.each(function (index, element) {
            var $div = $(element);
            $div.height($div.width() * this._facebookProjectPictureRatio);
        }.bind(this));
    };
});
