import {v1} from "uuid";

type AddPostActionType = ReturnType<typeof addPostAC>;
type UpdateNewPostText = ReturnType<typeof updateNewPostTextAC>;
type PostType = {
  id: string
  message: string
  likesCount: number
};
export type ProfileInitialStateType = typeof profileInitialState;

const profileInitialState = {
  posts: [
    {id: v1(), message: "Hi! How are you?", likesCount: 12},
    {id: v1(), message: "It's my name", likesCount: 11},
    {id: v1(), message: "Bla-bla-bla", likesCount: 10},
    {id: v1(), message: "Da-da-da", likesCount: 9},
  ] as PostType[],
  newPostText: ""
};

export const addPostAC = () => {
  return {
    type: "ADD_POST"
  } as const
};
export const updateNewPostTextAC = (newPostText: string) => {
  return {
    type: "UPDATE_NEW_POST_TEXT",
    newPostText: newPostText
  } as const
};

export const profileReducer = (
  state: ProfileInitialStateType = profileInitialState,
  action: AddPostActionType | UpdateNewPostText
): ProfileInitialStateType => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        posts: [...state.posts, {id: v1(), message: state.newPostText, likesCount: 0}],
        newPostText: ""
      };
    case "UPDATE_NEW_POST_TEXT":
      return {...state, newPostText: action.newPostText};
    default:
      return state;
  }
};