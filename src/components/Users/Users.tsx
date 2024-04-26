import * as React from 'react';
import styles from './users.module.css'
import axios from "axios";
import usersPhoto from "../../assets/images/users-photo-1.jpg"
import {UsersPropsType} from "./UsersContainer";

export class Users extends React.Component<UsersPropsType> {
  constructor(props: UsersPropsType) {
    super(props);
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
      this.props.addUsers(response.data.items);
    })
  }
  
  // getUsers = () => {
  //   if (this.props.users.length === 0) {
  //     axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
  //       this.props.addUsers(response.data.items);
  //     })
  //   }
  // }
  
  render() {
    return (
      <div>
        {/*<button onClick={this.getUsers}>get users</button>*/}
        {this.props.users.map(u =>
          <div key={u.id}>
          <span>
            <div>
              <img src={u.photos.small === null ? usersPhoto : u.photos.small} className={styles.userPhoto}/>
            </div>
            <div>
              {u.followed
                ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
            </div>
          </span>
            <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
          </div>
        )}
      </div>
    );
  }
}