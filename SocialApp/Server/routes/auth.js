import express from "express";
import { login } from "../controllers/auth.js";

const router = expres.Router();

router.post("login", login);

export default router;
