const express = require('express');
const router = express.Router();

// connecting to the database
 var Datastore = require('nedb') ;

 var students = new Datastore({filename: 'database/students.db', autoload: true});
