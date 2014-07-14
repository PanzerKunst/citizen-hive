CBR.Controllers.CreateProject = P(CBR.Controllers.CitizenHiveOpenProjectsBase, function (c, chopBase) {
    c.projectPicMaxFileSize = 3 * 1024 * 1024;  // 3 MB

    c.run = function () {
        this._initElements();
        this._initValidation();
        this._initEvents();
    };

    c._initElements = function () {
        chopBase.initElements.call(this);

        this.$form = $("form");
        this.$newProjectPic = $(".project-pic.new");
        this.$fileUploadError = $(".other-form-error");
        this.$title = $("#title");
        this.$description = $("#description");
        this.$homepageUrl = $("#homepage-url");
        this.$countrySelect = $("#country");
        this.$locality = $("#locality");
        this.$submitBtn = $("[type=submit]");

        this.initNewProjectPic(this.$newProjectPic);

        $("#fine-uploader").fineUploader({
            uploaderType: 'basic',
            button: $("#upload-btn")[0],
            request: {
                endpoint: '/files/project-pic/temp'
            },
            multiple: false,
            validation: {
                allowedExtensions: ['jpeg', 'jpg', 'png'],
                sizeLimit: this.projectPicMaxFileSize
            }
        })
            .on('upload', function (e, fileId, fileName) {
                this.$fileUploadError.hide();
                this.$newProjectPic.addClass("loading");
            }.bind(this))
            .on('error', function (e, fileId, fileName, errorReason, xhr) {
                this.$fileUploadError.html(errorReason);
                this.$fileUploadError.show();
            }.bind(this))
            .on('complete', function (e, fileId, fileName, responseJSON, xhr) {
                if (responseJSON.success) {
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
        this.resizeProjectPicOnResize(this.$newProjectPic);

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
                }
            ).fail(function (jqXHR, textStatus, errorThrown) {
                    this.$submitBtn.button('reset');
                    alert("AJAX fail :(");
                }.bind(this));
        }
    };
});
