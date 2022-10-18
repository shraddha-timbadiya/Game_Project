
const express = require('express')
const router = express.Router()
require('../db/conn')
const playersdata = require('../model/playersdata')

router.post('/gamedata',async(req,res)=>{
    try{
        let user = new playersdata(req.body)
        console.log(user)
        let result = await user.save()
        res.status(200).send(result)
    }catch(err){
        console.log(err)
    }
})

module.exports = router