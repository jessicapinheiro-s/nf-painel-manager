import { Router } from "express";
import { validate } from "../middlewares/validate.js";
import { schemaCreateDocument } from "../schema/document.schema.js";
import { createDocument } from "../controllers/document-controller.js";
import { auth } from "../../src/middlewares/auth.js";
import { upload } from "../config/multer.js";

const document_router = Router();

document_router.post("/upload", auth, validate(schemaCreateDocument), upload.single('avatar'), createDocument);

export default document_router;
