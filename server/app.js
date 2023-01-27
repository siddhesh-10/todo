require('dotenv').config();
const express=require('express');
const app=express();
const PORT=process.env.PORT || 5000;
const mongoose=require('mongoose');
const MONGOURI=process.env.MONGOURI;
const cors = require('cors');
const bodyParser = require('body-parser');


require("./models/user");

var path = require('path')
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var serveStatic = require('serve-static')


app.use(serveStatic(path.join(__dirname, 'dist')))
mongoose.connect(MONGOURI,{
    useNewUrlParser : true,
    useUnifiedTopology:true

});
mongoose.connection.on('connected',()=>{
console.log("connected to mongo")
})
mongoose.connection.on('error',(error)=>{
console.log("error while connecting to mongo",error)
})
app.use(function (req, res, next) {

    // Website you wish to allow to connect
   
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Origin', 'https://keeper10.onrender.com');
    
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(require('./routes/auth'));



if(process.env.NODE_ENV=="production"){
    app.use(express.static('../client/build'))
    const path = require('path');
    console.log("in production");
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'../client','build','index.html'))
    })
}

app.listen(process.env.PORT || 5000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });



