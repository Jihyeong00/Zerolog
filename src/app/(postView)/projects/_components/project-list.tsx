import MOCK from '@/libs/placeholder-data'
import style from './project-list.module.scss'
import OneProject from '@/app/(postView)/projects/_components/one-project'

export default function ProjectList() {
  const { projects } = MOCK
  return (
    <section className={style.container}>
      {projects.map((project) => (
        <OneProject key={project.idx} projectData={project} />
      ))}
    </section>
  )
}
