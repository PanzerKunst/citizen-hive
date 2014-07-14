CBR.Controllers.Join = P(CBR.Controllers.CitizenHiveOpenProjectsBase, function (c, chopBase) {
    c.run = function () {
        this._initElements();
        this._initEvents();
    };

    c._initElements = function () {
        chopBase.initElements.call(this);

        this.$form = $("form");
        this.$submitBtn = $("[type=submit]");
    };

    c._initEvents = function () {
        this.$form.submit($.proxy(this._doSubmit, this));
    };

    c._doSubmit = function (e) {
        if (e) {
            e.preventDefault();
        }

        this.$submitBtn.button('loading');

        $.ajax({
            url: "/api/projects",
            type: "POST"
        }).done(function (data, textStatus, jqXHR) {
                location.href = "/";
            }
        ).fail(function (jqXHR, textStatus, errorThrown) {
                this.$submitBtn.button('reset');
                alert("AJAX fail :(");
            }.bind(this));
    };
});
