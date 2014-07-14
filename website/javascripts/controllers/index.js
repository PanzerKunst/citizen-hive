CBR.Controllers.Index = P(CBR.Controllers.CitizenHiveOpenProjectsBase, function (c, chopBase) {
    c._isToCheckIfAnyPartOfTheElementIsVisible = true;

    c.run = function () {
        this._initElements();
        this._initEvents();
    };

    c._initElements = function () {
        chopBase.initElements.call(this);

        this.$listItems = $("li");
        this.$projectPics = this.$listItems.children(".project-pic");
        this.$projectTitleAnchors = this.$listItems.children("h2").children();

        $(".description").dotdotdot({
            height: 98  // ~ 4 lines
        });

        this.initProjectPictureHeight(this.$projectPics);
        this._loadPicsIfVisible();
    };

    c._initEvents = function () {
        $(window).scroll(_.debounce($.proxy(this._loadPicsIfVisible, this), 15));

        window.onresize = _.debounce(function (e) {
            this.initProjectPictureHeight(this.$projectPics);
            this._loadPicsIfVisible();
        }.bind(this), 100);

        this.$listItems.click(this._navigateToProjectPage);
        this.$projectTitleAnchors.click(this._stopPropagation);
    };

    c._loadPicsIfVisible = function () {
        this.$projectPics.filter(".loading").each(function (index, element) {
            var $div = $(element);

            var projectId = $div.parent().data("id");

            if ($div.visible(this._isToCheckIfAnyPartOfTheElementIsVisible)) {
                $div.removeClass("loading")
                    .css("background-image", "url(/files/project-pic/" + projectId + ")")
                    .addClass("loaded");
            }
        }.bind(this));
    };

    c._navigateToProjectPage = function (e) {
        location.href = "/projects/" + e.currentTarget.getAttribute("data-id");
    };

    c._stopPropagation = function (e) {
        e.stopPropagation();
    };
});
