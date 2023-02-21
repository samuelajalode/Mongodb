"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
mongoose_1.default.connect(process.env.DATABASE_URL, () => {
    console.log('Connected to database');
});
mongoose_1.default.connect("");
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.use('/todos', todoRoutes_1.default);
const Port = 4000;
app.listen(Port, () => {
    console.log(`Server running at httt://localhost:${Port}`);
});
