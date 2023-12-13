import DomainHeaderSection from '@/app/(postView)/_components/common/domain-header-section'
import PostList from '@/app/(postView)/posts/_components/post-list'
import { domainInfo } from '@/constants/policy'

export default function Page() {
  const { domain, description } = domainInfo.posts
  return (
    <>
      <DomainHeaderSection domain={domain} description={description} />
      <PostList />
    </>
  )
}
