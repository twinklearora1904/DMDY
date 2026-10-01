const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadStreamToCloudinary = (fileBuffer, folder = "dmdy_blogs") => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {
                folder,
                resource_type: "image",
                allowed_formats: ["jpg", "jpeg", "png", "webp", "avif"],
                transformation: [
                    { quality: "auto:good", fetch_format: "auto" }
                ],
            },
            (error, result) => {
                if (error) return reject(error);
                resolve(result);
            }
        );
        stream.end(fileBuffer);
    });
};

const deleteFromCloudinary = async (publicId) => {
    if (!publicId) return;
    try {
        await cloudinary.uploader.destroy(publicId);
    } catch (err) {
        console.error("Cloudinary deletion failed:", err.message);
    }
};

module.exports = {
    cloudinary,
    uploadStreamToCloudinary,
    deleteFromCloudinary,
};
