import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
  addUsers,
  follow,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  unfollow,
  UsersInitialStateType,
  UsersType
} from "../../redux/usersReducer";
import * as React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

class UsersContainer extends React.Component<UsersContainerPropsType> {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.addUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount / 90);
        // сделал "/ 90", а то много страниц получается
      })
  }
  
  onPageChange = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.toggleIsFetching(false)
        this.props.addUsers(response.data.items);
      })
  }
  
  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChange={this.onPageChange}
             users={this.props.users}
             follow={this.props.follow}
             unfollow={this.props.unfollow}
      />
    </>
  }
}

type MapDispatchToPropsType = {
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  addUsers: (users: UsersType[]) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount: (totalUsersCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void
};

type UsersContainerPropsType = UsersInitialStateType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): UsersInitialStateType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
}

export default connect(
  mapStateToProps,
  {follow, unfollow, addUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching}
)(UsersContainer)


// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//   return {
//     follow: (userID: number) => {
//       dispatch(followAC(userID))
//     },
//     unfollow: (userID: number) => {
//       dispatch(unfollowAC(userID))
//     },
//     addUsers: (users: UsersType[]) => {
//       dispatch(addUsersAC(users))
//     },
//     setCurrentPage: (currentPage: number) => {
//       dispatch(setCurrentPageAC(currentPage))
//     },
//     setTotalUsersCount: (totalUsersCount: number) => {
//       dispatch(setTotalUsersCountAC(totalUsersCount))
//     },
//     toggleIsFetching: (isFetching: boolean) => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     },
//   }
// }
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(UsersContainer)