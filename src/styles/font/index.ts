import { Lora, Noto_Serif, Nunito, Orbit } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })
const notoSerif = Noto_Serif({ subsets: ['latin'] })
const lora = Lora({ subsets: ['latin'] })
const orbit = Orbit({ weight: '400', subsets: ['latin'] })

const font = {
  nunito,
  notoSerif,
  lora,
  orbit,
}

export default font
