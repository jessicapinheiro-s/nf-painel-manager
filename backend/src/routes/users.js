import { Router } from "express";

var user_router = Router();

/* GET users listing. */
user_router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
user_router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
user_router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

export default user_router;
