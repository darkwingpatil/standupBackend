"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storingData = void 0;
const trcp_1 = require("../../trcp");
const zod_1 = require("zod");
const date_data_1 = require("../db/date_data");
const Alloctment_1 = require("../utils/Alloctment");
exports.storingData = trcp_1.t.router({
    getter: trcp_1.t.procedure.query((res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let data = yield date_data_1.dateAndData.find({});
            return { "msg": data };
        }
        catch (e) {
            return { "msg": `${e.message}` };
        }
    })),
    poster: trcp_1.t.procedure.input(zod_1.z.object({ change: zod_1.z.boolean() })).mutation((res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
            let data = yield date_data_1.dateAndData.find({});
            if (!data[0] || data[0]['date'] != utc) {
                let { listinagArray, allignment } = (0, Alloctment_1.Allotment)();
                if (!data[0]) {
                    let create = new date_data_1.dateAndData({
                        date: utc,
                        listinagArray,
                        allignment
                    });
                    yield create.save();
                    return { "msg": `created successfully ${res.input.change}` };
                }
                yield date_data_1.dateAndData.updateOne({ _id: data[0]["_id"] }, { $set: { date: utc, listinagArray, allignment } });
                return { "msg": `posted successfully ${res.input.change}` };
            }
            return { 'msg': "no changes found" };
        }
        catch (e) {
            return { "msg": `${e.message}` };
        }
    }))
});
