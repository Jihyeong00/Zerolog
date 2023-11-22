export type PathType = keyof typeof PATH
export type HeaderPath = Exclude<PathType, 'login' | 'signup'>

export const HEADER_PATH: HeaderPath[] = [
  'home',
  'posts',
  'projects',
  'issues',
  'diary',
] as const

export const PATH = {
  home: '/',
  posts: '/posts',
  projects: '/projects',
  issues: '/issues',
  diary: '/diary',
  login: '/login',
  signup: '/signup',
} as const
