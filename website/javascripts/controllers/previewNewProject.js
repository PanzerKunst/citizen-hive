CBR.Controllers.PreviewNewProject = P(CBR.Controllers.CitizenHiveOpenProjectsBase, function (c, chopBase) {
    c.run = function () {
        this._initElements();
        this._initEvents();
    };

    c._initElements = function () {
        chopBase.initElements.call(this);

        this.$newProjectPic = $(".project-pic.new");
        this.$editBtn = $("#edit");
        this.$nextBtn = $("#next");

        this.initNewProjectPic(this.$newProjectPic);
    };

    c._initEvents = function () {
        this.resizeProjectPicOnResize(this.$newProjectPic);

        this.$editBtn.click(this._navigateBack);
        this.$nextBtn.click(this._navigateToNextPage);
    };

    c._navigateBack = function(e) {
        history.back();
    };

    c._navigateToNextPage = function(e) {
        location.href = "/join";
    };
});
