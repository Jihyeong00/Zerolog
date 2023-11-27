'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import style from './header.module.css'
import { HeaderPath, PATH } from '@/constants/path'

export default function HeaderLinkButton({ url }: { url: HeaderPath }) {
  const pathName = usePathname()
  return (
    <Link
      className={
        pathName === PATH[url] ? style.link_button_select : style.link_button
      }
      key={url}
      href={PATH[url]}
      replace
    >
      {url}
    </Link>
  )
}
