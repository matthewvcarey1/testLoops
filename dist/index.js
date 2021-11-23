var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        var numbers = __spreadArray([], Array(10000000), true).map(function (_, i) { return 0 + i * 1; });
        var startTime1 = new Date().getTime();
        var doubled1 = numbers.map(function (number) { return number * 2; }); // [2, 4, 6, 8, 10]
        var even1 = numbers.filter(function (number) { return number % 2 === 0; }); // [2, 4]
        var endTime1 = new Date().getTime();
        var startTime2 = new Date().getTime();
        var doubled2 = [];
        var even2 = [];
        for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
            var n = numbers_1[_i];
            doubled2.push(n * 2);
            if (n % 2 === 0)
                even2.push(n);
        }
        var endTime2 = new Date().getTime();
        var startTime3 = new Date().getTime();
        var doubled3 = [];
        var even3 = [];
        numbers.forEach(function (n) {
            doubled3.push(n * 2);
            if (n % 2 === 0)
                even3.push(n);
        });
        var endTime3 = new Date().getTime();
        console.log("\n\nMap Time taken: " + (endTime1 - startTime1) + " ms");
        console.log("\nLoop Time taken: " + (endTime2 - startTime2) + " ms");
        console.log("\nForEach Loop Time taken: " + (endTime3 - startTime3) + " ms");
        console.log(doubled1.length, even1.length);
        return 0;
    };
    return Startup;
}());
Startup.main();
//# sourceMappingURL=index.js.map