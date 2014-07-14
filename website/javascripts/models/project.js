CBR.Models.Project = P(CBR.Models.JsonSerializable, function(m) {
    m.options = {  // Defaults
    };

    m.getId = function() {
        return this.options.id;
    };

    m.getOwner = function() {
        var owner = this.options.owner;
        return owner ? new CBR.Models.Account(owner) : null;
    };

    m.getTitle = function() {
        return this.options.title;
    };

    m.getDescription = function() {
        return this.options.description;
    };

    m.getHomepageUrl = function() {
        return this.options.homepageUrl;
    };

    m.getCountry = function() {
        var country = this.options.country;
        return country ? new CBR.Models.Country(country) : CBR.Models.Country.global;
    };

    m.getLocality = function() {
        return this.options.locality;
    };

    m.getCreationTimestamp = function() {
        return this.options.creationTimestamp;
    };
});
