import Link from 'next/link'
import font from '@/styles/font'
import style from './header.module.scss'
import { markUp } from '@/constants/site'

export default function Logo() {
  return (
    <Link href="/">
      <div className={`${style.font_logo} ${font.notoSerif.className}`}>
        {markUp.logo}
      </div>
    </Link>
  )
}
