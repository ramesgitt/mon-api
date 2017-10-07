var mongoose=require('mongoose')

var User=mongoose.model('User',{
    email:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    }
})

//var newUser = new User({
//    email:'  adbc@abc.com  '
//})
//
//newUser.save().then((res)=>{
//    console.log("succesfully added",res)
//    
//},(err)=>{
//    console.log(err )
//    
//})
//module.exports={
//    User
//}

