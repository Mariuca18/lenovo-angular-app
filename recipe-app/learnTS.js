"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hi = 'Hello';
console.log(hi);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
var nf = StatusCodes.NotFound;
var variable = 'TypeScript';
var message = 'Hellos,${variable}!';
function getUser() {
    return { name: 'John', age: 30 };
}
