CBR.Controllers.NewProjectPic = P(CBR.Controllers.Base, function (c, base) {
    c.facebookProjectPictureRatio = 360 / 1430;

    c.initElements = function () {
        base.initElements.call(this);

        this.$newProjectPic = $(".new-project-pic");

        this._initProjectPictureHeight(this.$newProjectPic);
    };

    c.initEvents = function () {
        window.onresize = _.debounce($.proxy(this._initProjectPictureHeight, this), 100);
    };

    // We set the height in JS because it's hard to do in CSS, cf. http://stackoverflow.com/questions/5657964/css-why-doesn-t-percentage-height-work
    c._initProjectPictureHeight = function () {
        this.$newProjectPic.height(this.$newProjectPic.width() * this.facebookProjectPictureRatio);
    };
});
