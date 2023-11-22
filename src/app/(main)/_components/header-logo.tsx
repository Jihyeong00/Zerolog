import Link from 'next/link'
import SITE_MARK_UP from '@/constants/site'
import font from '@/styles/font'
import style from './header.module.css'

export default function Logo() {
  return (
    <Link href="/">
      <div className={`${style.font_logo} ${font.notoSerif.className}`}>
        {SITE_MARK_UP.LOGO_TITLE}
      </div>
    </Link>
  )
}
