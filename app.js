var express = require("express");
var app = express();
app.use(express.static("style"));

app.get("/" , function(req,res){
	res.render("index.ejs");
});

app.get("/colorgame" , function(req,res){
	res.render("index.ejs");
});


app.listen(3000 , function(){
	console.log("server started of colorgame project..");
});