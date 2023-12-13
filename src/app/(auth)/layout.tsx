import style from './layout.module.scss'

export default function layout({ children }: { children: React.ReactNode }) {
  return <section className={style.auth_layout}>{children}</section>
}
