import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react'
import style from './input.module.scss'

type PropsType = {
  label: string
  type: HTMLInputTypeAttribute
  onChange?: ChangeEventHandler<HTMLInputElement>
  rest?: HTMLInputElement
}

export default function Input({ label, type = 'text', ...rest }: PropsType) {
  return (
    <label className={style.label} htmlFor={label}>
      <p className={style.p}>{label}</p>
      <input
        className={style.input}
        placeholder={label}
        id={label}
        type={type}
        {...rest}
      />
    </label>
  )
}
