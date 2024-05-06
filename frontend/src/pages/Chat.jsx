import React from 'react'
import Nav from '../components/Nav'
import './Chat.css'
import List from '../components/list/List'
import Chaty from '../components/chats/Chaty'
import Detail from '../components/detail/Detail'
import Login from '../components/login/Login'
const Chat = () => {
  const user=false;

  return (
    <>
    <div className='container'> 
    {
      user?(
        <>
        <List/>
        <Chaty/>
        <Detail/>
        </>
      ): (<Login/>)
    }
        </div>
        </>
  )
}

export default Chat
