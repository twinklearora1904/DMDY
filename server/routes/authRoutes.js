const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { loginUser, getProfile } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");
const { validate } = require("../middleware/validateMiddleware");
const loginLimiter = require("../middleware/loginLimiter");

router.post(
    "/login",
    loginLimiter,
    [
        check("email", "Please include a valid email").isEmail(),
        check("password", "Password is required").exists(),
    ],
    validate,
    loginUser
);
router.get("/me", protect, getProfile);

module.exports = router;
