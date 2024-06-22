"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const bankRouter_1 = require("./bankRouter");
const router = (0, express_1.Router)();
exports.router = router;
router.use("/bank", bankRouter_1.bankRouter);
