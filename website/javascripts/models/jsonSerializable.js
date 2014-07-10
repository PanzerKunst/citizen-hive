CBR.Models.JsonSerializable = P(function (m) {
    m.init = function (options) {
        this.options = options;
    };

    m.toJSON = function () {
        return this.options;
    };
});
