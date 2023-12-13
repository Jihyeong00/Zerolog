import { PropsWithChildren } from 'react'
import style from './tooltip.module.scss'

type PropsType = {
  title: string
  forward?: 'top' | 'bottom'
}

export default function Tooltip({
  title,
  forward = 'top',
  children,
}: PropsWithChildren<PropsType>) {
  return (
    <div className={`${style.tooltipBox} ${style[forward]}`}>
      <div className={style.tooltipTitle}>{title}</div>
      {children}
    </div>
  )
}
