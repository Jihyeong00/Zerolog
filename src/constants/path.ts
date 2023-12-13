export type PathType = keyof typeof path
export type HeaderPath = Exclude<PathType, 'login' | 'signup'>
export type SocialType = 'google' | 'kakao' | 'naver'

export const link = {
  github: 'https://github.com/Jihyeong00',
  velog: 'https://velog.io/@jihyeong00',
}

export const headerPath: HeaderPath[] = ['home', 'posts', 'projects']

export const path = {
  home: '/',
  posts: '/posts',
  projects: '/projects',
  login: '/login',
  signup: '/signup',
}
