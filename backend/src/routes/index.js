import { Router } from "express";
var index_router = Router();

/* GET home page. */
index_router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

export default index_router;
