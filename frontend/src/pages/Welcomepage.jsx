import React from 'react'
import './Welcomepage.css'

const Welcomepage = () => {
  return (
    <div style={{display:'flex',height: '100vh', padding:'0',margin:'0',flexWrap:'wrap'}}>
    <div className='img' style={{ flex: 1,order:1,width:'100%' }}>
      <img  style={{height:'100%',width:'100%' }} src='./images/dating_app.gif'></img>
    </div>
    <div style={{flex:'1',  backgroundColor: '#f56e8b', padding:'50px',display: 'flex', justifyContent: 'center', alignItems: 'center',width: '100%',order:2  }}>
    <div>
    <h2>Wanna Find Who's Yours?</h2>
        <p>This is the content inside the box.</p>
        </div>
    </div>
    </div>
  );
};

export default Welcomepage
