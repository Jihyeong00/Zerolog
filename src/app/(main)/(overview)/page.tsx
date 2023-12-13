'use client'

import Image from 'next/image'
import { FaDiscord } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import { SiVelog, SiGmail } from 'react-icons/si'
import Link from 'next/link'
import { RiKakaoTalkFill } from 'react-icons/ri'
import style from './page.module.scss'
import useTextInterval from '@/app/(main)/_hook/useTitleInterval'
import { main } from '@/constants/site'
import { mainTitle } from '@/constants/policy'
import font from '@/styles/font'
import { link } from '@/constants/path'
import Tooltip from '@/app/_components/tooltip'

export default function Home() {
  const title = useTextInterval(mainTitle, 100)

  return (
    <div className={style.main}>
      <div className={style.imgBox}>
        <Image
          src="https://avatars.githubusercontent.com/u/115636461?v=4"
          alt="Zero의 깃허브 프로필"
          width={200}
          height={200}
        />
      </div>
      <section className={style.userBox}>
        <div>
          <h1 className={style.myName}>{main.siteTitle}</h1>
          <span className={`${style.typingBox} ${font.orbit.className}`}>
            {title}
          </span>
        </div>
        <div className={style.linkInfo}>
          📖 About Me
          <div className={style.linkButtons}>
            <Link href={link.github}>
              <FaGithub size={28} />
            </Link>
            <Link href={link.velog}>
              <SiVelog size={28} />
            </Link>
          </div>
          📞 Contact
          <div className={style.linkButtons}>
            <Tooltip title="gmail">
              <SiGmail className={style.copyLinkButton} size={28} />
            </Tooltip>
            <Tooltip title="kakaoTalk">
              <RiKakaoTalkFill className={style.copyLinkButton} size={28} />
            </Tooltip>
            <Tooltip title="discord">
              <FaDiscord className={style.copyLinkButton} size={28} />
            </Tooltip>
          </div>
        </div>
      </section>
    </div>
  )
}
