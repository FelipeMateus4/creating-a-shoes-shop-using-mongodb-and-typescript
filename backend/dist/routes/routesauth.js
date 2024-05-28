"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authrouter = void 0;
const express_1 = require("express");
const shoesController_1 = require("../controller/shoesController");
const socksController_1 = require("../controller/socksController");
const userlogincontroller_1 = require("../controller/userlogincontroller");
const authController_1 = require("../controller/authController");
const middleware_1 = require("../middleware/middleware");
const router = (0, express_1.Router)();
exports.authrouter = router;
router.use("/thundershoes", middleware_1.authenticateToken, shoesController_1.shoesController);
router.use("/thundersocks", middleware_1.authenticateToken, socksController_1.socksController);
router.post("/logout", middleware_1.authenticateToken, authController_1.logoutUser);
router.get('/profile', middleware_1.authenticateToken, authController_1.getUserProfile);
router.use('/update', middleware_1.authenticateToken, userlogincontroller_1.userloginController);