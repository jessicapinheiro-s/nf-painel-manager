import { prisma } from "../../prisma/prisma.js";
import { supabase } from "../../supabase/supabase.js";

export const f_update = async (req_body) => {
  const { name, id } = req_body;

  return await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      name: name,
    },
  });
};

export const f_get_profile_img = async (req_params) => {
  const { img_url } = req_params;
  
  if (!img_url) {
    throw new Error("user url profile image is missing");
  }

  const { data: img_url_storage, error: error_get_profile_user_img } =
    await supabase.storage().from("profile-img").getPublicUrl(img_url);

  if (error_get_profile_user_img) {
    throw error_get_profile_user_img;
  }

  return img_url_storage;
};
