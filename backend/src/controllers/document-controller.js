import { f_upload_document } from "../services/document-service.js";

export const createDocument = async(req, res) => {
    const response = await f_upload_document(req);
    return res.status(200).json({
        sucess: true,
        data: response
    });
}