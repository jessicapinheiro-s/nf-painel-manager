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
  const { id } = req_params;
  
  if (!id) {
    throw new Error("user url profile image is missing");
  }

  const user = await prisma.user.findUnique({
    where: {
      id: id
    },
    select: {
      url_profile_image: true
    }
  })

  const { data: img_url_storage, error: error_get_profile_user_img } =
    await supabase.storage().from("profiles-img").getPublicUrl(user.url_profile_image);

  if (error_get_profile_user_img) {
    throw error_get_profile_user_img;
  }
 c  
  return img_url_storage;
};
