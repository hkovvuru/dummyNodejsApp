const express = require('express');
const Person = require('../db.mongo');
const route = express.Router();


route.get('/user', function(req, res){
    //res.send({type:'GET'});
    if (!req.body){
        return res.status(400).send({message: "Person Cannot be empty!"});
    }

    Person.find({}).then(function(data){
        res.send(data);
    }).catch((error) => {
        console.error(error.message);
        res.send({err: error.message});
    });
});

//add a new member to database

route.post('/user', function(req, res){
    //console.log(req.body);
    //var student = new Student(req.body);
    //student.save();
    if (!req.body){
        return res.status(400).send({message: "Person Cannot be empty!"});
    }
    
    Person.create(req.body).then(function(stud){
       // res.send(stud);
       res.status(201).json(stud);
    }).catch((error) => {
        console.error(error.message);
        res.send({err: error.message});
    });

    //res.send({
      //  type:'POST',
       // name:req.body.name,
        //id:req.body.id
    //});
});





//update a data
route.put('/user/:id', function(req, res){
    if (!req.body){
        return res.status(400).send({message: "Person Cannot be empty!"});
    }
    
    
    Person.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
        Student.findOne({_id:req.params.id}).then(function(data){
            res.send(data);
        });
    }).catch((error) => {
        console.error(error.message);
        res.send({err: error.message});
    });
    //res.send({type:'PUT'});
});





//delete a data from database
route.delete('/user/:id', function(req, res){
    if (!req.body){
        return res.status(400).send({message: "Person Cannot be empty!"});
    }
    
    Person.findByIdAndRemove({_id: req.params.id}).then(function(data){
        res.send(data);
    }).catch((error) => {
        console.error(error.message);
        res.send({err: error.message});
    }); 
    
});

module.export = route;