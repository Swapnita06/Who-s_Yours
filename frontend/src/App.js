import React from 'react'
import Welcomepage from './pages/Welcomepage'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Chat from './pages/Chat'
import Nav from './components/Nav'


const App = () => {
  return (
    <BrowserRouter>
   <Routes>
    <Route>
      <Route exact path='/' element={<Welcomepage/>}/>
      <Route exact  path='/signup' element={<Signup/>}/>
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path='/chat' element={<Chat/>}/>
      </Route>
   </Routes>
    </BrowserRouter>
  )
}

export default App
