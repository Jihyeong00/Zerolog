import ProjectList from '@/app/(postView)/projects/_components/project-list'
import DomainHeaderSection from '@/app/(postView)/_components/common/domain-header-section'
import { domainInfo } from '@/constants/policy'

export default function Page() {
  const { domain, description } = domainInfo.projects
  return (
    <>
      <DomainHeaderSection domain={domain} description={description} />
      <ProjectList />
    </>
  )
}
