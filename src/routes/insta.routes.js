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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.instaRoutes = void 0;
var express_1 = require("express");
var node_fetch_1 = __importDefault(require("node-fetch"));
var instaRoutes = express_1.Router();
exports.instaRoutes = instaRoutes;
instaRoutes.post("/", function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, user_id, how_many, link, options, fetchResponse, data, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = request.body, user_id = _a.user_id, how_many = _a.how_many;
                link = "https://www.instagram.com/graphql/query/?variables=%7B%22id%22%3A%22" + user_id + "%22,%22first%22%3A" + how_many + "%7D&query_hash=bfa387b2992c3a52dcbe447467b4b771";
                options = {
                    headers: {
                        cookie: 'ig_did=C7F9C827-6F3B-49AA-9A03-9DE30B041853; mid=YEafNQALAAFq0ow-MT4ueOqDPfO6; ig_nrcb=1; fbm_124024574287414=base_domain=.instagram.com; shbid=7954; shbts=1620054269.041156; csrftoken=pwuNJf9hQombnygYANjvwLbtEQWKKGTu; ds_user_id=47544171462; sessionid=47544171462%3AuMlmQAtg7f2TCy%3A8; rur=ATN; fbsr_124024574287414=f5zSqDDWFgR6oFxAbBqvgz8PiobmkF_c6pjdGMkOErQ.eyJ1c2VyX2lkIjoiMTAwMDY2NjYyMTA0MDI5IiwiY29kZSI6IkFRREJJT0hrTjZQbllIRVdtZU5EU2VOT2hjMlRLc05ra1JxcUJ4RmktMmFNb1REOEdOUkU1eDNzYlRMRWQ1QlFTY0lJanRMQS04QUU2Wjk1SnFzMEF4aVg2N0xTeExjT2FGdHJQbWZzMWJ0WXF2M09EVk9WVHBIazNxalVTOHJwSWVxd2h5bFNYM1JpbXM3VVotc3ZtbFduM1pHZUh6WEpmX2REMkNxZmk0QUxOak5CeDlmZEgxRGNteWg1RTFINThNWHkzRDBWQVBnVXhORlIwZng3dTZOSjlwT0ZYRmt6ZU1SUW1GQUR3XzBzMmZrajhRM2h2LUJ3SDdYNWxTcTRlMk43dTR2MXVrN1hpeWhkeFRCRVhxVmJiMGFMQnY1UWEwajJISzhFbWJYbnVtaGJzeDFEbzl2a1c3SXNDLXg1TEk2UkU2QW41LXgyMHk5aGp0b2hkanN2YjRqaEtkVHNtbWx2ZDlNTHBPSXZmUSIsIm9hdXRoX3Rva2VuIjoiRUFBQnd6TGl4bmpZQkFIb2gyMnpkNWllaElrRW9mNEhFMm1iRHhNWkNTSVJoM0ZPQnNqSVNBVk9QNGdaQ0N0UHNqYW1QTkhCVVIyNjNEZU9ESmJwWkFYcURHTFl3ZzA4WkF1MVpCcEV5bVFxOTRpYzZ1d2I2SzJ1WkI4ZlVRSnU5b3FzNFR6MEtEb01iQTdEWkJkS1JKZDhPcTBKTnB2czd6VGhobGhzWkFyNW8zMHBESEs1aXdScEVHaWx1ZVRscGl3VVpEIiwiYWxnb3JpdGhtIjoiSE1BQy1TSEEyNTYiLCJpc3N1ZWRfYXQiOjE2MjAxNzY0OTB9'
                    }
                };
                return [4 /*yield*/, node_fetch_1.default(link, options)];
            case 1:
                fetchResponse = _b.sent();
                return [4 /*yield*/, fetchResponse.json()];
            case 2:
                data = _b.sent();
                return [2 /*return*/, response.json(data)];
            case 3:
                error_1 = _b.sent();
                return [2 /*return*/, response.json({ error: error_1.message })];
            case 4: return [2 /*return*/];
        }
    });
}); });
