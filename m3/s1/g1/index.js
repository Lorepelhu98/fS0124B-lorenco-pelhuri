var User = /** @class */ (function () {
    function User(name, lastName) {
        this.credito = 0;
        this.numeroChiamate = 0;
        this.name = name;
        this.lastName = lastName;
    }
    User.prototype.ricarica = function (ammontare) {
        this.credito += ammontare;
    };
    return User;
}());
