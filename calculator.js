const express = require("express");
const bodyParser =require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extented: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});


app.post("/",function(req,res){
   
 var num1= Number(req.body.num1);
 var num2= Number(req.body.num2); 
 
 var result= num1 + num2;

    res.send("The Reault of the calculation is" + result);
});

app.get("/bmicalculator",function(req,res){
   res.sendFile(__dirname+"/bmicalculator.html");
});

// app.post("/bmicalculator",function(req,res){
    
//  var weight=parseFloat(res.body.weight);
//  var height=parseFloat(res.body.height);
 
//  var result= weight/(height*height);

//  res.send("The BMI is "+ result);

// });


app.post("/bmicalculator",function(req,res){
   
    var num1= parseFloat(req.body.weight);
    var num2= parseFloat(req.body.height); 
    
    var result= num1 * (num2*num2);
   
       res.send("The BMI is  " + result);
   });

app.listen(3000 , function(){
console.log("server started on port 3000");
});