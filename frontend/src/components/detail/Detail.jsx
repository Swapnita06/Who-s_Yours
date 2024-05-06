import React from 'react'
import './Detail.css'
const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src='./images/avatar.png'/>
        <h2>Swapnita</h2>
        <p>Lorem ipsum dolor sit amet .</p>
        </div>
        <div className="info">
         <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src='./images/arrowUp.png'/>
          </div>
         </div>

         <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src='./images/arrowUp.png'/>
          </div>
         </div>


         <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src='./images/arrowUp.png'/>
          </div>
         </div>

         <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src='./images/arrowDown.png'/>
          </div>
           <div className="photos">
           <div className="photoItem">
              <div className="photoDetail">
              <img src='./images/building.jpeg'/>
              <span>photo_2024_2.png</span>
            </div>
            <img src='./images/download.png' className='icon'/>
            </div>

            <div className="photoItem">
              <div className="photoDetail">
              <img src='./images/building.jpeg'/>
              <span>photo_2024_2.png</span>
            </div>
            <img src='./images/download.png' className='icon' />
            </div>

           </div>
           </div>
         <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src='./images/arrowUp.png'/>
          </div>
         </div>
         
<button>Block User</button>
<button className='logout'>Logout</button>
         
      </div>
    </div>
  )
}

export default Detail
