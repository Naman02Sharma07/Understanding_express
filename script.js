const express = require("express");//here we store the express in a variable express
const app = express()//here i run the express in the new constant that is app that mean now all the functionalities of express are in the app

//the below one is the middleware

//if the user move from '/' this to '/profile' this so first the app.use will run then the app.get thing goes
//ther can be any number of middleware
app.use(function(req,res,next){

    //request-> contain all the data related to me like my laptop ip, config, device (user data ) send to the server
    console.log(req);//if you want to know what data write this 
    //response ->  the data that i retreive fromm the server or i get from the server that means all thing that we are now gonna write would be in res
    //next -> so our control once goes to the middle ware so to push it to next thing we have to use the next function

    next();//if you wanna know how just run it two times from the home to profile first with this next and the second
    //without this next

});//this this something that would always run before any route 

app.get('/',function(req,res){//her '/' basically means that the first page of the website is generally the / which is somehow hiddn from us 
    //like in google.com or facebook.com there is the '/' but it's hidden so the '/' basically indicates the homepage of our screen

    res.send('hello world');
    //this is the reponse that we get when we land on this page 

})

app.get('/profile',function(req,res){
    res.send('this is for the profile ');
    //this will print when we go to this route or the page 
})

app.get('/profile/:username',function(req,res){//now this will work for all username

    //the things after the : we usually call them params

    res.send(`this is for the profile ${req.params.username}`);//this will alow you to give the username 
    //req that we send
    //params things after the colon
    //username is the name 
})

app.listen(3000);//this is out port number 

//so port number basically means that in out computer there are multiple ports when we select above the particular port
//then our computer will go to that port where it find this page and run it and in reponse it eill get the response that 
//that is hello world


console.log("hello")



//routing
//first create a simple get request
//now do it for some random name
//see if it working
//now put the colon and with a random name 
//this thing the colon with name is called the param 
//now use req.params.the name that use in the send
//before this put all the things in the `` backtick
//but in the url you don't have to write the :