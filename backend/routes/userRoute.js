const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/userModel.js');

const router = express.Router();


//create
router.post('/', async(req, res) => {
    // var name = req.body.name;
    const { name , email, age} = req.body;
    try{
        const userAdded = await User.create({
            name : name,
            email : email,
            age : age
        });
        // console.log(userAdded);
        res.status(201).json(userAdded)
    }
    catch(error){
        console.log(error);
        res.status(201).json({error: error.message})
    }
})


// fetch data 
router.get('/', async(req,res) => {
    try{
        // res.send("api is running");
        const showData =await User.find();
        res.send(showData);
    }
    catch(err){
        res.status(201).json({error:"error while fetching"})
    }
})

// fetch single user
router.get('/:id', async(req,res) => {
    const {id} = req.params;
    try{
        const showone = await User.findById({_id:id});
        res.status(200).json(showone);
    }
    catch(err){
        console.log(err);
        res.status(201).json({error:"error while fetching"})
    }
});


// delete

router.delete('/:id',async(req, res) => {
    const {id} = req.params;
    try{
        const deleteone = await User.findByIdAndDelete({_id:id});
        res.status(201).json(deleteone);
    }
    catch(err){
        console.log(err);
        res.send(201).json({err:"error while deleting"})
    }
});

//  update

router.patch('/:id',async(req, res) => {
    const {id} = req.params;
    const {name , email , age} = req.body;
    try{
        const updateone = await User.findByIdAndUpdate( id , req.body ,{new:true});
        res.status(201).json(updateone);
    }
    catch(err){
        console.log(err);
        res.send(201).json({err:"error while deleting"})
    }
})


module.exports = router;