import {IProjectData, IUserData} from '@/types/api.type'

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
        title: '유튜브 API를 활용한 유튜브 클론코딩',
        url: '/project/cloneTube.png',
        comment:
            '너무 어려운 첫번째 토이 프로젝트였습니다. react query-부터 많은 것들을 처음 접해보았고 프론트 앤드의 재미를 느꼇습니다.',
        date: '2022-05-17',
        tags: [
            {
                idx: '1',
                name: 'react',
                color: '#00d8ff',
            },
            {
                idx: '5',
                name: 'toy project',
                color: '#4e4e4e',
            },
        ],
    },
    {
        idx: '2',
        title: 'Git API를 활용한 Angular Issue finder',
        url: '/project/Issue_finder.png',
        comment:
            '너무 어려운 첫번째 토이 프로젝트였습니다. react query-부터 많은 것들을 처음 접해보았고 프론트 앤드의 재미를 느꼇습니다.',
        date: '2022-05-17',
        tags: [
            {
                idx: '1',
                name: 'react',
                color: '#00d8ff',
            },
            {
                idx: '3',
                name: 'notion',
                color: '#ffffff',
            },
            {
                idx: '4',
                name: 'figma',
                color: '#0d99ff',
            },
            {
                idx: '5',
                name: 'toy project',
                color: '#4e4e4e',
            },
        ],
    },
    {
        idx: '3',
        title: 'Git API를 활용한 Movie 검색 프로젝트',
        url: '/project/Issue_finder.png',
        comment:
            '첫번째로 다른사람과 하는 협업 프로젝트입니다. 다양한 컨벤션들이 정해졌고 혼자 했을 때 보다 생각해야하는 것들이 많았습니다.',
        date: '2022-05-17',
        tags: [
            {
                idx: '1',
                name: 'react',
                color: '#00d8ff',
            },
            {
                idx: '3',
                name: 'notion',
                color: '#ffffff',
            },
            {
                idx: '4',
                name: 'figma',
                color: '#0d99ff',
            },
            {
                idx: '5',
                name: 'toy project',
                color: '#4e4e4e',
            },
        ],
    },
    {
        idx: '4',
        title: 'TMDB API를 활용한 Movie 검색 프로젝트',
        url: '/project/movie_trailer.png',
        comment:
            'API 문서의 양이 생각보다 길어서 놀랐습니다. 그래도 이전에 Git API보다 많은 사람들이 참여하여 개발을 진행하였습니다. 하지만 문제도 많았습니다.',
        date: '2022-05-17',
        tags: [
            {
                idx: '1',
                name: 'react',
                color: '#00d8ff',
            },
            {
                idx: '3',
                name: 'notion',
                color: '#ffffff',
            },
            {
                idx: '4',
                name: 'figma',
                color: '#0d99ff',
            },
            {
                idx: '5',
                name: 'toy project',
                color: '#4e4e4e',
            },
        ],
    },
    {
        idx: '5',
        title: '중고거래 사이트 Paradise',
        url: '/project/paradise.png',
        comment:
            '그동안 협업했던 사람들과 마지막으로 함께했던 프로젝트입니다. 그동안 공부했던 것들을 바탕으로 마지막까지 열심히 해준 팀원들 덕분에 끝까지 할 수 있었습니다.',
        date: '2023-08-15',
        tags: [
            {
                idx: '1',
                name: 'react',
                color: '#00d8ff',
            },
            {
                idx: '3',
                name: 'notion',
                color: '#ffffff',
            },
            {
                idx: '4',
                name: 'figma',
                color: '#0d99ff',
            },
            {
                idx: '5',
                name: 'side project',
                color: '#3e3e3e',
            },
        ],
    },
    {
        idx: '6',
        title: '프라이빗한 정보공유 사이트 Kkiri',
        url: '/project/paradise.png',
        comment:
            '예전으로 돌아가 실제 프로젝트처럼 인원배분을 하여 프로젝트를 진행하였습니다. 새롭게 타입스크립트를 도입을 하여 많은 어려움이 있었지만 그래도 훌륭히 해냈습니다..',
        date: '2023-11-30',
        tags: [
            {
                idx: '1',
                name: 'react',
                color: '#00d8ff',
            },
            {
                idx: '2',
                name: 'typescript',
                color: '#3178c6',
            },
            {
                idx: '3',
                name: 'notion',
                color: '#ffffff',
            },
            {
                idx: '4',
                name: 'figma',
                color: '#0d99ff',
            },
            {
                idx: '5',
                name: 'side project',
                color: '#3e3e3e',
            },
        ],
    },
]


const MOCK = {
    user, projects
}

export default MOCK