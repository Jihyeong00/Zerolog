'use client'

import Image from 'next/image'
import { FaSlack } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import { SiVelog, SiGmail } from 'react-icons/si'
import Link from 'next/link'
import toast from 'react-hot-toast'
import styles from './page.module.scss'
import useTextInterval from '@/app/(main)/_hook/useTitleInterval'
import { main, markUp } from '@/constants/site'
import { mainTitle } from '@/constants/policy'
import font from '@/styles/font'
import { link } from '@/constants/path'
import Tooltip from '@/app/_components/tooltip'

export default function Home() {
  const title = useTextInterval(mainTitle, 100)

  const copyLink = async () => {
    await toast.promise(window.navigator.clipboard.writeText(markUp.email), {
      success: '링크가 복사되었습니다.',
      error: '링크가 복사에 실패하였습니다',
      loading: 'loading...',
    })
  }

  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.imgBox}>
          <Image
            src="https://avatars.githubusercontent.com/u/115636461?v=4"
            alt="Zero의 깃허브 프로필"
            width={200}
            height={200}
          />
        </div>
        <section className={styles.userBox}>
          <div>
            <h1 className={styles.myName}>{main.siteTitle}</h1>
            <span className={`${styles.typingBox} ${font.orbit.className}`}>
              {title}
            </span>
          </div>
          <div className={styles.linkInfo}>
            📖 About Me
            <div className={styles.linkButtons}>
              <Link href={link.github}>
                <FaGithub size={28} />
              </Link>
              <Link href={link.velog}>
                <SiVelog size={28} />
              </Link>
            </div>
            📞 Contact
            <div className={styles.linkButtons}>
              <Tooltip title={markUp.email}>
                <SiGmail
                  onClick={copyLink}
                  className={styles.copyLinkButton}
                  size={28}
                />
              </Tooltip>
              <Tooltip title={markUp.email}>
                <FaSlack
                  onClick={copyLink}
                  className={styles.copyLinkButton}
                  size={28}
                />
              </Tooltip>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.description}>
        안녕하세요! 저는 현재 3학년 소프트웨어 학과에 재학 중인 대학생이며, 주로
        웹 개발과 다양한 기술들을 공부하고 있습니다. 개인 공부 외에도 스터디와
        동아리 활동을 통해 스스로를 계속해서 발전시키고 있습니다. 빠르게
        변화하는 프론트엔드 개발 영역에 특히 관심을 가지고 있어, 새로운 기술들을
        배우며 꾸준한 성장을 추구하고 있습니다. 앞으로도 더 많은 경험과 지식을
        쌓아 프론트엔드 개발자로서의 목표를 달성하고자 노력하고 있습니다.
      </div>
      <div>🚀Stack</div>
      <div>🖥️ FrontEnd</div>
      <p className={styles.stackLabels}>
        Html, Css, Javascript, Typescript, React, Next
      </p>
      <div>🛠️ BackEnd</div>
      <p className={styles.stackLabels}>Java, Jsp, Php, Spring</p>
    </div>
  )
}
