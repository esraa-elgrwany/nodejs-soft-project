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
    const{_id}=req.params;

 const departments =  await department.findById(_id).lean();
res.render("departments/showd",{ departments});
    };
    
 export const edit = async(req,res)=>{
        const{id}=req.params;
        const editFormDepartment = await department.findById(id).lean();
        const departments =  await department.find().lean();
     res.render("departments/edit",{departments,department:editFormDepartment});   
        };

 export const update =async (req,res)=>{
            const {name,code} = req.body;
            const {id}=req.params;
            await department.findByIdAndUpdate(id,{$set:{name,code}})
                    res.redirect("/departments");
                };

  export const deleteOne=async(req,res)=>{
                    const{id}= req.params;
                    const deleteDepartment=  await department.findByIdAndDelete(id);
                    
                    res.redirect("/departments");
                
                   };