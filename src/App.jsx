import { useState } from 'react'
import './App.css'

function App() {
  function handleClick() {
  
  }
  return (
   
      <>
      <div>
        <img 
          src="src/assets/my, me Logo.jpg" 
          className="my-me" 
          alt="my-me-logo" 
          onClick={handleClick} 
        />
      </div>
      <p className="copyright">
        © 2024 Hassvanee Samaae
      </p>
    </>
  
  )
}

export default App
