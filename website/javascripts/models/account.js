CBR.Models.Account = P(CBR.Models.JsonSerializable, function(m) {
    m.options = {  // Defaults
    };

    m.getUsername = function() {
        return this.options.username;
    };

    m.setPassword = function(password) {
        this.options.password = password;
    };
});
