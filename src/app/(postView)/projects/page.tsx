import POLICY from '@/constants/policy'
import ProjectList from '@/app/(postView)/projects/_components/project-list'
import DomainHeaderSection from '@/app/(postView)/_components/common/domain-header-section'

export default function Page() {
  const { domain, description } = POLICY.domainInfo.projects
  return (
    <>
      <DomainHeaderSection domain={domain} description={description} />
      <ProjectList />
    </>
  )
}
