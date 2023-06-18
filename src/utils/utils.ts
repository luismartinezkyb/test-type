import {NewDiaryEntry, Visibility, Weather} from "../types";

const parseComment = (commentFromRequest:string)=>{
    if(!isString(commentFromRequest)){
        throw new Error('Incomming missing value for comment');
    }

    return commentFromRequest;
}

const parseDate = (dateFromRequest:any):string=>{
    
    if(!isString(dateFromRequest) || !isDate(dateFromRequest)){
        throw new Error('Incomming missing value on Date');
    }
    return dateFromRequest;
}
const parseWeather = (weatherFromRequest:any):Weather=>{
    if(!isString(weatherFromRequest) || !isWeather(weatherFromRequest)){
        throw new Error('Incomming missing value on Weather');
    }
    return weatherFromRequest;


}

const parseVisibility = (visibilityFromRequest:any):Visibility=>{
    if(!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)){
        throw new Error('Incomming missing value on Visibility');
    }
    return visibilityFromRequest;
}

const isVisibility = (param:any):boolean=>{
    return Object.values(Visibility).includes(param)

}

const isWeather = (param:any):boolean =>{
    return Object.values(Weather).includes(param)
}

const isString= (string:string):boolean =>{
    //  ||  string instanceof String
    return typeof string === 'string'

}
const isDate =  (date:string):boolean =>{
    // console.log(Boolean(Date.parse(date)));
    return Boolean(Date.parse(date))
}

const toNewDiaryEntry = (object:any) : NewDiaryEntry=>{
    const newEntry:NewDiaryEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
        
    }
    return newEntry;
}
export default toNewDiaryEntry;