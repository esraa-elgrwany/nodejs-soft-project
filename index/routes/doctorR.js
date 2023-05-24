import { Router } from "express"
import { createstaff } from "../controller/doctorAcc.js";
import { savestaff } from "../controller/doctorAcc.js";





const router = new Router();

router.get("/create",createstaff);
router.post("/create", savestaff);




export default router;