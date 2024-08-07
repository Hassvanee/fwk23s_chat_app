import React from 'react'
import Navbar from './components/Navbar'
import SideNav from './components/SideNav'
import Chat from './components/Chat'
import './App.css'

const App = () => {
  return (
    <div className='flex'>
      <Navbar />
      <SideNav />
      <Chat />

    </div>
  )
}

export default App
