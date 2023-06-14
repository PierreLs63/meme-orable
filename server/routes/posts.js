import express from "express";
import { getFeedPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/*READ */
router.get("/",verifyToken,getFeedPosts);
/*UPDATE*/ 

router.patch("/:id/like",verifyToken,likePost);

export default router;