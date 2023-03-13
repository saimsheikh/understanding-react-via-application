import React from 'react';
import {useState} from 'react';

export default function Contact(props) {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[text,setText]=useState("");

    console.log(props.mode);
  return (
  <>
  <h1>Contact Us</h1>
    <div id='form'>
      
      <form>
        <label style={{color: props.mode==='dark'?'white':'black'}}>Name</label>
        <input onChange={(e)=>setName(e.target.value)} value={name} type={'text'}/>
        <label style={{color: props.mode==='dark'?'white':'black'}}>Email</label>
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type={'email'}/>
        <label style={{color: props.mode==='dark'?'white':'black'}}>Description</label>
        <textarea onChange={(e)=>setText(e.target.value)} value={text} type={'text'} rows={'8'} cols={'80'}/>
        <input type={'submit'}/>
      </form>
    </div>

  

  </>
  )
}
