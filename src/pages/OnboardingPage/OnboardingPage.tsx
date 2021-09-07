import React, { useState } from 'react'

import GenericPage from '../GenericPage'
import {
  RoleSelectOnboard,
  USER_ROLE,
} from '../../components/RoleSelectOnboard/RoleSelectOnboard'
import { Registration } from '../../components/Registration/Registration'

export interface OnboardingPageProps {
  isChecked: boolean
  isPrimary: boolean
}

export const OnboardingPage: React.FC<OnboardingPageProps> = ({
  isChecked,
  isPrimary,
}) => {
  const [selectedRole, setSelectedRole] = useState(USER_ROLE.UNSELECTED)

  function handleClick(userRole: USER_ROLE) {
    setSelectedRole(userRole)
  }
  return (
    <GenericPage>
      {selectedRole ? (
        <Registration />
      ) : (
        <RoleSelectOnboard handleClick={handleClick} />
      )}
    </GenericPage>
  )
}
