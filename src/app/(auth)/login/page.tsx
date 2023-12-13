'use client'

import { useState } from 'react'
import LoginSocialForm from '@/app/(auth)/_components/login-social-form'
import LoginLocalForm from '@/app/(auth)/_components/login-local-form'
import style from './login.module.scss'

export default function Page() {
  const [isSocalLogin, setIsLocalLogin] = useState(true)

  const changeForm = () => {
    setIsLocalLogin((prev) => !prev)
  }

  return (
    <div className={style.loginForm}>
      <div className={`${style.slide} ${isSocalLogin ? '' : style.localLogin}`}>
        <LoginLocalForm changeForm={changeForm} />
        <LoginSocialForm changeForm={changeForm} />
      </div>
    </div>
  )
}
