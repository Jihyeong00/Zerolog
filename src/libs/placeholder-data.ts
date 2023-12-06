import { IPostData, IProjectData, IUserData } from '@/types/api.type'

const user: IUserData[] = [
  {
    idx: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
]

const projects: IProjectData[] = [
  {
    idx: 1,
    title: 'CloneTube',
    url: '/project/cloneTube.png',
    comment:
      '너무 어려운 첫번째 토이 프로젝트였습니다. react query-부터 많은 것들을 처음 접해보았고 프론트 앤드의 재미를 느꼇습니다.',
    date: '2022-05-17',
    tags: [
      {
        idx: 1,
        name: 'react',
        color: '#000000',
        bgColor: '#00d8ff',
      },
    ],
  },
  {
    idx: 2,
    title: 'AIF',
    url: '/project/Issue_finder.png',
    comment:
      '너무 어려운 첫번째 토이 프로젝트였습니다. react query-부터 많은 것들을 처음 접해보았고 프론트 앤드의 재미를 느꼇습니다.',
    date: '2022-05-17',
    tags: [
      {
        idx: 1,
        name: 'react',
        color: '#000000',
        bgColor: '#00d8ff',
      },
      {
        idx: 3,
        name: 'notion',
        color: '#000000',
        bgColor: '#ffffff',
      },
      {
        idx: 4,
        name: 'figma',
        color: '#000000',
        bgColor: '#0d99ff',
      },
    ],
  },
  {
    idx: 3,
    title: 'Movie Trailer',
    url: '/project/movie_trailer.png',
    comment:
      '첫번째로 다른사람과 하는 협업 프로젝트입니다. 다양한 컨벤션들이 정해졌고 혼자 했을 때 보다 생각해야하는 것들이 많았습니다.',
    date: '2022-05-17',
    tags: [
      {
        idx: 1,
        name: 'react',
        color: '#000000',
        bgColor: '#00d8ff',
      },
      {
        idx: 3,
        name: 'notion',
        color: '#000000',
        bgColor: '#ffffff',
      },
      {
        idx: 4,
        name: 'figma',
        color: '#0d99ff',
        bgColor: '#ffffff',
      },
    ],
  },
  {
    idx: 4,
    title: 'Paradise',
    url: '/project/paradise.png',
    comment:
      '그동안 협업했던 사람들과 마지막으로 함께했던 프로젝트입니다. 그동안 공부했던 것들을 바탕으로 마지막까지 열심히 해준 팀원들 덕분에 끝까지 할 수 있었습니다.',
    date: '2023-08-15',
    tags: [
      {
        idx: 1,
        name: 'react',
        color: '#000000',
        bgColor: '#00d8ff',
      },
      {
        idx: 3,
        name: 'notion',
        color: '#000000',
        bgColor: '#ffffff',
      },
      {
        idx: 4,
        name: 'figma',
        color: '#0d99ff',
        bgColor: '#ffffff',
      },
    ],
  },
  {
    idx: 5,
    title: 'Kkiri',
    url: '/project/kkiri.png',
    comment:
      '예전으로 돌아가 실제 프로젝트처럼 인원배분을 하여 프로젝트를 진행하였습니다. 새롭게 타입스크립트를 도입을 하여 많은 어려움이 있었지만 그래도 훌륭히 해냈습니다..',
    date: '2023-11-30',
    tags: [
      {
        idx: 1,
        name: 'react',
        color: '#000000',
        bgColor: '#00d8ff',
      },
      {
        idx: 2,
        name: 'typescript',
        color: '#ffffff',
        bgColor: '#3178c6',
      },
      {
        idx: 3,
        name: 'notion',
        color: '#000000',
        bgColor: '#ffffff',
      },
      {
        idx: 4,
        name: 'figma',
        color: '#0d99ff',
        bgColor: '#ffffff',
      },
      {
        idx: 5,
        name: 'spring boot',
        color: '#ffffff',
        bgColor: '#6db33f',
      },
      {
        idx: 6,
        name: 'spring security',
        color: '#ffffff',
        bgColor: '#6db33f',
      },
    ],
  },
]

const posts: IPostData[] = [
  {
    idx: 3,
    title: '[Next] Next-JS의 파일 컨벤션',
    createdAt: '2023-11-15T23:44:57.000Z',
    updatedAt: '2023-11-24T23:59:58.000Z',
    url: '/post/blog_post_url_3.png',
    previewComment:
      '웹 프레임워크인 Next.js의 파일 컨벤션을 이해하고 Next.js 파일들을 만들어 효율적인 설계를 하기 위한 정리글입니다.',
    likeCount: 4,
    replyCount: 5,
  },
  {
    idx: 2,
    title: '[Jira] 이슈 트래킹 시스템을 활용한 프로젝트 만들기',
    createdAt: '2023-09-15T20:26:56.000Z',
    updatedAt: '2023-09-15T20:26:56.000Z',
    url: '/post/blog_post_url_2.png',
    previewComment:
      '새로운 프론트앤드 스터디 팀을 구성하게 되면서 지금까지 했던 스터디와 프로젝트를 돌아보면 협업이 적극적으로 이루어지지 않은 느낌이 있었습니다. 이에 이슈 트래킹 시스템과 스크럼 프레임워크를 도입하여 더 나은 프로젝트를 만기 위해 해당 포스트를 작성합니다.',
    replyCount: 3,
    likeCount: 4,
  },
  {
    idx: 1,
    title: '[Git] GitHub Project, Issues 활용하기',
    createdAt: '2023-08-18T12:26:56.000Z',
    updatedAt: '2023-08-19T12:26:56.000Z',
    url: '/post/blog_post_url_1.png',
    previewComment:
      '이번 글에서는 GitHub에서 제공하지만 잘 사용해보지 않았던 Project와 Issues에 대해서 공부를 하고 사용하는 방법들을 정리하고 정의해봅니다.',
    likeCount: 6,
    replyCount: 8,
  },
]

const MOCK = {
  user,
  projects,
  posts,
}

export default MOCK
