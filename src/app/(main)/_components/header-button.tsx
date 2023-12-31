import { PropsWithChildren } from 'react'
import style from './header.module.scss'

export default function HeaderButton({ children }: PropsWithChildren) {
  return (
    <button className={style.header_auth_button} type="button">
      {children}
    </button>
  )
}
