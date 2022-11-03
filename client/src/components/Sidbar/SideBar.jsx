import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../../redux/actions'
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import style from './SideBar.module.css'

export default function SideBar({ setRender, render}) {
  const user = useSelector(state => state.userInfo)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = (e, name) => {
    e.preventDefault()
    setRender(name)
  }

  const handleLogOut = (e) => {
    e.preventDefault()
    dispatch(logOut())
    navigate('/')
  }
  return (
    <div className={style.container}>
      <div className={render === 'Home' ? style.selected : style.button} onClick={(e) => handleClick(e, 'Home')} >
        <HomeIcon fontSize='large' />
        <p className={style.option}>Home</p>
      </div>
      <div className={render === 'My Meetups' ? style.selected : style.button} onClick={(e) => handleClick(e, 'My Meetups')} >
        <GroupsIcon fontSize='large' />
        <p className={style.option}>My Meetups</p>
      </div>
      <div className={render === 'My profile' ? style.selected : style.button} onClick={(e) => handleClick(e, 'My profile')} >
        <img src={user.profilePic} alt="profilePic" className={style.profilePic} />
        <p className={style.option}>My profile</p>
      </div>
      {user.isAdmin ? <>
        <div className={render === 'New meeting' ? style.selected : style.button} onClick={(e) => handleClick(e, 'New meeting')} >
          <GroupAddIcon fontSize='large' />
          <p className={style.option}>New meeting</p>
        </div>
        <div className={render === 'Users panel' ? style.selected : style.button} onClick={(e) => handleClick(e, 'Users panel')} >
          <PeopleAltIcon fontSize='large' />
          <p className={style.option}>Users panel</p>
        </div> </>
        : <></>}
      <div className={render === 'Log out' ? style.selected : style.button} onClick={(e) => handleLogOut(e, 'Log out')} >
        <LogoutIcon fontSize='large' />
        <p className={style.option}>Log out</p>
      </div>
    </div>
  )
}
