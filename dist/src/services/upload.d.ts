/**
 * Uploads a file buffer to Cloudinary.
 * @param buffer - The file buffer from multer memoryStorage
 * @param folder  - Cloudinary folder name (e.g. 'doubts', 'messages')
 * @returns The secure URL of the uploaded image
 */
export declare function uploadToCloudinary(buffer: Buffer, folder?: string): Promise<string>;
//# sourceMappingURL=upload.d.ts.map