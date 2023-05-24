import department from "../database/department.js";
import studentAccount from "../database/studentAccount.js";
import bcrypt from 'bcryptjs';


export const savestudent = async (req, res) => {
    const { first_name, last_name, academic_number, department, username, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const encryptedPassword = bcrypt.hashSync(password, salt)
    await studentAccount.create({
        first_name,
        last_name,
        academic_number,
        username,
       // department,
        password: encryptedPassword
    })


    res.redirect("/student/create")
}
export const createstudent = async (req, res) => {
   
    res.render("studentAccount/studentAcc")
}