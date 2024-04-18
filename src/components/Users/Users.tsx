import * as React from 'react';
import {UsersPropsType} from "./UsersContainer";
import styles from './users.module.css'
import {v1} from "uuid";

export const Users: React.FC<UsersPropsType> = (props) => {
  if (props.users.length === 0) props.addUsers([
    {
      id: v1(),
      photoURL: 'https://itbizlab.ru/wp-content/uploads/salemanager-1024x1024.png',
      followed: false,
      fullName: 'Dmitry',
      status: 'I am a programming 1',
      location: {city: 'Minsk', country: 'Belarus'}
    },
    {
      id: v1(),
      photoURL: 'https://itbizlab.ru/wp-content/uploads/salemanager-1024x1024.png',
      followed: true,
      fullName: 'Andrew',
      status: 'I am a programming 2',
      location: {city: 'Nadym', country: 'Russia'}
    },
    {
      id: v1(),
      photoURL: 'https://itbizlab.ru/wp-content/uploads/salemanager-1024x1024.png',
      followed: false,
      fullName: 'Sergey',
      status: 'I am a programming 3',
      location: {city: 'Moscow', country: 'Russia'}
    },
  ])
  return (
    <div>
      {props.users.map(u =>
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoURL} className={styles.userPhoto}/>
            </div>
            <div>
              {u.followed
                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                : <button onClick={() => props.follow(u.id)}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      )}
    </div>
  );
};