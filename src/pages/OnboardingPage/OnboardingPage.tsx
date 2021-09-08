import React, { useState } from 'react'
import GenericPage from '../GenericPage'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../redux/hooks'
import { RegisteredSuccessfull } from '../../components/RegisteredSuccessfull/RegisteredSuccessfull'
import {
  RoleSelectOnboard,
  USER_ROLE,
} from '../../components/RoleSelectOnboard/RoleSelectOnboard'
import { Registration } from '../../components/Registration/Registration'
import {
  fetchRegisterUser,
  userErrorSelector,
  userSelector,
  userStatusSelector,
} from '../../redux/slices/userSlice'

export const OnboardingPage: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState(USER_ROLE.UNSELECTED)
  const [accountRegister, setAccountRegister] = React.useState({
    username: '',
    password: '',
    email: '',
    role: '',
  })

  const dispatch = useAppDispatch()
  const userError = useSelector(userErrorSelector)
  const userStatus = useSelector(userStatusSelector)
  const user = useSelector(userSelector)

  const submitUser = React.useCallback(() => {
    dispatch(
      fetchRegisterUser({
        username: accountRegister.username,
        password: accountRegister.password,
        email: accountRegister.email,
        role: selectedRole,
      })
    )
  }, [dispatch, accountRegister, selectedRole])

  const onChangeUsername = (e: any) => {
    setAccountRegister({
      ...accountRegister,
      username: e.target.value,
    })
  }

  const onChangeUseremail = (e: any) => {
    setAccountRegister({
      ...accountRegister,
      email: e.target.value,
    })
  }

  const onChangeUserpassword = (e: any) => {
    setAccountRegister({
      ...accountRegister,
      password: e.target.value,
    })
  }

  const onChangeCheckbox = (e: any) => {}

  const usernameErrorMessage =
    userError?.message?.toString()?.indexOf('CODE:EU2') > -1
      ? 'User name already exists'
      : ''
  const emailErrorMessage =
    userError?.message?.toString()?.indexOf('CODE:EU6') >= 0
      ? 'Email must be a valid email'
      : ''

  const passwordErrorMessage =
    userError?.message?.toString()?.indexOf('CODE:EU7') >= 0
      ? 'Password must be at least 8 characters long'
      : ''

  const errorMessages = {
    username: usernameErrorMessage,
    email: emailErrorMessage,
    password: passwordErrorMessage,
  }

  function handleClick(userRole: USER_ROLE) {
    setSelectedRole(userRole)
  }
  return (
    <GenericPage>
      {selectedRole ? (
        user?.token ? (
          <RegisteredSuccessfull />
        ) : (
          <Registration
            onSubmit={submitUser}
            onChangeUserName={onChangeUsername}
            onChangeEmail={onChangeUseremail}
            onChangePassword={onChangeUserpassword}
            onChangeCheckbox={onChangeCheckbox}
            onClickRegister={submitUser}
            errorMessages={errorMessages}
          />
        )
      ) : (
        <RoleSelectOnboard handleClick={handleClick} />
      )}
    </GenericPage>
  )
}
