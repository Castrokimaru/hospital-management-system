import { useState } from 'react'
import "./index.css"
import ToolBar from './ToolBar'
import { BrowserRouter as Router } from 'react-router-dom'
import LayOut from './LayOut'

// Main App component


function App() {


  return (
    <>
  
    <div className="flex min-h-screen bg-gray-100">

      <ToolBar />

      <div className="flex-1 p-8">
        <LayOut />

      </div>
      </div>
      
    </>
   
  )
}

export default App
