import {v1} from "uuid";

type ActionsTypes =
  | ReturnType<typeof addPost>
  | ReturnType<typeof updateNewPostText>
  | ReturnType<typeof setUserProfile>

type PostType = {
  id: string
  message: string
  likesCount: number
};

export type ProfileType = {
  aboutMe: string
  contacts: {
    facebook: string
    website: null | string
    vk: string
    twitter: string
    instagram: string
    youtube: null | string
    github: string
    mainLink: null | string
  },
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  userId: boolean
  photos: {
    small: string
    large: string
  }
}

export type ProfileStateType = typeof profileInitialState;

const profileInitialState = {
  posts: [
    {id: v1(), message: "Hi! How are you?", likesCount: 12},
    {id: v1(), message: "It's my name", likesCount: 11},
    {id: v1(), message: "Bla-bla-bla", likesCount: 10},
    {id: v1(), message: "Da-da-da", likesCount: 9},
  ] as PostType[],
  newPostText: "",
  profile: {} as ProfileType
};

export const profileReducer = (
  state: ProfileStateType = profileInitialState,
  action: ActionsTypes
): ProfileStateType => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        posts: [...state.posts, {id: v1(), message: state.newPostText, likesCount: 0}],
        newPostText: ""
      };
    case "UPDATE_NEW_POST_TEXT":
      return {...state, newPostText: action.newPostText};
    case "SET_USER_PROFILE":
      return {...state, profile: action.profile};
    default:
      return state;
  }
};

export const addPost = () => {
  return {type: "ADD_POST"} as const
};
export const updateNewPostText = (newPostText: string) => {
  return {type: "UPDATE_NEW_POST_TEXT", newPostText} as const
};
export const setUserProfile = (profile: ProfileType) => {  // todo: fix any
  return {type: "SET_USER_PROFILE", profile} as const
};