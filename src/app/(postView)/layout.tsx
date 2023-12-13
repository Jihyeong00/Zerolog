import style from './layout.module.scss'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={style.layout}>{children}</div>
}
