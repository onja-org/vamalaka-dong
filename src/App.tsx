import React from 'react'
import './App.css'
import { Route } from 'react-router'
import RegistrationPage from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage'
import { HomePage } from './pages/HomePage/HomePage'
import { OnboardingPage } from './pages/OnboardingPage/OnboardingPage'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Route path='/' exact component={OnboardingPage} />
        <Route path='/homepage' exact component={HomePage} />
        <Route path='/registration' exact component={RegistrationPage} />
        <Route path='/login' exact component={LoginPage} />
      </header>
    </div>
  )
}

export default App
