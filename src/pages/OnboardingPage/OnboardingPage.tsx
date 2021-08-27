import React, { useState } from 'react'

import GenericPage from '../GenericPage'
import {
  RoleSelectOnboard,
  USER_ROLE,
} from '../../components/RoleSelectOnboard/RoleSelectOnboard'
import { Registration } from '../../components/Registration/Registration'

export const OnboardingPage: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState(USER_ROLE.UNSELECTED)

  function handleClick(userRole: USER_ROLE) {
    setSelectedRole(userRole)
  }
  return (
    <GenericPage>
      {selectedRole ? (
        <Registration
        //  role={selectedRole}
        />
      ) : (
        <RoleSelectOnboard handleClick={handleClick} />
      )}
    </GenericPage>
  )
}
