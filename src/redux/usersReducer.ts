type ActionsTypes =
  | ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof addUsersAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setTotalUsersCountAC>
  | ReturnType<typeof toggleIsFetchingAC>

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
  pageSize: 15,
  totalUsersCount: 300,
  currentPage: 1,
  isFetching: false
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
    case "SET_USERS":
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
    case "TOGGLE_IS_FETCHING":
      return {
        ...state,
        isFetching: action.payload.isFetching
      }
    default:
      return state;
  }
};

export const followAC = (userID: number) => {
  return {type: "FOLLOW", payload: {userID}} as const
};

export const unfollowAC = (userID: number) => {
  return {type: "UNFOLLOW", payload: {userID}} as const
};

export const addUsersAC = (users: UsersType[]) => {
  return {type: "SET_USERS", payload: {users}} as const
};

export const setCurrentPageAC = (currentPage: number) => {
  return {type: "SET_CURRENT_PAGE", payload: {currentPage}} as const
};

export const setTotalUsersCountAC = (totalUsersCount: number) => {
  return {type: "SET_TOTAL_USERS_COUNT", payload: {totalUsersCount}} as const
};

export const toggleIsFetchingAC = (isFetching: boolean) => {
  return {type: "TOGGLE_IS_FETCHING", payload: {isFetching}} as const
};