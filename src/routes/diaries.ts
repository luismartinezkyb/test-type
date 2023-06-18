import express from "express";
const router  = express.Router();
import * as diaryServices from '../services/diaryServices';
import toNewDiaryEntry from "../utils/utils";


router.get('/', (_req, res) => {
    res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});

router.get('/:id', (req, res) => {
    const diary = diaryServices.findById(+req.params.id);
    console.log(diary)

    res.send(diary);
})

//Saving a diary
router.post('/', (req, res) => {
    try {
        // const {date, weather, visibility, comment}= req.body;

        const newDiaryEntry = toNewDiaryEntry(req.body);
        const addedDiaryEntry = diaryServices.addEntry(newDiaryEntry);
        res.json(addedDiaryEntry);
    } catch (e:any) {
        console.log(e)
        res.status(400).send(e.message)
    }

    
})


export default router;