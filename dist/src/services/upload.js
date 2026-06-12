import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';
// Configure cloudinary from env
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
/**
 * Uploads a file buffer to Cloudinary.
 * @param buffer - The file buffer from multer memoryStorage
 * @param folder  - Cloudinary folder name (e.g. 'doubts', 'messages')
 * @returns The secure URL of the uploaded image
 */
export async function uploadToCloudinary(buffer, folder = 'vlm') {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream({ folder, resource_type: 'auto' }, (error, result) => {
            if (error)
                return reject(error);
            if (!result)
                return reject(new Error('No result from Cloudinary'));
            resolve(result.secure_url);
        });
        const readable = new Readable();
        readable.push(buffer);
        readable.push(null);
        readable.pipe(uploadStream);
    });
}
//# sourceMappingURL=upload.js.map