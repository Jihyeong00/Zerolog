import { cookies } from 'next/headers'
import Link from 'next/link'
import HeaderButton from '@/app/(main)/_components/header-button'
import style from './header.module.scss'
import { path } from '@/constants/path'

export default function LoginButton() {
  const isLogin = cookies().get('accessToken') ?? false
  return (
    <div>
      {isLogin ? (
        <HeaderButton>Logout</HeaderButton>
      ) : (
        <div className={style.header_auth_buttons}>
          <Link href={path.login}>
            <HeaderButton>Login</HeaderButton>
          </Link>
          <Link href={path.signup}>
            <HeaderButton>SignUp</HeaderButton>
          </Link>
        </div>
      )}
    </div>
  )
}
