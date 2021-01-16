import React from 'react'
import "./App.css";
import Main from './pages/Main';
import {Provider as BoardProvider} from './context/BoardContext'

const App = () => {
  return (
    <div className='container'>
      <div className="sidebar">
        <img src='/logo.svg'/>
      </div>
      <div className="main-section">
        <h1>Product Roadmap</h1>
        <BoardProvider>
          <Main/>
        </BoardProvider>
      </div>
    </div>
  )
}

export default App
