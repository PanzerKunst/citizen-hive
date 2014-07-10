CBR.Controllers.Index = P(CBR.Controllers.Base, function(c, base) {
    c.run = function () {
        this._initElements();
    };

    c._initElements = function () {
        base.initElements.call(this);
    };
});
