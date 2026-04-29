import { Router } from "express";
import { auth } from "../../src/middlewares/auth.js";

var user_router = Router();

/* GET users listing. */
user_router.get("/", auth, function (req, res, next) {
  res.send("respond with a resource");
});
user_router.get("/", auth, function (req, res, next) {
  res.send("respond with a resource");
});
user_router.get("/", auth, function (req, res, next) {
  res.send("respond with a resource");
});

export default user_router;
