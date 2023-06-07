import './App.css'
import Welcome from './pages/welcome/welcome'
import Signup from './pages/signup/signup'
import Login from './pages/login/login'
import Settingup from './pages/settingup/settingup'
import Dashboard from './pages/dashboard/dashboard'

import { Route, Routes } from 'react-router'
import { useState } from 'react'
function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ token, setToken] = useState("")

  return (
    <Routes>
      <Route path='/' Component={Welcome} />
      <Route path='login' element={<Login setToken={setToken} />} />
      <Route path='signup' Component={Signup}/>
      <Route path='setting-up' Component={Settingup}/>
      <Route path='dashboard' element={<Dashboard token={token} />} />
    </Routes>
  )
}

export default App
