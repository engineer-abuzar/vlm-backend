import multer from 'multer';
const storage = multer.memoryStorage();
// Image-only upload (for doubts, chat, profile photos)
export const upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
    fileFilter: (_req, file, cb) => {
        const allowedImages = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
        const allowedDocs = ['application/pdf', 'image/jpeg', 'image/png'];
        const allowedVideos = ['video/mp4', 'video/webm', 'video/quicktime'];
        const allowed = [...allowedImages, ...allowedDocs, ...allowedVideos];
        if (allowed.includes(file.mimetype)) {
            cb(null, true);
        }
        else {
            cb(new Error(`File type ${file.mimetype} is not allowed`));
        }
    },
});
// Video-specific upload (larger size limit)
export const videoUpload = multer({
    storage,
    limits: { fileSize: 100 * 1024 * 1024 }, // 100 MB for demo videos
    fileFilter: (_req, file, cb) => {
        const allowedVideos = ['video/mp4', 'video/webm', 'video/quicktime', 'video/x-msvideo'];
        if (allowedVideos.includes(file.mimetype)) {
            cb(null, true);
        }
        else {
            cb(new Error('Only video files are allowed'));
        }
    },
});
//# sourceMappingURL=upload.js.map