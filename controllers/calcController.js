const express = require('express')
const Data = require('../model/calcModel')

exports.getData = async (req, res) => {
    try{
        const data = await Data.find()
        res.json(data)
    } catch(error){
        res.status(500).json({error: 'Failed to fetch data'})
    }
}


exports.postData = async (req,res) => {
    try{
    const {userID, type, inputs, results, date} = req.body

    const newData = new Data({
        userID, type, inputs, results,date
    })
    const savedData = await newData.save()
    res.status(201).json(savedData)
    } catch(error) {
        res.status(500).json("failed to post new data")
    }
}