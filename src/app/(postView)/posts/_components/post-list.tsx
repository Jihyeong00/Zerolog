import MOCK from '@/libs/placeholder-data'
import style from './post-list.module.scss'
import OnePost from '@/app/(postView)/posts/_components/one-post'

export default function PostList() {
  const { posts } = MOCK
  return (
    <section className={style.container}>
      {posts.map((post) => (
        <OnePost key={post.idx} postData={post} />
      ))}
    </section>
  )
}
