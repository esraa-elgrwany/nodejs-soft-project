import { Router } from "express"
import department from "../database/department.js";
import subject from "../database/subject.js";
import { create, index, show, store,edit,update ,deleteOne} from "../controller/subject.js";

const router =new Router();

router.get("/", index );
router.get("/create", create);
router.post("/", store);
router.get("/:_id", show);
router.get("/:id/edit", edit);
router.put("/:id",update);
router.delete("/:id",deleteOne);
export default router;