import Link from 'next/link'
import Image from 'next/image'
import { BiSolidComment } from 'react-icons/bi'
import { GoHeartFill } from 'react-icons/go'
import font from '@/styles/font'
import style from './one-post.module.css'
import { IPostData } from '@/types/api.type'

type PropsType = {
  postData: IPostData
}

export default function OnePost({ postData }: PropsType) {
  const {
    url,
    idx,
    previewComment,
    createdAt,
    updatedAt,
    title,
    likeCount,
    replyCount,
  } = postData
  return (
    <div className={style.wrapper}>
      <Link href={`/post/${idx}`}>
        <div className={style.img_box}>
          <Image
            src={url}
            alt={`${title} 프로젝트에 대한 이미지입니다.`}
            width={300}
            height={200}
          />
        </div>
      </Link>
      <div className={style.container}>
        <Link href={`/post/${idx}`}>
          <h3 className={style.post_title}>
            <p className={font.lora.className}>{` ${title}`}</p>
          </h3>
        </Link>
        <div className={style.post_comment}>{previewComment}</div>
        <div className={style.post_counts}>
          <div className={style.post_icons}>
            <GoHeartFill size={16} />
            {likeCount}
          </div>
          <div className={style.post_icons}>
            <BiSolidComment size={16} />
            {replyCount}
          </div>
        </div>
        <div className={style.post_date}>
          작성일 -{' '}
          {createdAt === updatedAt
            ? createdAt.substring(0, 10)
            : `${updatedAt.substring(0, 10)} (수정됨)`}
        </div>
      </div>
    </div>
  )
}
