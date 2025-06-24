import { useState } from 'react'
import React from 'react';
import '../src/index.css'



function App() {
 

  return (
   <main className='max-w-[360px] mx-auto my-[30px]'>
    <h1 className='font-bold text-5xl text-center ' style={{color:'#ddd'}}>₹10000<span>.00</span></h1>
    <form className='mt-[40px]'>
      <div className='basic flex  gap-2 mb-2.5'>
        <input className='w-[100%]' type='text' placeholder={'new transaction'}/>
        <input className='w-[100%]' type='datetime-local'  style={{color:'#777'}}/>
      </div>
      <div className='description  flex'>
        <input className='w-[100%]' type='text' placeholder={'description'}/>
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
