import doctor from '../database/doctor.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

 export const registerForm =(req,res) => {
    res.render("authentication/register"); 
};


export const register = async(req,res) => {
   const {username,email,password} = req.body;
    const salt =  bcrypt.genSaltSync(10);
    const encryptedPassword=bcrypt.hashSync(password,salt);
    console.log(encryptedPassword);
    await doctor.create({username,email,password: encryptedPassword });
    res.redirect('/login')
};

// hadyy@gmail.com  12345




export const loginForm =(req,res) => {
    res.render("authentication/login"); 
};


export const login = async (req,res) => {
    const {email,password} = req.body;
    const loggedDoctors =  await doctor.findOne({email});
    const isCorrectPassword= bcrypt.compareSync(
        password,
        loggedDoctors.password
    );
    if(!isCorrectPassword){
        return res.send('Incoricte credentials');
        }
        const data= {
            _id: loggedDoctors._id,
            email: loggedDoctors.email,

        };
        
       const jwtToken = jwt.sign(data, process.env.JWT_SECRET);
       console.log(jwtToken)

        
  


    // console.log(email,password);
    res.cookie('token',jwtToken); 
    res.send('loggin')
};

