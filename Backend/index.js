import express from 'express'
const app = express();
const port = 3000;
app.use(express.json()); 


app.get('/backend/test',(req,res)=>{
    res.json('test ok2');
})


app.post('/backend/transaction',(req,res)=>{
    console.log(req.body)
    res.json(req.body);
})

app.listen(port,()=>{
    console.log(`listening on ${port}.`);
})

