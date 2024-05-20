import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
  addUsersAC,
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC, toggleIsFetchingAC,
  unfollowAC,
  UsersInitialStateType,
  UsersType
} from "../../redux/usersReducer";
import * as React from "react";
import axios from "axios";
import {Users} from "./Users";
import preloader from "../../assets/images/clock.svg"
import {Preloader} from "../common/Preloader/Preloader";

class UsersContainer extends React.Component<UsersPropsType> {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.addUsers(response.data.items);
        // this.props.setTotalUsersCount(response.data.totalCount);
        // отключил, чтоб не грузился totalUsersCount (большое число), оно берется из usersInitialState (заадно totalUsersCount: 300)
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

type MapStateToPropsType = UsersInitialStateType
type MapDispatchToPropsType = {
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  addUsers: (users: UsersType[]) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount: (totalUsersCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void
};

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    follow: (userID: number) => {
      dispatch(followAC(userID))
    },
    unfollow: (userID: number) => {
      dispatch(unfollowAC(userID))
    },
    addUsers: (users: UsersType[]) => {
      dispatch(addUsersAC(users))
    },
    setCurrentPage: (currentPage: number) => {
      dispatch(setCurrentPageAC(currentPage))
    },
    setTotalUsersCount: (totalUsersCount: number) => {
      dispatch(setTotalUsersCountAC(totalUsersCount))
    },
    toggleIsFetching: (isFetching: boolean) => {
      dispatch(toggleIsFetchingAC(isFetching))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)

