import { Router } from "express";

const router = Router();

import {
  userDemo,
  loginUser,
  registerUser,
  Trail,
} from "../controllers/user.controllers.js";

router.route("/demo").post(userDemo);
router.route("/check").get(Trail);
router.route("/registerUser").post(registerUser);
router.route("/loginUser").post(loginUser);
router.route("/").get((req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, { message: "Api is working perfectly" }));
});

export default router;
