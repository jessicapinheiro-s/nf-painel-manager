import { f_upload_document } from "src/services/document-service";

export const createDocument = async(req, res) => {
    const response = await f_upload_document(req);
    return res.status(200).json({
        sucess: true,
        data: response
    });
}