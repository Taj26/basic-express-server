import express from "express";

const app = express();

app.use(express.json()) // This line imp for post,put,delete apis

const PORT = 5001;


app.get("/",(req,res)=>{
  try {
    res.status(200).json({msg: "Hello"});
  } catch (error) {
   console.log(error); 
   res.status(400).json({msg: "error"});
  }})



app.post("/register",(req,res)=>{
    let userData = req.body
    console.log(userData)
    // res.json(userData)
    // // or
    res.json({msg:"user registered successfully"})
})

app.put("/students/:roll",(req,res)=>{
  let id = req.params.roll;
  console.log(id)
  res.json(id)
})

app.put("/students/:roll",(req,res)=>{
  let id = req.params.roll;
  console.log(id)
  res.json(id)
})

app.delete("/students/:roll",(req,res)=>{
  let id = req.params.roll;
  console.log(id)
  res.json(id)
})



app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})
