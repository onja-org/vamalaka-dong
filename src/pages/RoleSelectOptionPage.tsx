import React from 'react'
import GenericPage from './GenericPage'
import { RoleSelectOnboard } from '../components/RoleSelectOnboard/RoleSelectOnboard'
import { footerLinks } from './GenericPage'

const RoleSelectOnboardPage: React.FC = () => {
  return (
    <GenericPage>
      <RoleSelectOnboard footerLinks={footerLinks} />
    </GenericPage>
  )
}
export default RoleSelectOnboardPage
