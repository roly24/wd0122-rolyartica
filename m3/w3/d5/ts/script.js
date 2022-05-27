var FirstUser = /** @class */ (function () {
    function FirstUser() {
        this.carica = 10;
        this.costoMinuti = 0.20;
        this.numeroChiamate = 0;
    }
    FirstUser.prototype.Ricarica = function (unaRicarica) {
        this.carica - this.carica + unaRicarica;
    };
    FirstUser.prototype.chiamata = function (minutiDurata) {
        this.carica - this.carica - (minutiDurata * this.costoMinuti);
        this.numeroChiamate++;
    };
    FirstUser.prototype.numero404 = function () {
        return this.carica;
    };
    FirstUser.prototype.NumeroChiamate = function () {
        return this.numeroChiamate;
    };
    FirstUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return FirstUser;
}());
var firstUser = new FirstUser();
firstUser.Ricarica(5);
firstUser.chiamata(5);
firstUser.numero404();
firstUser.NumeroChiamate();
console.table(firstUser);
var SecondUser = /** @class */ (function () {
    function SecondUser() {
        this.carica = 50;
        this.numeroChiamate = 0;
        this.costoMinuti = 0.20;
        this.numeroChiamate = 0;
    }
    SecondUser.prototype.Ricarica = function (unaRicarica) {
        this.carica - this.carica + unaRicarica;
    };
    SecondUser.prototype.chiamata = function (minutiDurata) {
        this.carica - this.carica - (minutiDurata * this.costoMinuti);
        this.numeroChiamate++;
    };
    SecondUser.prototype.numero404 = function () {
        return this.carica;
    };
    SecondUser.prototype.NumeroChiamate = function () {
        return this.numeroChiamate;
    };
    SecondUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return SecondUser;
}());
var secondUser = new SecondUser;
secondUser.Ricarica(10);
secondUser.chiamata(3);
secondUser.numero404();
secondUser.NumeroChiamate();
console.table(secondUser);
var ThirdUser = /** @class */ (function () {
    function ThirdUser() {
        this.carica = 15;
        this.numeroChiamate = 0;
        this.costoMinuti = 0.20;
        this.numeroChiamate = 0;
    }
    ThirdUser.prototype.Ricarica = function (unaRicarica) {
        this.carica - this.carica + unaRicarica;
    };
    ThirdUser.prototype.chiamata = function (minutiDurata) {
        this.carica - this.carica - (minutiDurata * this.costoMinuti);
        this.numeroChiamate++;
    };
    ThirdUser.prototype.numero404 = function () {
        return this.carica;
    };
    ThirdUser.prototype.NumeroChiamate = function () {
        return this.numeroChiamate;
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return ThirdUser;
}());
var thirdUser = new ThirdUser;
thirdUser.Ricarica(10);
thirdUser.chiamata(5);
thirdUser.chiamata(7);
thirdUser.chiamata(2);
thirdUser.numero404();
thirdUser.NumeroChiamate();
console.table(thirdUser);
