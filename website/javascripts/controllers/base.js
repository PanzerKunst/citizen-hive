CBR.Controllers.Base = P(function (c) {
    c.httpStatusCode = {
        noContent: 204,
        unauthorized: 401
    };

    c._floatingAlertFadeOutDelay = 1500;

    c.init = function (options) {
        this.options = options;
    };

    c.getEl = function () {
        return $(this.options.el);
    };

    c.setActivePill = function (e) {
        e.preventDefault();

        var $a = $(e.currentTarget);
        var $li = $a.parent();
        var $ul = $li.parent();
        $ul.children().removeClass("active");

        $li.addClass("active");

        $a.trigger("active-toggled");
    };

    c.initElements = function () {
        this._applyModernizrRules();
        this._initFloatingAlerts();
    };

    c.saveInLocalStorage = function (key, value, isGlobalScope) {
        if (Modernizr.localstorage) {
            if (isGlobalScope) {
                localStorage.setItem(key, JSON.stringify(value));
            } else {
                var pageId = $("body").attr("id");

                var pageDataInLocalStorage = JSON.parse(localStorage.getItem(pageId)) || {};
                pageDataInLocalStorage[key] = value;

                localStorage.setItem(pageId, JSON.stringify(pageDataInLocalStorage));
            }
        }
    };

    c.getFromLocalStorage = function (key, isGlobalScope) {
        if (Modernizr.localstorage) {
            if (isGlobalScope) {
                return JSON.parse(localStorage.getItem(key));
            }

            var pageId = $("body").attr("id");

            var pageDataInLocalStorage = JSON.parse(localStorage.getItem(pageId)) || {};

            return pageDataInLocalStorage[key];
        }
    };

    c.removeFromLocalStorage = function (key, isGlobalScope) {
        if (Modernizr.localstorage) {
            if (isGlobalScope) {
                localStorage.removeItem(key);
            } else {
                var pageId = $("body").attr("id");

                var pageDataInLocalStorage = JSON.parse(localStorage.getItem(pageId)) || {};
                delete pageDataInLocalStorage[key];

                localStorage.setItem(pageId, JSON.stringify(pageDataInLocalStorage));
            }
        }
    };

    c.fadeOutFloatingAlerts = function () {
        var $floatingAlerts = $(".alert.floating");

        _.delay(function () {
            $floatingAlerts.fadeOut("slow", function () {
                $floatingAlerts.remove();
            });
        }, this._floatingAlertFadeOutDelay);
    };

    c.showAlert = function (text) {
        // In case another alert is displayed, we delete it
        $(".alert.floating").remove();

        var $floatingAlert = $('<div class="alert alert-success floating">' + text + '</div>');

        this.getEl().prepend($floatingAlert);

        // Center the alert
        $floatingAlert.css("margin-left", -$floatingAlert.width() / 2);

        // Now that the floating alert is centered, we can show it
        $floatingAlert.show();

        _.delay(function () {
            $floatingAlert.fadeOut("slow", function () {
                $floatingAlert.remove();
            });
        }, this._floatingAlertFadeOutDelay);
    };

    c._applyModernizrRules = function () {
        if (!Modernizr.input.placeholder) {
            $(".mdnz-polyfill.placeholder").show();
        }
    };

    c._initFloatingAlerts = function () {
        $(".alert.floating").each(function (index, element) {
            var $floatingAlert = $(element);

            // Centering
            $floatingAlert.css("margin-left", -$floatingAlert.width() / 2);

            // Now that the floating alert is centered, we can show it
            $floatingAlert.show();
        });
    };
});