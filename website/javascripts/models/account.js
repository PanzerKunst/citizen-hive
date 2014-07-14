CBR.Models.Account = P(CBR.Models.JsonSerializable, function(m) {
    m.options = {  // Defaults
    };

    m.getId = function() {
        return this.options.id;
    };

    m.getUsername = function() {
        return this.options.username;
    };

    m.getEmail = function() {
        return this.options.email;
    };

    m.setPassword = function(password) {
        this.options.password = password;
    };
});
