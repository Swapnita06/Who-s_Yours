import React from 'react'
import './Chaty.css'
import EmojiPicker from'emoji-picker-react'
import { useState } from 'react'
const Chaty = () => {
const [open,setOpen]= useState(false)


  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./images/avatar.png"/>
          <div className="texts">
            <span>Swapnita</span>
            <p>Lorem ipsum dolor sit amet consectetur </p></div>
        </div>
        <div className="icons">
          <img src='./images/phone.png'/>
          <img src='./images/video.png'/>
          <img src='./images/info.png'/>
        </div>
      </div>
      <div className="center"></div>
      <div className="bottom">
        <div className='icons' >
          <img src='./images/img.png'/>
          <img  src='./images/camera.png'/>
          <img src='./images/mic.png'/>
        </div>
        <input type='text' placeholder='Type a message...'/>
      <div className='emoji'>
        <img src='./images/emoji.png' onClick={()=> setOpen((prev)=>!prev)}/>
        <EmojiPicker open={open} />
      </div>
      <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Chaty
