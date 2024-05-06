import React, { useEffect } from 'react'
import './Chaty.css'
import EmojiPicker from'emoji-picker-react'
import { useState } from 'react'
import { useRef } from 'react'

const Chaty = () => {
const [open,setOpen]= useState(false);
const [text,setText]= useState("");


const endRef = useRef(null)

 useEffect(()=>{
      endRef.current?.scrollIntoView({behavior:'smooth'})
 },[])

const handleEmoji =e =>{
  setText((prev)=>prev+ e.emoji);
  setOpen(false)
}

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
      <div className="center">
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Iusto quo, dolorum quam
               ullam odit velit neque suscipit eligendi eos 
               ratione labore? Quidem tenetur officia, 
              magni est corporis molestiae animi perferendis.
              </p>
              <span>1min ago</span>
          </div>
        </div>

        <div className="message">
          <img src='./images/avatar.png'/>
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Iusto quo, dolorum quam
               ullam odit velit neque suscipit eligendi eos 
               ratione labore? Quidem tenetur officia, 
              magni est corporis molestiae animi perferendis.
              </p>
              <span>1min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Iusto quo, dolorum quam
               ullam odit velit neque suscipit eligendi eos 
               ratione labore? Quidem tenetur officia, 
              magni est corporis molestiae animi perferendis.
              </p>
              <span>1min ago</span>
          </div>
        </div>

        <div className="message">
          <img src='./images/avatar.png'/>
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Iusto quo, dolorum quam
               ullam odit velit neque suscipit eligendi eos 
               ratione labore? Quidem tenetur officia, 
              magni est corporis molestiae animi perferendis.
              </p>
              <span>1min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Iusto quo, dolorum quam
               ullam odit velit neque suscipit eligendi eos 
               ratione labore? Quidem tenetur officia, 
              magni est corporis molestiae animi perferendis.
              </p>
              <span>1min ago</span>
          </div>
        </div>

        <div className="message">
          <img src='./images/avatar.png'/>
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Iusto quo, dolorum quam
               ullam odit velit neque suscipit eligendi eos 
               ratione labore? Quidem tenetur officia, 
              magni est corporis molestiae animi perferendis.
              </p>
              <span>1min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <img src="./images/dating_app.gif"/>
            <p>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Iusto quo, dolorum quam
               ullam odit velit neque suscipit eligendi eos 
               ratione labore? Quidem tenetur officia, 
              magni est corporis molestiae animi perferendis.
              </p>
              <span>1min ago</span>
          </div>
        </div>
          
        <div ref={endRef}></div>

      </div>
      <div className="bottom">
        <div className='icons' >
          <img src='./images/img.png'/>
          <img  src='./images/camera.png'/>
          <img src='./images/mic.png'/>
        </div>
        <input type='text' placeholder='Type a message...' 
        value={text}
        onChange={e=>setText(e.target.value)}/>
      <div className='emoji'>
        <img src='./images/emoji.png' onClick={()=> setOpen((prev)=>!prev)}/>
        <div className="picker">
        <EmojiPicker open={open}  onEmojiClick={handleEmoji}/>
        </div>
      </div>
      <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Chaty
