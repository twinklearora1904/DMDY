const multer = require("multer");
const CloudinaryStorage = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

const storage = CloudinaryStorage({
    cloudinary: cloudinary,
    folder: "dmdy_blogs",
    allowedFormats: ["jpg", "jpeg", "png", "webp"],
});

const upload = multer({ storage: storage });

module.exports = upload;
