import express from 'express'
import cors from 'cors'
const app = express();
const port = 3000;
import 'dotenv/config'
import TransactionModel from '../models/Transaction.js';
import mongoose from 'mongoose';

app.use(express.json()); 
app.use(cors());


app.get('/backend/test',(req,res)=>{
    res.json('test ok2');
})


app.post('/backend/transaction',async(req,res)=>{
    //console.log(req.body)
    await mongoose.connect(process.env.MONGO_URL);
    const {name,price,description,datetime} = req.body;
    const transaction = await TransactionModel.create({name,price,description,datetime})
    res.json(transaction);
})

app.listen(port,()=>{
    console.log(`listening on ${port}.`);
})

