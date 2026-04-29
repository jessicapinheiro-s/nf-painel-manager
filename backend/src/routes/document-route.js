import { Router } from "express";
import { validate } from "../middlewares/validate";
import { schemaCreateDocument } from "../schema/document.schema";
import { createDocument } from "../controllers/document-controller";

const document_router = Router();

document_router.post("/create", validate(schemaCreateDocument), createDocument);

export default document_router;
