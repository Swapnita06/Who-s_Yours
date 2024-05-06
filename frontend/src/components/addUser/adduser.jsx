import React from 'react'
import './addUser.css'

const Adduser = () => {
  return (
    <div className='addUser'>AddUser
      <form>
        <input type='text' placeholder='Username' name='username'/>
      <button>Search</button>
      </form>
      <div className="user">
        <div className="detail">
            <img src='./images/avatar.png'/>
            <span>Swapnita</span>
            <button>Add User</button>
        </div>
      </div>
    </div>
  )
}

export default Adduser

