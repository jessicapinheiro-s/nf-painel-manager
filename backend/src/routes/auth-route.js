import { Router } from "express";

import { validate } from "../middlewares/validate";
import { schemaAuthLogin, schemaAuthRegister } from "../schema/auth.schema";
import { auth_login, auth_logout, auth_register } from "../controllers/auth-controller";
import { authLimiter } from "src/middlewares/rate-limit";


var auth_router = Router();

/* GET users listing. */
auth_router.get("/register", validate(schemaAuthRegister), authLimiter, auth_register);
auth_router.get("/login", validate(schemaAuthLogin), authLimiter, auth_login);
auth_router.get("/logout", auth_logout);

export default auth_router;
