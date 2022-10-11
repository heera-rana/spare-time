const express = require("express")
const recordRoutes = express.Router()
const dbo = require("../db/connection")
const cors = require('cors')
const { ErrorResponse } = require("@remix-run/router")
var ObjectId = dbo.getObjectId()
const app = express()

app.use(cors({
    origin: "http://localhost:3000"
}))

//Get a list of all data
recordRoutes.route("/router").get(function(req,res){
    let db_connect = dbo.getDb("data")
    db_connect
        .collection("users")
        .find({})
        .toArray(function(err,result){
            if (err) throw err
            res.json(result)
        })
})

//Gets a single user by id
recordRoutes.route("/router/:id").get(function(req,res){
    let db_connect = dbo.getDb()
    let myquery = {_id: ObjectId(req,params.id)}
    db_connect  
        .collection("users")
        .findOne(myquery,function(err,result){
            if (err) throw err
            res.json(result)
        })
})

//Allows to create a new user
// recordRoutes.route("/signUp").post(function(req,response){
//     console.log('here')
//     let db_connect = dbo.getDb()
//     let myobj = {
//         username: res.body.username,
//         password: req.body.password,
//     }
//     db_connect.collection("users").insertOne(myobj,function(err,res){
//         if (err) throw err
//         response.json(res)
//     })
//    // db_connect.users.insert(myobj) 
// })

module.exports = recordRoutes