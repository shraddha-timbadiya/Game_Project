const mongoose = require('mongoose')

const playersSchema = new mongoose.Schema({
        player1:{
                type:String,
                required:true,
                trim:true
        },
        player2:{
                type:String,
                required:true,
                trim:true
        },
        p1score:{
                type:Number,
                required:true
        },
        p2score:{
                type:Number,
                required:true
        },
        winner:{
                type:String,
                required:true,
                trim:true
        },
        diff:{
                type:Number,
                required:true
        }
})
module.exports = mongoose.model('playerdata',playersSchema)
