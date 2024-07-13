
difference between the node and the express.js?
basically expressjs is the package that help the programmer to build the server although the programmer can build the server using the node itself using the http but what express do it will make it easy fot the programmer to write it but on the backend side it indirecly using the https property of the nodejs that means we can use all nodejs functionalities in express and writing in expressis short and easy to unedrstand


what is express.js?
it is a package that is available on npm that is used to create server in easy and short way and it can use all the functionalies from the node 

why express.js?
bcoz httpd is difficult to use to build the serverand that's why express makes the things easier


what is routing?
routing means the url that we have in our website that are used from one screen to another and the coding of it is called routing 
like /profile
/contacts
/home

what is middleware?

it is a type of function that run before the routes that mean whatever would be the route but the middleware would run before all the routes and the code inside it run first then the router's code 

what are request and response?

req-> all the user info
res-> controls on the basis we are able to send the data from the server
next-> it is just a push so that are request moves to the next thing 

what are route parameter?

//do you think we create this number of routes again and again the answer is no

www.facebook.com/profile/harsh
www.facebook.com/profile/hardik
www.facebook.com/profile/harshita

//to solve the above probelem we use dynamic routing 
so when in a route soem part remain same and some part changes constantly then that time we use dynamic routing

/profile/:username    here this : means that inplace of username we can put anything


what are template engines?

they use some style of markup and use that to give us the html 
this is not the html this is just get convert into the html

ejs is very very simiplar to html 
ex -> pug, handlebars, ejs, jade 



like ejs is html with superpower like do calculation or do javascript 
for ejs setup:
1. ejs install
2. configure ejs(app.set)
3. create a views folder
4. create ejs file in it
5. instead of send use render now
6. render the file that is inside the views folder don't put .ejs 


what are static files?

like image video frontend javascript css

1. create a folder
2. create three folder inside it, images, stylesheets, javascripts
3. configure the express static in script.js
4. understand the path 



what are http method?



what is error handling ?

it's something that we ask the rong request from the server

what is server?
server is nothing nut anything that is working for 24hr and connected to the intrernet and giving the response the request the slient is asking is called the server your computer can be server for that you have to just code it so that reaponse to all the request the client is asking 


understand internet using a movie?

so you are holding a phone and you send the the message or a call to someone so basically when you send the message that goes to you nearest tower through the packets of bits and bytes basically the message is continouslly travelling in the form of bits and bytes but we won't able to see it so when this data reach to the tower then it goes to your isp that is internet service provider which check your request whether it is valid or not then it convert that signal into the electrical signal and send it through thr optical wire through thr ocean to the server you reqested and then the sme process happen from their side as well data get back to you as a response

the datapack that the company or isp provide basically calculate how many bits of data already travel through the optical cable and the moment it calculate that you have reached you limit you get a message that say that you have already used your data 

in case of wifi what happen is first the pakets go to the router then to the nearest tower and vice versa



if you really wanna know what heppens then watch the movie lucy 

what is ip, mac and router?

mac address come in picture when you are using the local area network 