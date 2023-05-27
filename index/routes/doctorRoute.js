import { Router } from "express"

import { doctors } from "../database/usersArray.js"

import doctorModel from "../database/doctorModel.js"

const router = new Router()



router.get('/', (req, res)=>{
    res.render('doctors', {doctors})
})



router.get('/view1', (req, res)=>{

    res.send({
        name: "Dr/ Ahmed",
        subject1: "JAVA",
        subject2: "ANDROID",
        subject3:"SOFT1",
        subject4:"SOFT2"
    }
    )
   
})

router.get('/view2', (req, res)=>{

    res.send(
    {
        name: "Dr/ Mohammed",
        subject1: "C++",
        subject2: "MATH2",
        subject3:"AI",
        subject4:"ML"
    }

    )
   
})

router.get('/view3', (req, res)=>{

    res.send(
    {
        name: "Dr/ Sara",
        subject1: "SECURITY",
        subject2: "NETWORK",
        subject3:"OS1",
        subject4:"OS2"

    }

    )
   
})

router.get('/view4', (req, res)=>{

    res.send(
    {
        name: "Dr/ Heba",
        subject1: "LOGIC",
        subject2: "MEDIA",
        subject3:"IMAGE",
        subject4:"GRAPHIC"
    }

    )
   
})



router.get('/create', (req, res)=>{
    doctorModel.create(doctors)
    res.send("Done")


})


export default router
