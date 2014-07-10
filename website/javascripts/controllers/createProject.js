CBR.Controllers.CreateProject = P(CBR.Controllers.NewProjectPic, function (c, newProjectPic) {
    c.run = function () {
        this._initElements();
        this._initValidation();
        this._initEvents();
    };

    c._initElements = function () {
        newProjectPic.initElements.call(this);

        this.$form = $("form");
        this.$title = $("#title");
        this.$description = $("#description");
        this.$homepageUrl = $("#homepage-url");
        this.$countrySelect = $("#country");
        this.$locality = $("#locality");
        this.$submitBtn = $("[type=submit]");

        $("#fine-uploader").fineUploader({
            uploaderType: 'basic',
            button: $("#upload-btn")[0],
            request: {
                endpoint: '/files/project-pic/temp'
            }
        })
            .on('upload', function (fileId, fileName) {
                this.$newProjectPic.addClass("loading");
            }.bind(this))
            .on('error', function (fileId, fileName, errorReason, xhr) {
                alert("Upload error :(");
            })
            .on('complete', function (fileId, fileName, responseJSON, xhr) {
                if (xhr.success) {
                    this.$newProjectPic.removeClass("loading")
                        .css("background-image", "url(/files/project-pic/temp?time=" + new Date().getTime() + ")");
                }
            }.bind(this));

        // The submit button may remain disabled when navigating back. We make sure it doesn't happen
        this.$submitBtn.prop("disabled", false);
    };

    c._initValidation = function () {
        this.validator = new CBR.Services.Validator({
            fieldIds: [
                "title",
                "description",
                "homepage-url",
                "locality"
            ]
        });
    };

    c._initEvents = function () {
        newProjectPic.initEvents.call(this);

        this.$countrySelect.change($.proxy(this._onCountryChange, this));
        this.$form.submit($.proxy(this._doSubmit, this));
    };

    c._onCountryChange = function (e) {
        if (parseInt(this.$countrySelect.val(), 10) === CBR.Models.Country.global.id) {
            this.$locality.val("");
            this.$locality.prop("disabled", true);
        } else {
            this.$locality.prop("disabled", false);
        }
    };

    c._doSubmit = function (e) {
        if (e) {
            e.preventDefault();
        }

        if (this.validator.isValid()) {
            this.$submitBtn.button('loading');

            var locality = this.$locality.val();

            var countryId = this.$countrySelect.val();
            var country = countryId !== CBR.Models.Country.global.id ? {
                id: countryId,
                name: this.$countrySelect.children(':selected').text()
            } : null;

            var project = {
                title: this.$title.val(),
                description: this.$description.val(),
                homepageUrl: this.$homepageUrl.val(),
                country: country,
                locality: locality ? locality : null
            };

            $.ajax({
                url: "/api/projects/temp",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify(project)
            }).done(function (data, textStatus, jqXHR) {
                    location.href = "/projects/new/preview";
                }.bind(this)
            ).fail(function (jqXHR, textStatus, errorThrown) {
                    this.$submitBtn.button('reset');
                    alert("AJAX fail :(");
                }.bind(this));
        }
    };
});
