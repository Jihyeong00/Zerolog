import { cookies } from 'next/headers'
import Link from 'next/link'
import HeaderButton from '@/app/(main)/_components/header-button'
import { PATH } from '@/constants/path'
import style from './header.module.css'

export default function LoginButton() {
  const isLogin = cookies().get('accessToken') ?? false
  return (
    <div>
      {isLogin ? (
        <HeaderButton>Logout</HeaderButton>
      ) : (
        <div className={style.header_auth_buttons}>
          <Link href={PATH.login}>
            <HeaderButton>Login</HeaderButton>
          </Link>
          <Link href={PATH.signup}>
            <HeaderButton>SignUp</HeaderButton>
          </Link>
        </div>
      )}
    </div>
  )
}
