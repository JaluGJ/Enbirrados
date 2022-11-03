//call al users

import { changeUserStatus, createNewMeeting, getAllUsers, getMyUser, logIn, signUp, updateInvitationStatus, updateMeeting } from "../api-calls/birra"
import { GET_ALL_USERS, GET_MY_USER, LOGIN_SUCCES, LOG_OUT, NEW_MEETING, SIGN_UP } from "./const"

export function userLogin (data){
  return async function (dispatch){
    try {
      //dispatch({type: LOADING, payload: true})
      const userInfo = await logIn(data)
      //dispatch({type: LOADING, payload: true})
      dispatch({
        type: LOGIN_SUCCES,
        payload: userInfo.request.status === 200
      })
      if (userInfo.request.status === 200){
        dispatch({
          type: LOGIN_SUCCES,
          payload: userInfo.data.data.user
        })
        localStorage.setItem('userInfo', userInfo.data.data.token)
        return userInfo.data.data.user
      }
      alert(userInfo.response.data.message)
      return 
    } catch (error) {
      console.log(error)
    }
  }
}

export function newUserSignUp (data){
  return async function (dispatch){
    try{
      const userInfo = await signUp(data)
      dispatch({type: SIGN_UP, payload: userInfo.request.status})
      if (userInfo.request.status !== 200){
        alert(userInfo.response.data.message)
        return false 
      }
      alert(userInfo.data.message)
      const login = await logIn({email: data.email, password: data.password})
      dispatch({type: LOGIN_SUCCES, payload: login.data.data.user})
      localStorage.setItem('userInfo', login.data.data.token)
      return true
    }
    catch(error){
      console.log(error)
    }
  }
}

export function logOut (){
  return async function (dispatch){
    dispatch({type:LOG_OUT})
    localStorage.setItem('userInfo','no token')
    return true
  }
}

export function allUsers (){
  return async function (dispatch){
    const users = await getAllUsers(localStorage.userInfo)
    if(users.request.status !== 200){
      alert('something went wrong')
    }
    dispatch({type:GET_ALL_USERS,payload:users.data.data})
    return true
  }
}

export function updateUser(userId, data){
  return async function (dispatch){
    const meeting = await changeUserStatus(localStorage.userInfo, userId, data)
    if (meeting.request.status !== 200){
      alert('something went wrong')
      return false
    }
    return true
  }
}

export function newMeetingCreate (data) {
  return async function (dispatch){
    const newMeeting = await createNewMeeting(data,localStorage.userInfo)
    if (newMeeting.request.status === 200){
      dispatch({type:NEW_MEETING, payload:null})
      return newMeeting
    }
      alert('something went wrong')
      return false

  }
}

export function getUserAllData(){
  return async function (dispatch){
    const user = await getMyUser(localStorage.userInfo)
    if(user.request.status === 200){
      dispatch({type:GET_MY_USER, payload:user.data.data})
      return user.data.data.user
    }
    alert('Something went wrong')
    return false
  }
}

export function modifyMeetingStatus(data){
  return async function(dispatch){
    const meeting = await updateMeeting(data, localStorage.userInfo)
    if(meeting.request.status === 200){
      return meeting
    }
    alert('something went wrong')
    return false
  }
}

export function modifyInvitationStatus(data){
  return async function(dispatch){
    const invitation = await updateInvitationStatus(data, localStorage.userInfo)
    if(invitation.request.status === 200){
      return invitation
    }
    alert('something went wrong')
    return false
  }
}