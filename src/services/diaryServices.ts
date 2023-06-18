import diaryData from '../data/diaries.json';
import { AddDiaryEntry, DiaryEntry, NonSensitiveInfoDiaryEntry} from '../types';



const diaries: Array<DiaryEntry>= diaryData as Array<DiaryEntry>;

export const getEntries = ():DiaryEntry[] => diaries

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined =>{
    const entry = diaries.find(entry => entry.id===id)
    if(entry){
        const {comment, ...restOf} = entry

        return restOf;
        
    }
    
    return undefined;
    
}



export const getEntriesWithoutSensitiveInfo = () : NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({id, date, weather, visibility})=>{
        return {id, date, weather, visibility}
    });
}

export const addEntry = (data: AddDiaryEntry):DiaryEntry=> {
    const newDiaryEntry = {
        id:diaries.length +1,
        ...data
    };
    diaries.push(newDiaryEntry);
    return newDiaryEntry;
};