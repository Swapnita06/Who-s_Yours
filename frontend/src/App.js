import React from 'react'
import Welcomepage from './pages/Welcomepage'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Signup from './pages/Signup'

const App = () => {
  return (
    <BrowserRouter>
   <Routes>
    <Route>
      <Route  path='/' element={<Welcomepage/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Route>
   </Routes>
    </BrowserRouter>
  )
}

export default App
