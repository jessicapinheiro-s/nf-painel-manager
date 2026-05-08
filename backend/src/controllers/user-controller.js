import { success } from "zod";
import { f_update, f_get_profile_img } from "../services/user-service.js";

export const update = async(req, res) => {
    const response = await f_update(req.body);

    return res.status(200).json({
        success: true,
        data: response
    })
}

export const get_profile_img = async(req, res) => {
    const respnse = await f_get_profile_img(req);

    return res.status(200).json({
        sucess: true,
        data: response
    });

}