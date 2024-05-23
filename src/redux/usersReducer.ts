type ActionsTypes =
  | ReturnType<typeof follow>
  | ReturnType<typeof unfollow>
  | ReturnType<typeof addUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof toggleIsFetching>

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
  totalUsersCount: 0,
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

export const follow = (userID: number) => {
  return {type: "FOLLOW", payload: {userID}} as const
};

export const unfollow = (userID: number) => {
  return {type: "UNFOLLOW", payload: {userID}} as const
};

export const addUsers = (users: UsersType[]) => {
  return {type: "SET_USERS", payload: {users}} as const
};

export const setCurrentPage = (currentPage: number) => {
  return {type: "SET_CURRENT_PAGE", payload: {currentPage}} as const
};

export const setTotalUsersCount = (totalUsersCount: number) => {
  return {type: "SET_TOTAL_USERS_COUNT", payload: {totalUsersCount}} as const
};

export const toggleIsFetching = (isFetching: boolean) => {
  return {type: "TOGGLE_IS_FETCHING", payload: {isFetching}} as const
};