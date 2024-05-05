import React from 'react'
import './Welcomepage.css'
import { Link } from 'react-router-dom';
import Signup from '../pages/Signup';

const Welcomepage = () => {
  return (
    <div style={{display:'flex',height: '100vh', padding:0,margin:'0',flexWrap:'wrap',fontFamily:'Montserrat'}}>
    <div className='img' style={{ flex: 1,order:1,width:'100%' }}>
      <img  style={{height:'100%',width:'100%' }} src='./images/dating_app.gif'></img>
    </div>
    <div style={{flex:'1',  backgroundColor: '#f56e8b', padding:'50px',display: 'flex', justifyContent: 'center', alignItems: 'center',width: '100%',order:2  }}>
    <div>
    <h2>Wanna Find Who's Yours?</h2>
        <p style={{color:'black'}}>"Swipe, match, love. It all starts here."</p>

        <div>
            <Link to='/signup'>
              <button style={{backgroundcolor:' #ff4d4d', color: 'black',border: 'none',borderradius: '20px',padding:'10px 20px',fontsize: '16px', cursor: 'pointer'}}>
                <span>Get Started</span>
              </button>
            </Link>
              
        </div>
        </div>
    </div>
    </div>
  );
};

export default Welcomepage
