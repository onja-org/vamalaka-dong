import React from 'react'
import GenericPage from './GenericPage'
import { Login } from '../components/Login/Login'

const LoginPage: React.FC = () => {
  return (
    <GenericPage>
      <Login />
    </GenericPage>
  )
}
export default LoginPage
