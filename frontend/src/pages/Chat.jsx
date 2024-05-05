import React from 'react'
import Nav from '../components/Nav'
import './Chat.css'
import List from '../components/list/List'
import Chaty from '../components/chats/Chaty'
import Detail from '../components/detail/Detail'
const Chat = () => {
  return (
    <>
    <Nav/>
    <div className='container'> 
        <List/>
        <Chaty/>
        <Detail/>

        </div>
        </>
  )
}

export default Chat
