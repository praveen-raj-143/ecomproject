const express=require("express");
const Router=require("./Routes/route")

const app = express();
app.use(express.json())
const cors=require("cors")
app.use(cors({
    origin:"*"
}))
app.use(Router)

const PORT=5245;


app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})