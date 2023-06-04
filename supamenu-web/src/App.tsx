import './App.css'
import Welcome from './pages/welcome/welcome'
import Signup from './pages/signup/signup'
import Login from './pages/login/login'
import Settingup from './pages/settingup/settingup'
import Dashboard from './pages/dashboard/dashboard'

import { Route, Routes } from 'react-router'
function App() {

  return (
    <Routes>
      <Route path='/' Component={Welcome} />
      <Route path='login' Component={Login} />
      <Route path='signup' Component={Signup}/>
      <Route path='setting-up' Component={Settingup}/>
      <Route path='dashboard' Component={Dashboard} />
    </Routes>
  )
}

export default App
