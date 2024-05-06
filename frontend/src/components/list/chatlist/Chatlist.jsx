import React from 'react'
import './chatlist.css'

import { useState } from 'react'
import Adduser from '../../addUser/adduser.jsx';

const Chatlist = () => {

  const[addMode,setAddMode]= useState(false)

  return (
    <div className='chatlist'>
        <div className='search'>
           <div className="searchBar">
           <img src='./images/search.png' alt=''/>
           <input type='text' placeholder='Search..'/>
         </div>
         <img src={addMode?"./images/minus.png":"./images/plus.png"} className='add'
         onClick={()=> setAddMode((prev)=>!prev)}
         />
    </div>
   
    <div className='item'>
        <img src='./images/avatar.png'/>
        <div className="texts">
            <span>SWAPNITA</span>
            <p>hello</p>
        </div>
    </div>

    <div className='item'>
        <img src='./images/avatar.png'/>
        <div className="texts">
            <span>SWAPNITA</span>
            <p>hello</p>
        </div>
    </div>

    <div className='item'>
        <img src='./images/avatar.png'/>
        <div className="texts">
            <span>SWAPNITA</span>
            <p>hello</p>
        </div>
    </div>

    <div className='item'>
        <img src='./images/avatar.png'/>
        <div className="texts">
            <span>SWAPNITA</span>
            <p>hello</p>
        </div>
    </div>

    <div className='item'>
        <img src='./images/avatar.png'/>
        <div className="texts">
            <span>SWAPNITA</span>
            <p>hello</p>
        </div>
    </div>

    <div className='item'>
        <img src='./images/avatar.png'/>
        <div className="texts">
            <span>SWAPNITA</span>
            <p>hello</p>
        </div>
    </div>
  {addMode && <Adduser/>}
    </div>
  )
}

export default Chatlist
