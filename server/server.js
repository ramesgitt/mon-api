const express = require('express')
const bodyParser=require('body-parser')
const{ObjectId}=require('mongodb')


var{mongoose}=require('./db/mongoose')
var{Todo}=require('./models/todo.js')
var{User}=require('./models/user.js')

var app=express()

app.use(bodyParser.json())

//app.post('/todos',(req,res)=>{
//    var newTodo=new Todo({
//        text :req.body.text
//    })
//    
//    newTodo.save().then((doc)=>{
//        res.send(doc)
//          
//    },(err)=>{
//        res.status(400).send(err)
//    
//        
//    })
//    
//    
//})

app.post('/todos',(req,res)=>{
    var sec=new Todo({
        text:req.body.text,
        completed:req.body.completed
    })
    
    sec.save().then((doc)=>{
        res.send(doc)
        
    },(err)=>{
        res.status(400).send(err)
    })
})


app.get('/todos',(req,res)=>{
    Todo.find().then((docs)=>{
        res.send({docs})
    },(e)=>{
      console.log(e)  
    })
})


//app.get('/todos/:id',(req,res)=>{
//   var id=req.params.id
//   if(ObjectId.isValid(id)){
//       Todo.findById(id).then((doc)=>{
////        if(!doc){
////            res.status(404).send()
////        }
//           res.send(doc)
//           
//       },(e)=>{
//           res.status(400).send()
//           
//       })
//       
//   }else{
//       res.status(404).send()
//   }
//    
//})

app.get('/todos/:id',(req,res)=>{
    var id=req.params.id
    if(!ObjectId.isValid(id)){
        return res.status(404).send()
    }
    Todo.findById(id).then((todo)=>{
        if(!todo){
            return res.status(404).send()
        }
        res.send({todo})
        
    }).catch((e)=>{
        res.status(400).send()
    })
    
    
    
    
})









app.listen(3000,()=>{
    console.log("server start at port 3000")
})




    
    
