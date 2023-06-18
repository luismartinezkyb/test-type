"use strict";
//export type Weather = 'sunny'|'rainy'| 'cloudly'| 'windy'|'stormy'
//export type Visibility = 'great'| 'good'| 'ok' | 'poor'
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visibility = exports.Weather = void 0;
var Weather;
(function (Weather) {
    Weather["Sunny"] = "sunny";
    Weather["Rayni"] = "rainy";
    Weather["Cloudly"] = "cloudly";
    Weather["Windy"] = "windy";
    Weather["Stormy"] = "stormy";
})(Weather || (exports.Weather = Weather = {}));
var Visibility;
(function (Visibility) {
    Visibility["Great"] = "great";
    Visibility["Good"] = "good";
    Visibility["Ok"] = "ok";
    Visibility["Poor"] = "poor";
})(Visibility || (exports.Visibility = Visibility = {}));
