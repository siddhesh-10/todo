require('dotenv').config();
const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const requirelogin=require('../middleware/requirelogin');
const bcrypt=require("bcryptjs");
const User=mongoose.model("User");

const jwt=require("jsonwebtoken");
const JWT_SECRET=process.env.JWT_SECRET;


 




// router.post('/createpost', arequirelogin, (req, res) => {
//     console.log("inserver");
//     try {
//         const {softcopy,type,bookname,author,rating,photourl}=req.body;
        
//         const post =new Post({
//             softcopy:softcopy,
//             type:type,
//             bookname:bookname,
//             author:author,
//             rating:rating,
//             photourl:photourl
//         });
//         console.log(post);
//         post.save().then((posts =>{
//             res.status(200).json({message : "posted succesfully"});
//         })).catch((err)=>{
//             console.log(err);
//             res.status(400).json({error : err});
//         })
//       } catch (error) {
//         res.status(422).json({error : "Error, could not upload file"});
//         return;
//       }
//     });

// router.get('/home',requirelogin,(req,res)=>{
//     console.log("in home");
//     const {type}=req.headers;
//     Post.find({type:type})
//     .then(posts=>{
//    res.json({posts : posts})
// }).catch(err=>
// {
//     console.log("here in get home");
//     console.log(err);
// })
// })

//  router.delete('/deletepost/:postId',arequirelogin,(req,res)=>{
    
//         Post.findOne({_id:req.params.postId})
//         .exec((err,post)=>{
//             if(err || !post){
//                 return res.status(422).json({error:err})
//             }
            
//                   post.remove()
//                   .then(result=>{
//                       res.json(result)
//                   }).catch(err=>{
//                       console.log(err)
//                   })
            
//         })
//     })

module.exports=router;