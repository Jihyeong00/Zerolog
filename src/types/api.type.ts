export interface IUserData {
  idx: string
  name: string
  email: string
  password: string
}

export interface IProjectData {
  idx: string
  title: string
  url: string
  comment: string
  date: string
  tags: ITag[]
}

export interface ITag {
  idx: string
  name: string
  color: string
}
