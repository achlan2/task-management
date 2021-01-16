import React from 'react'
import "./App.css";
import Main from './pages/Main';
import { Provider as BoardProvider } from './context/BoardContext'
import { Provider as TaskProvider } from './context/TaskContext'

const App = () => {
  return (
    <div className='container'>
      <div className="sidebar">
        <img src='/logo.svg' alt='logo' />
      </div>
      <div className="main-section">
        <h1>Product Roadmap</h1>
        <BoardProvider>
          <TaskProvider>
            <Main />
          </TaskProvider>
        </BoardProvider>
      </div>
    </div>
  )
}

export default App
