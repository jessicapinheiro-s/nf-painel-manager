import {Router} from "express"
import { auth } from "../middlewares/auth.js";
import { validate } from "../middlewares/validate.js";
import { userUpdateSchema } from "../schema/user.schema.js";
import { update } from "../controllers/user-controller.js";
import { get_profile_img } from "../controllers/user-controller.js";

const user_router = Router();

user_router.patch('/update', auth, validate(userUpdateSchema), update);
user_router.get('/get-profile-img/:id', auth, get_profile_img);

export default user_router;