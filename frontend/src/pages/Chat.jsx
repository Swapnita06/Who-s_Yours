import React, { useEffect } from 'react'
import Nav from '../components/Nav'
import './Chat.css'
import List from '../components/list/List'
import Chaty from '../components/chats/Chaty'
import Detail from '../components/detail/Detail'
import Login from '../components/login/Login'
import Notification from '../components/notifications/Notification'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../lib/firebase'
import { useUserStore } from '../lib/userStore'


const Chat = () => {
  
  const {currentUser,isLoading,fetchUserInfo} =useUserStore();

  useEffect(()=>{
     const unSub = onAuthStateChanged(auth,(user)=>{
      fetchUserInfo(user.uid);
    
     });

      return ()=>{
        unSub();
      };
  }, [fetchUserInfo]);

  console.log(currentUser);

  if(isLoading) return <div className="loading">Loading...</div>

  return (
    <>
    <Nav/>
    <div className='container'> 
    {
      currentUser?(
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
