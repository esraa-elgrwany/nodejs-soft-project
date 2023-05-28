import doctor from '../database/doctor.js';
import bcrypt from 'bcryptjs';
import createdoctor from '../database/createdoctor.js';


export const registerForm =(req,res) => {
    res.render("authentication/createDoctore"); 
};


export const register = async(req,res) => {
   const {email,password} = req.body;
    const salt =  bcrypt.genSaltSync(10);
    const encryptedPassword=bcrypt.hashSync(password,salt);
    console.log(encryptedPassword);
    await createdoctor.create({email,password: encryptedPassword });
    res.redirect('/mean');
};