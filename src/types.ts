//export type Weather = 'sunny'|'rainy'| 'cloudly'| 'windy'|'stormy'
//export type Visibility = 'great'| 'good'| 'ok' | 'poor'

export enum Weather{
    Sunny= 'sunny',
    Rayni= 'rainy',
    Cloudly= 'cloudly',
    Windy= 'windy',
    Stormy = 'stormy'
}
export enum Visibility{
    Great= 'great',
    Good= 'good',
    Ok= 'ok',
    Poor= 'poor'
}

export interface DiaryEntry {
    id:number,
    date:string,
    weather: Weather,
    visibility:Visibility,
    comment:string
}

//pick 

//export type SentitiveDiaryEntry = Pick<DiaryEntry, 'id' | 'date'| 'weather'>

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>;

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;

export type AddDiaryEntry = Omit<DiaryEntry, 'id'>;

