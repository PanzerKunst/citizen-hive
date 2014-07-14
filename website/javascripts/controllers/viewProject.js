CBR.Controllers.ViewProject = P(CBR.Controllers.CitizenHiveOpenProjectsBase, function (c, chopBase) {
    c.run = function () {
        this._initElements();
        this._initEvents();
    };

    c._initElements = function () {
        chopBase.initElements.call(this);

        this.$projectPic = $(".project-pic");

        this._initProjectPic();
    };

    c._initEvents = function () {
        this.resizeProjectPicOnResize(this.$projectPic);
    };

    c._getProject = function() {
        return new CBR.Models.Project(this.options.project);
    };

    c._initProjectPic = function() {
        // CSS style set in JavaScript to prevent caching
        this.$projectPic.css("background-image", "url(/files/project-pic/" + this._getProject().getId() + ")");

        this.initProjectPictureHeight(this.$projectPic);
    };
});
