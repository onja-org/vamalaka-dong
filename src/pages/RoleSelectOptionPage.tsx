import React from 'react'
import GenericPage from './GenericPage'
import { RoleSelectOnboard } from '../components/RoleSelectOnboard/RoleSelectOnboard'

const RoleSelectOnboardPage: React.FC = () => {
  return (
    <GenericPage>
      <RoleSelectOnboard handleClick={() => null} />
    </GenericPage>
  )
}
export default RoleSelectOnboardPage
