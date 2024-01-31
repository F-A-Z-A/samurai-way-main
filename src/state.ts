type PostType = {
  id: number
  message: string
  count: number
}

type DialogType = {
  id: number
  name: string
}

type MassageType = {
  id: number
  message: string
}

type ProfilePageType = {
  posts: Array<PostType>
}

type DialogPagesType = {
  dialogs: Array<DialogType>
  massages: Array<MassageType>
}

type SidebarType = {}

type RootStateType = {
  profilePage: ProfilePageType
  dialogPages: DialogPagesType
  sidebar: SidebarType
}

const state: RootStateType = {
  profilePage: {
    posts: [
      {id: 1, message: "Lorem text", count: 10},
      {id: 2, message: "Lorem text", count: 12},
    ]
  },
  dialogPages: {
    dialogs: [
      {id: 1, name: "Name"},
      {id: 2, name: "Name"},
    ],
    massages: [
      {id: 1, message: "HiName"},
      {id: 2, message: "HiName"},
    ]
  },
  sidebar: {}
}

export default state;