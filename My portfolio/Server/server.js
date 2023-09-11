let express = require("express")

let server = express()

server.use(express.static("My portfolio"))

server.get("/home",(req,res)=>{
  res.redirect("Views/home.html")
})

server.get("/about",(req,res)=>{
  res.redirect("Views/about.html")
})

server.get("/stacks",(req,res)=>{
  res.redirect("Views/stacks.html")
})

server.get("/projects",(req,res)=>{
  res.redirect("Views/projects.html")
})

server.get("/reviews",(req,res)=>{
  res.redirect("Views/reviews.html")
})

server.get("/contact",(req,res)=>{
  res.redirect("Views/contact.html")
})

server.listen(5500,()=>{
  console.log("connected");
})