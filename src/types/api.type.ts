export interface IUserData {
  idx: string
  name: string
  email: string
  password: string
}

export interface IProjectData {
  idx: number
  title: string
  url: string
  comment: string
  date: string
  tags: ITag[]
}

export interface ITag {
  idx: number
  name: string
  color: string
  bgColor: string
}

export interface IPostData {
  idx: number
  title: string
  url: string
  previewComment: string
  createdAt: string
  updatedAt: string
  replyCount: number
  likeCount: number
}
