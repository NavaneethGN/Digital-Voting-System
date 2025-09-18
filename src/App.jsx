import { useState } from 'react'
import './App.css'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Dashboard from './components/dashboard/Dashboard'
import VotingInterface from './components/voting/VotingInterface'
import Results from './components/voting/Results'

function App() {
  // This is a simple router state. In a real app, you'd use React Router
  const [currentPage, setCurrentPage] = useState('login')

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login />
      case 'register':
        return <Register />
      case 'dashboard':
        return <Dashboard />
      case 'vote':
        return <VotingInterface />
      case 'results':
        return <Results />
      default:
        return <Login />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {renderPage()}
    </div>
  )
}

export default App
