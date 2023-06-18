"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incomming missing value for comment');
    }
    return commentFromRequest;
};
const parseDate = (dateFromRequest) => {
    console.log(!isDate(dateFromRequest));
    console.log(isString(dateFromRequest));
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incomming missing value on Date');
    }
    return dateFromRequest;
};
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Incomming missing value on Weather');
    }
    return weatherFromRequest;
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Incomming missing value on Visibility');
    }
    return visibilityFromRequest;
};
const isVisibility = (param) => {
    return Object.values(types_1.Visibility).includes(param);
};
const isWeather = (param) => {
    return Object.values(types_1.Weather).includes(param);
};
const isString = (string) => {
    //  ||  string instanceof String
    return typeof string === 'string';
};
const isDate = (date) => {
    // console.log(Boolean(Date.parse(date)));
    return Boolean(Date.parse(date));
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
