import { generate_safe_name } from "../utils/utils.js";
import { supabase } from "../../supabase/supabase.js";
export const f_upload_document = async (req_body) => {
  const allowedTypes = ["application/pdf"];

  /*
        {
  fieldname: 'file',
  originalname: 'foto.png',
  encoding: '7bit',
  mimetype: 'image/png',
  destination: 'uploads/',
  filename: '1699999999999-foto.png',
  path: 'uploads/1699999999999-foto.png',
  size: 24567
}
    
    */
  const { user_id, file, files } = req_body;

  if (files.length > 1) {
    throw new Error("we only accept 1 file per upload");
  }

  if (!user_id || !file) {
    throw new Error("some properties are missing (user_id or file)");
  }

  if (file.size > 10485760) {
    throw new Error("the file size exceeded 10MG");
  }

  if (!allowedTypes.includes(file.mimetype)) {
    throw new Error("the file type is not accepted");
  }
  const today = new Date();
  const safeName = generate_safe_name(file.originalname, user_id);

  const { data: log_res, error: error_create_log } = await supabase
    .storage("from")
    .upload(safeName, file.buffer);

  if (error_create_log) {
    throw error_create_log;
  }

  const data_log = await log_res.json();

  /*
    {
  data: {
    path: 'public/file.png',
    id: 'uuid-do-arquivo',
    fullPath: 'uploads/public/file.png'
  },
  error: null
}
  */

  return await prisma.upload_logs.create({
    data: {
      user_id: user_id,
      file_path: data_log.data.fullPath,
    },
  });
};
