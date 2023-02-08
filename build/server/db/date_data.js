"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateAndData = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const date_dataSchema = new mongoose_1.default.Schema({
    date: String,
    listinagArray: [Number],
    allignment: {}
});
exports.dateAndData = mongoose_1.default.model("dateandData", date_dataSchema);
