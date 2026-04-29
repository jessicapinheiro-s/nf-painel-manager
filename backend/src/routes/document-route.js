import { Router } from "express";
import { validate } from "../middlewares/validate.js";
import { schemaCreateDocument } from "../schema/document.schema.js";
import { createDocument } from "../controllers/document-controller.js";
import { auth } from "../../src/middlewares/auth.js";

const document_router = Router();

document_router.post("/create", auth, validate(schemaCreateDocument), createDocument);

export default document_router;
