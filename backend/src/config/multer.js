import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const hash = crypto.radomBytes(6).toString("hex");
    const fileName = `${hash}-${file.originalname}`;
    cb(null, fileName);
  },
});
export const upload = multer({ storage });
