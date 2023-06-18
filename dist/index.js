"use strict";
//imports
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const diaries_1 = __importDefault(require("./routes/diaries"));
//Initializations
const PORT = process.env.PORT || 3001;
//config
const app = (0, express_1.default)();
//middlewarees
app.use(express_1.default.json());
//routes
app.use('/api/diary', diaries_1.default);
//listen
app.listen(PORT, () => console.log(`Your app is listening on ${PORT}`));
