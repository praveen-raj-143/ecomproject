const route=require("express").Router()
const controll = require("../Contoller/mobile")

route.get("/accessories",controll.findAll)
route.get("/bestseller",controll.findbestAll)

module.exports=route;