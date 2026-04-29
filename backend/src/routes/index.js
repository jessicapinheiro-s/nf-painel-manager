import { Router } from "express";
var index_router = Router();

/* GET home page. */
index_router.get("/ping", function (req, res) {
  res.send("pong");
});

export default index_router;
