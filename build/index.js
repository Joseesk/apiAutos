"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cars_1 = __importDefault(require("../src/routes/cars"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 4001;
app.get('/', (_req, res) => {
    console.log('todo funciona bien');
    res.send('Funciona bien');
});
app.use('/cars', cars_1.default);
app.listen(PORT, () => {
    console.log(`el servidor está corriendo en http://localhost:${PORT}/`);
});
