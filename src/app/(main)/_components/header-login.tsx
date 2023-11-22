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
          <HeaderButton>
            <Link href={PATH.login}>로그인</Link>
          </HeaderButton>
          <HeaderButton>
            <Link href={PATH.signup}>회원가입</Link>
          </HeaderButton>
        </div>
      )}
    </div>
  )
}
