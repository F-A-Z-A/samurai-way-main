type AddPostActionType = ReturnType<typeof addPostAC>;
type UpdateNewPostText = ReturnType<typeof updateNewPostTextAC>;
type PostType = {
  id: number
  message: string
  likesCount: number
};
export type ProfileInitialStateType = typeof profileInitialState;

const profileInitialState = {
  posts: [
    {id: 1, message: "Hi! How are you?", likesCount: 12},
    {id: 2, message: "It's my name", likesCount: 11},
    {id: 3, message: "Bla-bla-bla", likesCount: 10},
    {id: 4, message: "Da-da-da", likesCount: 9},
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

const profileReducer = (
  state: ProfileInitialStateType = profileInitialState,
  action: AddPostActionType | UpdateNewPostText
): ProfileInitialStateType => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        posts: [...state.posts, {id: 5, message: state.newPostText, likesCount: 0}],
        newPostText: ""
      };
    case "UPDATE_NEW_POST_TEXT":
      state.newPostText = action.newPostText;
      return {...state, newPostText: action.newPostText};
    default:
      return state;
  }
};

export default profileReducer;