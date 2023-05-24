import subject from "../database/subject.js";
import department from "../database/department.js";
export const index = async(req,res) =>{
    const departments = await department.find({},{name:1}).lean();
    
    res.render("departments/indexd",{departments});
    };

    export const create = async(req,res)=>{
   const departments =  await department.find().lean();

        res.render("departments/create",{departments});
        
    };

    export const store =async (req,res)=>{
const {name,code} = req.body;
 await department.create({
    name,
    code,
});
        res.redirect("/departments");
    };

 export const show =async (req,res)=>{

 const departments =  await department.find().lean();
res.render("departments/showd",{ departments});
    };