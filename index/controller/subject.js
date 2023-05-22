import subject from "../database/subject.js";
import department from "../database/department.js";

  export const index = async(req,res) =>{
    const subjects = await subject.find({},{name:1}).lean();
    
    res.render("subjects/index",{subjects});
    };

    export const create = async(req,res)=>{
   const departments =  await department.find().lean();
   const subjects=await subject.find().lean();
        res.render("subjects/create",{departments,subjects});
        
    };
    
    export const edit = async(req,res)=>{
         const{id}=req.params;
         const editFormSubject = await subject.findById(id).lean();
         const departments =  await department.find().lean();
         console.log(departments);
         const subjects =  await subject.find().lean();
             res.render("subjects/edit",{departments,subjects,subject:editFormSubject});
             
         };

    export const store =async (req,res)=>{
const {name,code,department,requirements,stname} = req.body;
console.log(department);

 await subject.create({
    name,
    code,
    department,
    requirements,
    stname
});
        res.redirect("/subjects");
    };

    export const update =async (req,res)=>{
        const {name,code,departments,requirements} = req.body;
        const {id}=req.params;
        await subject.findByIdAndUpdate(id,{$set:{name,code,departments,requirements}})
                res.redirect("/subjects");
            };

    export const show =async (req,res)=>{
const {id} = req.params;
const singleSubject=  await subject.findById(id)
.populate("department")
.lean();
console.log(singleSubject);
res.render("subjects/show",{subject : singleSubject });
    };

   export const deleteOne=async(req,res)=>{
    const{id}= req.params;
    const hideSubject=  await subject.findByIdAndDelete(id);
    
    res.redirect("/subjects");

   };




   export const getAll=async(req,res) =>{
    const subjects = await subject.find().lean();
    console.log(subjects);
    res.render("subjects/generate",{subjects});
    };