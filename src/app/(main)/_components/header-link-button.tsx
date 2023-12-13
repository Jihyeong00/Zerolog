'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import style from './header.module.scss'
import { HeaderPath, path } from '@/constants/path'

export default function HeaderLinkButton({ url }: { url: HeaderPath }) {
  const pathName = usePathname()
  return (
    <Link
      className={
        pathName === path[url] ? style.link_button_select : style.link_button
      }
      key={url}
      href={path[url]}
      replace
    >
      {url}
    </Link>
  )
}
