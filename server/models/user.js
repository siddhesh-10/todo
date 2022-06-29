const mongoose=require('mongoose');
// const {MONGOURI}=require('./keys');

// mongoose.connect(MONGOURI,{
//     useNewUrlParser : true,
//     useUnifiedTopology:true

// });

const userSchema=new mongoose.Schema({
    name :{
        type :String,
        required :true
    },
    email :{
        type :String,
        required :true  
    },
    password : {
        type :String,
        required :true
    },
    notes :[{
       
             title:{
                type :String,
                required :true
             },
             content:
             {
                 type:String
             }
      
        
       }],
    resetToken:String,
    expireToken:Date
  
})

mongoose.model("User",userSchema);
