CBR.Controllers.PreviewNewProject = P(CBR.Controllers.NewProjectPic, function (c, newProjectPic) {
    c.run = function () {
        this._initElements();
        this._initEvents();
    };

    c._initElements = function () {
        newProjectPic.initElements.call(this);

        this.$editBtn = $("#edit");
        this.$nextBtn = $("#next");
    };

    c._initEvents = function () {
        newProjectPic.initEvents.call(this);

        this.$editBtn.click(this._navigateBack);
    };

    c._navigateBack = function(e) {
        history.back();
    };
});
