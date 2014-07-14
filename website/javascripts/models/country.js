CBR.Models.Country = P(CBR.Models.JsonSerializable, function (m) {
    m.options = {  // Defaults
    };

    m.getId = function () {
        return this.options.id;
    };

    m.getName = function () {
        return this.options.name;
    };
});

CBR.Models.Country.global = CBR.Models.Country({
    id: 0,
    name: "Global"
});
