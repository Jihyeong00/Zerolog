import { IProjectData, IUserData } from '@/types/api.type'

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
    idx: '1',
    title: 'CloneTube',
    url: '/project/cloneTube.png',
    comment:
      '너무 어려운 첫번째 토이 프로젝트였습니다. react query-부터 많은 것들을 처음 접해보았고 프론트 앤드의 재미를 느꼇습니다.',
    date: '2022-05-17',
    tags: [
      {
        idx: '1',
        name: 'react',
        color: '#000000',
        bgColor: '#00d8ff',
      },
    ],
  },
  {
    idx: '2',
    title: 'AIF',
    url: '/project/Issue_finder.png',
    comment:
      '너무 어려운 첫번째 토이 프로젝트였습니다. react query-부터 많은 것들을 처음 접해보았고 프론트 앤드의 재미를 느꼇습니다.',
    date: '2022-05-17',
    tags: [
      {
        idx: '1',
        name: 'react',
        color: '#000000',
        bgColor: '#00d8ff',
      },
      {
        idx: '3',
        name: 'notion',
        color: '#000000',
        bgColor: '#ffffff',
      },
      {
        idx: '4',
        name: 'figma',
        color: '#000000',
        bgColor: '#0d99ff',
      },
    ],
  },
  {
    idx: '3',
    title: 'Movie Trailer',
    url: '/project/movie_trailer.png',
    comment:
      '첫번째로 다른사람과 하는 협업 프로젝트입니다. 다양한 컨벤션들이 정해졌고 혼자 했을 때 보다 생각해야하는 것들이 많았습니다.',
    date: '2022-05-17',
    tags: [
      {
        idx: '1',
        name: 'react',
        color: '#000000',
        bgColor: '#00d8ff',
      },
      {
        idx: '3',
        name: 'notion',
        color: '#000000',
        bgColor: '#ffffff',
      },
      {
        idx: '4',
        name: 'figma',
        color: '#0d99ff',
        bgColor: '#ffffff',
      },
    ],
  },
  {
    idx: '4',
    title: 'Paradise',
    url: '/project/paradise.png',
    comment:
      '그동안 협업했던 사람들과 마지막으로 함께했던 프로젝트입니다. 그동안 공부했던 것들을 바탕으로 마지막까지 열심히 해준 팀원들 덕분에 끝까지 할 수 있었습니다.',
    date: '2023-08-15',
    tags: [
      {
        idx: '1',
        name: 'react',
        color: '#000000',
        bgColor: '#00d8ff',
      },
      {
        idx: '3',
        name: 'notion',
        color: '#000000',
        bgColor: '#ffffff',
      },
      {
        idx: '4',
        name: 'figma',
        color: '#0d99ff',
        bgColor: '#ffffff',
      },
    ],
  },
  {
    idx: '5',
    title: 'Kkiri',
    url: '/project/kkiri.png',
    comment:
      '예전으로 돌아가 실제 프로젝트처럼 인원배분을 하여 프로젝트를 진행하였습니다. 새롭게 타입스크립트를 도입을 하여 많은 어려움이 있었지만 그래도 훌륭히 해냈습니다..',
    date: '2023-11-30',
    tags: [
      {
        idx: '1',
        name: 'react',
        color: '#000000',
        bgColor: '#00d8ff',
      },
      {
        idx: '2',
        name: 'typescript',
        color: '#ffffff',
        bgColor: '#3178c6',
      },
      {
        idx: '3',
        name: 'notion',
        color: '#000000',
        bgColor: '#ffffff',
      },
      {
        idx: '4',
        name: 'figma',
        color: '#0d99ff',
        bgColor: '#ffffff',
      },
      {
        idx: '5',
        name: 'spring boot',
        color: '#ffffff',
        bgColor: '#6db33f',
      },
      {
        idx: '5',
        name: 'spring security',
        color: '#ffffff',
        bgColor: '#6db33f',
      },
    ],
  },
]

const MOCK = {
  user,
  projects,
}

export default MOCK
