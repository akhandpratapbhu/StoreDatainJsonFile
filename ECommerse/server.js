var express=require('express');
var bodyParser = require('body-parser')
var fs=require('fs');
var app=express();

var path=require('path');
var staticfolder=express.static(path.join(__dirname,'public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(staticfolder);

app.get("/catalog",(req,res)=>{
    res.write("<h1>Welcome in my home</h1>");
});
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname +"/index.html"));
});
app.get("/aboutus",(req,res)=>{
    res.write("<h1>my name is akhand</h1>");
});
/*app.post("/api/register",(req,res)=>{
// var client  ={'firstname':req.body.firstname,'lastname':req.body.lastname,'email':req.body.email,'pasword':req.body.password};

//var accounts=[];

//accounts.push(client);
//res.send(accounts);
//console.log(accounts);
var customer=req.body;
var path="./data/customers.json";
fs.readFile(path,(err,data)=>{
    var customers=JSON.parse(data);
    customers.push(customer);
    var data=JSON.stringify(customers);
    fs.writeFile(path,data,(err,data)=>{
        console.log("customers json");
        res.send("new registration added....");
    });
   
    
})
})*/
//Customer Controller
app.get("/api/customers",(request, response)=>{
    //write logic for accessing data from customers.json file
    //fill it inside array customers
    //send customers data as repsonse
    var path="./data/customers.json";
    fs.readFile(path,(err,data)=>{
        var customers=JSON.parse(data);
        response.send(customers);
    })
 });
app.post("/api/register", (request, response)=>{
    // get form collection data from request.
    // add it to customers collection json array
    // write json array objects to customers.json file kept at data folder
    // server side.
     var customer=request.body;
     console.log(customer);
     var path="./data/customers.json";
     fs.readFile(path,(err,data)=>{
        var customers=JSON.parse(data);  // get all json objects from file
        customers.push(customer);       //push new registered object into array
        var data_customer=JSON.stringify(customers)
        fs.writeFile(path,data_customer,(err, data)=>{
         console.log("customers.json file is updated with new customer data");
         response.send("new customer is added to customers collection...");
        });
     })
    })
    app.get("/api/products",(request, response)=>{
        //write logic for accessing data from customers.json file
        //fill it inside array customers
        //send customers data as repsonse
        var path="./data/product.json";
        fs.readFile(path,(err,data)=>{
            var product=JSON.parse(data);
            response.send(product);
        })
     });
    app.post("/api/products", (request, response)=>{
        // get form collection data from request.
        // add it to customers collection json array
        // write json array objects to customers.json file kept at data folder
        // server side.
         var customer=request.body;
         console.log(customer);
         var path="./data/product.json";
         fs.readFile(path,(err,data)=>{
            var product=JSON.parse(data);  // get all json objects from file
            product.push(customer);       //push new registered object into array
            var data_customer=JSON.stringify(product)
            fs.writeFile(path,data_customer,(err, data)=>{
             console.log("product.json file is updated with new customer data");
             response.send("new product is added to product collection...");
            });
         })
        })
/*app.post("/api/login",(req,res)=>{
    var incomingdata=req.body;
    console.log(incomingdata);
    if(incomingdata.email==="AA@gmail.com"&&incomingdata.password==="qwer")
    {
        var usertoken={
            "uniqe":8888,
            "source":"ECommerse"
        }
        res.send(usertoken);
    }
    else{
    res.send("invalid user");
    }

})*/
app.post("/api/login",(request, response)=>{
    var incommingData=request.body;
    if(incommingData.email==="ravi@gmail.com"
       &&
       incommingData.password==="seed")
        {
            var userToken={
                "uniqueId":7777,
                "source":"ECommerce"
            }
            response.send(userToken);
        }
    else
    {
        response.send("Invalid User");
    }
 })
app.listen(9090);
console.log("server is running port no.9090");
