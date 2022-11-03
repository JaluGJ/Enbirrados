import React from 'react'
import style from './Home.module.css'
import { useState } from 'react'
import NewMeeting from '../../components/Admin/NewMeeting/NewMeeting'
import Meetings from '../../components/User/Meetings/Meetings'
import SideBar from '../../components/Sidbar/SideBar'
import Invitations from '../../components/User/Invitations/Invitations'
import Profile from '../../components/User/profile/Profile'
import AllUsers from '../../components/Admin/AllUsers/AllUsers'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUserAllData } from '../../redux/actions'


export default function Home() {
  const [render, setRender] = useState('Home')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserAllData())
  }, )
  

  return (
    <>
        <div className={style.container}>
        <SideBar setRender={setRender} render={render} />
        {render==='Home' ? <Invitations/> :<></>}
        {render==='My Meetups' ? <Meetings/> :<></>}
        {render==='My profile' ? <Profile/> :<></>}
        {render==='New meeting' ? <NewMeeting/> :<></>}
        {render==='Users panel' ? <AllUsers/> :<></>}
      </div>
    </>
  )
}
