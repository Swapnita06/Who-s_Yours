import React from 'react'
import './Chaty.css'
const Chaty = () => {
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
        <div className='icons' style={{display:'flex'}}>
          <img style={{height:'30px'}}src='./images/img.png'/>
          <img style={{height:'30px'}} src='./images/camera.png'/>
          <img style={{height:'30px'}} src='./images/mic.png'/>
        </div>
        <input type='text' placeholder='Type a message...'/>
      <div className='emoji'>
        <img src='./images/emoji.png'/>
      </div>
      <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Chaty
