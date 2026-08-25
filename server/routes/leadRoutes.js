const express = require("express");
const router = express.Router();
const {
    createLead,
    getLeads,
    updateLeadStatus,
    deleteLead,
} = require("../controllers/leadController");
const { protect, admin } = require("../middleware/authMiddleware");

const { check } = require("express-validator");
const { validate } = require("../middleware/validateMiddleware");

router.route("/")
    .post(
        [
            check("name", "Name is required").not().isEmpty(),
            check("email", "Please include a valid email").isEmail(),
            check("phone", "Phone number is required").not().isEmpty(),
            check("service", "Service is required").not().isEmpty(),
        ],
        validate,
        createLead
    )
    .get(protect, admin, getLeads);

router.route("/:id")
    .put(protect, admin, updateLeadStatus)
    .delete(protect, admin, deleteLead);

module.exports = router;
