import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdVerified } from 'react-icons/md'
import { userPresentFunc } from '../../helper'
import { getAllUsers } from '../../Redux';

export const AvatarUsernameCard = ({username}) => {
  const dispatch = useDispatch();

  const{allUsers} = useSelector((state)=>state.users);
  const foundUser = allUsers?.find((user)=>user.username === username)

  useEffect(()=>{
    dispatch(getAllUsers());
  },[])

  return (
    <div className="post-card-avatar">
          <img
            class="AvatarImage user-card-avatar box-shadow-round"
            src={foundUser?.avatarURL}
            alt=""
            sizes=""
            srcset=""
          />
          <div className="postCard-text-container">
            <span className="postCard-text">
              {`${foundUser?.firstName} ${foundUser?.lastName}`}
              <MdVerified className="verification-icon" />
             {`@${foundUser?.username}`}
            </span>
          </div>
    </div>
  )
}
