import style from './domain-header-section.module.scss'
import font from '@/styles/font'

type PropsType = {
  domain: string
  description: string
}

export default function DomainHeaderSection({
  domain,
  description,
}: PropsType) {
  return (
    <section className={`${style.section_border}  ${font.lora.className}`}>
      <h3 className={style.domain_title}>{domain}</h3>
      <p className={style.domain_description}>{description}</p>
    </section>
  )
}
