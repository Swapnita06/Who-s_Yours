import React from 'react'
import Nav from '../components/Nav'
import './Chat.css'
import List from '../components/list/List'
import Chaty from '../components/chats/Chaty'
import Detail from '../components/detail/Detail'
import Login from '../components/login/Login'
import Notification from '../components/notifications/Notification'
const Chat = () => {
  const user=false;

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
