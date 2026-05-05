import { Router } from "express";

import { validate } from "../middlewares/validate.js";
import { schemaAuthLogin, schemaAuthRegister } from "../schema/auth.schema.js";
import { auth_login, auth_logout, auth_register } from "../controllers/auth-controller.js";
import { authLimiter } from "../../src/middlewares/rate-limit.js";
import { auth } from "../../src/middlewares/auth.js";


var auth_router = Router();

/* GET users listing. */
auth_router.post("/register", validate(schemaAuthRegister), authLimiter, auth_register);
auth_router.post("/login", validate(schemaAuthLogin), authLimiter, auth_login);
auth_router.get("/logout", auth, auth_logout);

export default auth_router;
