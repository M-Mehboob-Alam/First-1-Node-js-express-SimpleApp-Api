const express = require('express');
const app =express();
const port = 4300;
const router = express.Router();
const Datastore =require('nedb');
const students = new Datastore({filename:'database/students.db', autoload: true});



app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended:true}));


// Get Api for testing 
// Endpoint: localhost:4300/api/v1/test
router.get("/api/v1/test/", async(req, res)=>{
  await students.find({}).exec(function(err, data){
    res.send('testing endpoints is now working');
  });
    console.log('testing endpoints');

});

// GET Api for  student data
// Endpoint: localhost:4300/api/v1/students
router.get("/api/v1/students/", async(req, res)=>{
    await students.find({}).exec(function(err, data){

      res.send(data);
    });
      console.log('get students endpoints');
  });


// Post Api for  student data
// Endpoint: localhost:4300/api/v1/students
router.post("/api/v1/students/", async(req, res)=>{
    await students.insert(req.body, (err, storeData)=>{

        res.send('data stored successfull');
    })
  });  
  



app.use(router);
app.listen(port, ()=> {console.log('server is now running')});