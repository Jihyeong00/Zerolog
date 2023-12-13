import Link from 'next/link'
import Image from 'next/image'
import { IProjectData } from '@/types/api.type'
import style from './one-project.module.scss'
import font from '@/styles/font'
import Tag from '@/app/_components/tag'

type PropsType = {
  projectData: IProjectData
}

export default function OneProject({ projectData }: PropsType) {
  const { url, idx, tags, date, comment, title } = projectData

  return (
    <Link className={style.wrapper} href={`/projects/${idx}`}>
      <div className={style.img_box}>
        <Image
          src={url}
          alt={`${title} 프로젝트에 대한 이미지입니다.`}
          width={850}
          height={430}
        />
      </div>
      <div className={style.container}>
        <h3 className={style.project_title}>
          프로젝트명 : <p className={font.lora.className}>{` ${title}`}</p>
        </h3>
        <div className={style.project_comment}>한 줄 소감 : {comment}</div>
        <div className={style.project_date}>진행한 날짜 : {date}</div>
        <div className={style.project_tags}>
          {tags?.map((tag) => (
            <Tag
              key={tag.idx}
              tagName={tag.name}
              color={tag.color}
              bgColor={tag.bgColor}
            />
          ))}
        </div>
      </div>
    </Link>
  )
}
