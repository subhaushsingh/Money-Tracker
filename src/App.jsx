import { use, useState } from 'react'
import React from 'react';
import '../src/index.css'
import axios from 'axios';



function App() {
 const [name,SetName] = useState('');
 const [datetime,SetDatetime] = useState('');
 const [description,SetDescription] = useState('');

 const url = import.meta.env.VITE_BACKEND_URL+'/transaction';

 

 function addNewTransaction(e){
  e.preventDefault();

  const parts = name.trim().split(' ');
  const price = parseFloat(parts[0]);
  const cleanName = parts.slice(1).join(' ');
  //console.log(url)   4Bb80n15bX868r98

if (isNaN(price) || !cleanName) {
  alert("Please enter a valid format like: 500 Rent");
  return;
}


  axios.post(url,{
    price,
    name:cleanName,
    description,
    datetime,
  },{
    headers: {'Content-type': 'application/json'}
  })
  .then(res=>{
    SetName('')
    SetDatetime('')
    SetDescription('')
    console.log('result',res.data)
    })
    .catch(err=>console.log("error in function while transaction",err))
 }

  return (
   <main className='max-w-[360px] mx-auto my-[30px]'>
    <h1 className='font-bold text-5xl text-center ' style={{color:'#ddd'}}>₹10000<span>.00</span></h1>
    <form className='mt-[40px]' onSubmit={addNewTransaction}>
      <div className='basic flex  gap-2 mb-2.5'>
        <input className='w-[100%]' type='text' placeholder={'new transaction'}
          value={name}
          onChange={e=>SetName(e.target.value)}
        />
        <input className='w-[100%]' type='datetime-local'  style={{color:'#777'}}
          value={datetime}
          onChange={e=>SetDatetime(e.target.value)}
        />
      </div>
      <div className='description  flex'>
        <input className='w-[100%]' type='text' placeholder={'description'}
          value={description}
          onChange={e=>SetDescription(e.target.value)}
        />
      </div>
        <button type='submit'>+ Add new transaction</button>
    </form>
    <div className='transactions mt-[10px]'>
      <div className='transaction'>
        <div className='left'>
          <div className='name '>New samsung Tv</div>
          <div className='description'>it was time for new tv</div>
        </div>
        <div className='right'>
          <div className='price red'>-₹50000</div>
          <div className='datetime'>23-06-2025 15:45</div>
        </div>
      </div>
      <div className='transaction'>
        <div className='left'>
          <div className='name'>Gig job website</div>
          <div className='description'>it was time for new tv</div>
        </div>
        <div className='right'>
          <div className='price green'>+₹50000</div>
          <div className='datetime'>23-06-2025 15:45</div>
        </div>
      </div>
       <div className='transaction'>
        <div className='left'>
          <div className='name'>New Phone</div>
          <div className='description'>it was time for new tv</div>
        </div>
        <div className='right'>
          <div className='price red'>-₹19000</div>
          <div className='datetime'>23-06-2025 15:45</div>
        </div>
      </div>
    </div>
   </main>
  )
}

export default App
