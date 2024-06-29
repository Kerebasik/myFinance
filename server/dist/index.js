"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routers_1 = require("./routers");
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve("..", ".env") });
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api", routers_1.router);
app.listen(PORT, () => {
    console.log(`Server start..... PORT:${PORT}`);
});
