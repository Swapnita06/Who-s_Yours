import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {useState} from 'react'
import './Signup.css'

const Signup = () => {


  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    let isValid = true;
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address';
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (!passwordRegex.test(formData.password.trim())) {
      newErrors.password = 'Password must contain at least 8 characters, including one letter and one number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted successfully:', formData);
      setErrors({});
      navigate('/shopping');
    } else {
      console.log('Form validation failed');
    }
  };
  return (
    <div style={{backgroundImage: "url('./images/signUpbg.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
    backgroundColor:'#0c101c'}}>
     
    <div className='signup_page' style={{fontFamily:'Montserrat'}}>
      <h1 style={{color:"beige"}}>Create Your Account</h1>
      <form onSubmit={handleSubmit}>
        <div className='user'>
          <label htmlFor="username" >Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder='Enter Your Username'
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='emailid'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Enter Your Email'
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='pw'>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Enter Your Password'
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <Link to='/home'>
        <button className='signUp' type="submit" >Sign Up</button>
        </Link>
      </form>
    </div>
  

    </div>
  )
}

export default Signup
