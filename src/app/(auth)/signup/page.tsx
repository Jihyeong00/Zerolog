'use client'

import { FormEvent, useState } from 'react'

import Input from '@/app/(auth)/_components/input'
import style from './singup.module.css'
import Timer from '@/app/(auth)/_components/timer'
import Button from '@/app/(auth)/_components/button'

export default function Page() {
  const [isSendEmail, setIsSendEmail] = useState(false)

  const setEmail = () => {
    if (isSendEmail) {
      setIsSendEmail(false)
    }
  }

  const sendEmail = () => {
    setIsSendEmail(true)
  }

  const signUpHandling = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={signUpHandling} className={style.formStyle}>
      <div className={style.emailConfirm}>
        {isSendEmail ? (
          <div className={style.confirmEmailTime}>
            <Timer second={300} />
          </div>
        ) : null}
        <Input onChange={setEmail} type="text" label="이메일" />
        <button
          onClick={sendEmail}
          className={style.confirmButton}
          type="button"
        >
          {isSendEmail ? '재전송' : '전송'}
        </button>
      </div>
      {isSendEmail ? (
        <div className={style.emailConfirm}>
          <input className={style.emailConfirmInput} placeholder="인증 번호" />
          <button className={style.confirmButton} type="button">
            확인
          </button>
        </div>
      ) : null}

      <Input type="password" label="비밀번호" />
      <Input type="password" label="비밀번호 재확인" />
      <Button label="회원가입" />
    </form>
  )
}
