import { Noto_Serif, Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })
const notoSerif = Noto_Serif({ subsets: ['latin'] })

const font = {
  nunito,
  notoSerif,
}

export default font
