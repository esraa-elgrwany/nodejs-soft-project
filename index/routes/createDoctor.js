import { Router } from "express"
import { register, registerForm } from "../controller/createDoctor.js";
import createDoctor from "../database/createDocyor.js";



const router =new Router();
router.get("/createDoctor",registerForm);
router.post("/createDoctor",register);
export default router;