import jwt from 'jsonwebtoken';


export const authentication= (req,res ,next)=>{
    const {token}=req.cookies;
    console.log(token);
    try{
        const decoded=  jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        
        console.log(decoded);
        next();
    }catch(error){

        return res.redirect('/login ');
    }


    console.log('sultan');
};

