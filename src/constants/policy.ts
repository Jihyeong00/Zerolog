import SITE from '@/constants/site'

const domainInfo = {
  diary: {
    domain: 'Diary',
    description: `${SITE.markUp.name}의 일기 페이지입니다.`,
  },
  projects: {
    domain: 'Projects',
    description: '과거에 그렸던 프로젝트입니다.',
  },
  posts: {
    domain: 'Posts',
    description: '공부를 하면서 얻은 지식을 공유합니다.',
  },
  issues: {
    domain: 'Issues',
    description: `${SITE.markUp.name}에게 질문을 할 수 있는 공간입니다.`,
  },
}

const POLICY = {
  domainInfo,
}

export default POLICY
