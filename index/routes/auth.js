import { Router } from "express"
import { doctorForm, login, loginForm, register, registerForm } from "../controller/doctor.js";


const router =new Router();
router.get("/register",registerForm);
router.post("/register",register);

router.get("/login",loginForm);
router.post("/login",login);


router.get("/createDocor",doctorForm);



export default router;