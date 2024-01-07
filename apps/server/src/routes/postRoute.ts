import { Router } from "express";
import {
  ShowPost,
  comments,
  createPost,
  likes,
} from "../controllers/PostController";
import { isAuthenticated } from "../middlewares/Auth";

let router = Router();

router.route("/post").post(isAuthenticated, createPost);
router.route("/showpost").get(isAuthenticated, ShowPost);
router.route("/likes/:_id").post(isAuthenticated, likes);
router.route("/comment/:_id").post(isAuthenticated, comments);

export default router;
