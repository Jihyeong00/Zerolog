'use client'

import style from './login.module.scss'
import Input from '@/app/(auth)/_components/input'
import Button from '@/app/(auth)/_components/button'

type PropsType = {
  changeForm: () => void
}

export default function LoginLocalForm({ changeForm }: PropsType) {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className={style.form_div}>
      <div
        className={style.change_title}
        onMouseDown={changeForm}
        tabIndex={0}
        role="button"
      >
        <p>Move to Social login ➡</p>
      </div>
      <form onSubmit={onSubmit} className={style.form}>
        <Input type="text" label="이메일" />
        <Input type="password" label="비밀번호" />
        <Button label="로그인" />
      </form>
    </div>
  )
}
