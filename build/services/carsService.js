"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCars = exports.findById = exports.getEntries = void 0;
const cars_json_1 = __importDefault(require("./cars.json"));
const Cars = cars_json_1.default;
const getEntries = () => Cars;
exports.getEntries = getEntries;
const findById = (id) => {
    const entry = Cars.find(d => d.Id === id);
    return entry;
};
exports.findById = findById;
const addCars = (NewCarEntrie) => {
    const newCar = {
        Id: Math.max(...Cars.map(d => d.Id)) + 1,
        ...NewCarEntrie
    };
    Cars.push(newCar);
    return newCar;
};
exports.addCars = addCars;
