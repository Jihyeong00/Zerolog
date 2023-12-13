import style from './button.module.scss'

type PropsType = {
  label: string
  rest?: HTMLButtonElement
}

export default function Button({ label, ...rest }: PropsType) {
  return (
    <button className={style.button} type="submit" {...rest}>
      {label}
    </button>
  )
}
