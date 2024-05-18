const express = require("express")
const mongoose = require('mongoose')
const axios = require('axios');
const cors = require("cors")
const UsersModel = require('./models/users')
const ReserveModel= require('./models/reserve')
const AdminModel=require('./models/admin')
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/LMS");

app.post("/login", (req,res) => {
    const {email,password} = req.body;
    UsersModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("Success")
            }
            else{
                res.json("Password is incorrect")
            }
        }
        else{
            res.json("No record existed")
        }
    })
})

app.post('/register', (req, res) => {
    UsersModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post('/reservation', (req, res) => {
    ReserveModel.create(req.body)
    .then(reserve => res.json(reserve))
    .catch(err => res.json(err))
})

app.post("/adminlogin", (req,res) => {
    const {email,password} = req.body;
    AdminModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("Success")
            }
            else{
                res.json("Password is incorrect")
            }
        }
        else{
            res.json("No record existed")
        }
    })
})
app.get('/api/reserves', async (req, res) => {
    try {
        const reservations = await ReserveModel.find();
        res.json(reservations);
    } catch (error) {
        console.error('Error fetching reservations:', error);
        res.status(500).json({ error: 'Error fetching reservations' });
    }
});

app.post('/api/send-sms', async (req, res) => {
    try {
        const response = await axios.post('https://www.fast2sms.com/dev/bulkV2', req.body, {
            headers: {
                Authorization: 'GZFMUe2vFiCE5ABE00hyGuLYqZf8LuOZniBoESPOWbu9YleTdDmWDAGnpqPV',
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error sending SMS:', error);
        res.status(500).json({ error: 'An error occurred while sending SMS' });
    }
});
app.listen(3001, () => {
    console.log("server is running")
})