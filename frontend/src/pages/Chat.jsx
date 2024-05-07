import React, { useEffect } from 'react'
import Nav from '../components/Nav'
import './Chat.css'
import List from '../components/list/List'
import Chaty from '../components/chats/Chaty'
import Detail from '../components/detail/Detail'
import Login from '../components/login/Login'
import Notification from '../components/notifications/Notification'
import { onAuthStateChanged } from 'firebase/auth'
const Chat = () => {
  const user=false;

  useEffect(()=>{
     const unSub = onAuthStateChanged(auth,(user)=>{
          console.log(user)
     });

      return ()=>{
        unSub();
      }
  },[])

  return (
    <>
    <Nav/>
    <div className='container'> 
    {
      user?(
        <>
        <List/>
        <Chaty/>
        <Detail/>
        </>
      ): (<Login/>
    )}
    <Notification/>
        </div>
        </>
  )
}

export default Chat
