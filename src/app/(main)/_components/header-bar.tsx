import HeaderLinkButton from '@/app/(main)/_components/header-link-button'
import style from './header.module.scss'
import Logo from '@/app/(main)/_components/header-logo'
import LoginButton from '@/app/(main)/_components/header-login'
import { headerPath } from '@/constants/path'

export default function HeaderBar() {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Logo />
        <nav className={style.link_buttons}>
          {headerPath.map((url) => (
            <HeaderLinkButton key={url} url={url} />
          ))}
        </nav>
      </div>
      <LoginButton />
    </header>
  )
}
