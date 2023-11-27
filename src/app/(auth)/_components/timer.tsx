'use client'

import { useEffect, useState } from 'react'
import style from './timer.module.css'

type PropsType = {
  second: number
}

export default function Timer({ second }: PropsType) {
  const [count, setCount] = useState(second)

  useEffect(() => {
    const id = setInterval(() => {
      setCount((number) => number - 1)
    }, 1000)

    if (count === 0) {
      clearInterval(id)
    }

    return () => clearInterval(id)
  }, [count])

  const min = Math.floor(count / 60)
  const sec = count % 60 < 10 ? `0${count % 60}` : count % 60

  return (
    <p
      className={`${style.timerCount} ${count < 60 ? style.timeOutClose : ''}`}
    >
      {min} : {sec}
    </p>
  )
}
