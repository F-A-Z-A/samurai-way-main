type FollowActionType = ReturnType<typeof followAC>;
type UnfollowActionType = ReturnType<typeof unfollowAC>;
type SetUsersActionType = ReturnType<typeof addUsersAC>;
type SetCurrenPageActionType = ReturnType<typeof setCurrentPageAC>;
type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>;

type ActionsTypes =
  FollowActionType
  | UnfollowActionType
  | SetUsersActionType
  | SetCurrenPageActionType
  | SetTotalUsersCountActionType

// type LocationType = {
//   city: string
//   country: string
// }
// export type UsersType = {
//   id: string
//   photoURL: string
//   followed: boolean
//   fullName: string
//   status: string
//   location: LocationType
// };

type PhotosType = {
  small: string;
  large: string;
}

export type UsersType = {
  name: string
  id: number
  uniqueUrlName: string
  photos: PhotosType
  status: string
  followed: boolean
};

export type UsersInitialStateType = typeof usersInitialState;
const usersInitialState = {
  users: [] as UsersType[],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1
};

export const usersReducer = (
  state: UsersInitialStateType = usersInitialState,
  action: ActionsTypes
): UsersInitialStateType => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users
          .map(u => u.id === action.payload.userID ? {...u, followed: true} : u)
      }
    case "UNFOLLOW":
      return {
        ...state,
        users: state.users
          .map(u => u.id === action.payload.userID ? {...u, followed: false} : u)
      }
    case "ADD_USERS":
      return {
        ...state,
        users: action.payload.users
      }
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload.currentPage
      }
    case "SET_TOTAL_USERS_COUNT":
      return {
        ...state,
        totalUsersCount: action.payload.totalUsersCount
      }
    default:
      return state;
  }
};

export const followAC = (userID: number) => {
  return {
    type: "FOLLOW",
    payload: {userID}
  } as const
};

export const unfollowAC = (userID: number) => {
  return {
    type: "UNFOLLOW",
    payload: {userID}
  } as const
};

export const addUsersAC = (users: UsersType[]) => {
  return {
    type: "ADD_USERS",
    payload: {users}
  } as const
};

export const setCurrentPageAC = (currentPage: number) => {
  return {
    type: "SET_CURRENT_PAGE",
    payload: {currentPage}
  } as const
};

export const setTotalUsersCountAC = (totalUsersCount: number) => {
  return {
    type: "SET_TOTAL_USERS_COUNT",
    payload: {totalUsersCount}
  } as const
};