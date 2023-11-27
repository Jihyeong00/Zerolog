import POLICY from '@/constants/policy'
import DomainHeaderSection from '@/app/(postView)/_components/common/domain-header-section'

export default function Page() {
  const { domain, description } = POLICY.domainInfo.posts
  return <DomainHeaderSection domain={domain} description={description} />
}
