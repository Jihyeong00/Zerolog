import { Lora, Noto_Serif, Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })
const notoSerif = Noto_Serif({ subsets: ['latin'] })
const lora = Lora({ subsets: ['latin'] })

const font = {
  nunito,
  notoSerif,
  lora,
}

export default font
