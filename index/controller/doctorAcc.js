import doctorAccount from "../database/doctorAccount.js";
import bcrypt from 'bcryptjs';


export const savestaff = async (req, res) => {
    const { first_name, last_name, username, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const encryptedPassword = bcrypt.hashSync(password, salt)
    await doctorAccount.create({
        first_name,
        last_name,
        username,
        password: encryptedPassword
    })
    res.redirect("/doctor/create")
}

export const createstaff = async (req, res) => {
    res.render("doctorAccount/doctorAcc" )
}