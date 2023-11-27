import style from './button.module.css'

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
