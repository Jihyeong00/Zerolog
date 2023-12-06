export type PathType = keyof typeof PATH
export type HeaderPath = Exclude<PathType, 'login' | 'signup'>
export type SocialType = 'google' | 'kakao' | 'naver'

export const HEADER_PATH: HeaderPath[] = ['home', 'posts', 'projects'] as const

export const PATH = {
  home: '/',
  posts: '/posts',
  projects: '/projects',
  login: '/login',
  signup: '/signup',
} as const
