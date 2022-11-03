import axios from 'axios'
const { REACT_APP_API_CONECTION } = process.env

export function auth(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
}

/*---------------------------------User---------------------------------------------*/
export async function signUp(data) {
  try {
    let response = await axios.post(`${REACT_APP_API_CONECTION}/user/sign-up`, data)
    if (!response) return alert(`something went wrong`)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}

export async function logIn(data) {
  try {
    let response = await axios.post(`${REACT_APP_API_CONECTION}/user/login`, data)
    if (!response) return alert(`something went wrong`)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}

export async function getUserById(userId, token) {
  try {
    let config = auth(token)
    let response = await axios.get(`${REACT_APP_API_CONECTION}/user/${userId}`, config)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}

export async function getMyUser(token) {
  try {
    let config = auth(token)
    let response = await axios.get(`${REACT_APP_API_CONECTION}/user`, config)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}

export async function getAllUsers(token) {
  try {
    let config = auth(token)
    const response = await axios.get(`${REACT_APP_API_CONECTION}/user/allUsers`, config)
    if (!response) return alert(`something went wrong`)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}

export async function changeMyPassword(token, data) {
  try {
    let config = auth(token)
    let response = await axios.put(`${REACT_APP_API_CONECTION}/user/password`, data, config)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}

export async function changeMyInfo(token, data) {
  try {
    let config = auth(token)
    let response = await axios.put(`${REACT_APP_API_CONECTION}/user/info`, data, config)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}

export async function changeUserStatus(token, userId, data) { //admin, ban
  try {
    let config = auth(token)
    let response = await axios.put(`${REACT_APP_API_CONECTION}/user/statusUpdate/${userId}`, data, config)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}

/*---------------------------------Meeting---------------------------------------------*/

export async function getAllMeeting(token) {
  try {
    let config = auth(token)
    let response = await axios.get(`${REACT_APP_API_CONECTION}/meeting`, config)
    return response
  } catch (error) {
    console.log(error)
    return (error)
  }
}
export async function getMeetingById(meetingId, token) {
  try {
    let config = auth(token)
    let response = await axios.get(`${REACT_APP_API_CONECTION}/meeting/${meetingId}`, config)
    return response
  } catch (error) {
    console.log(error)
    return (error)
  }
}
export async function updateMeeting(data, token) {
  try {
    let config = auth(token)
    let response = await axios.put(`${REACT_APP_API_CONECTION}/meeting/update`,data , config)
    return response
  } catch (error) {
    console.log(error)
    return (error)
  }
}
export async function createNewMeeting(data, token) {
  try {
    let config = auth(token)
    let response = await axios.post(`${REACT_APP_API_CONECTION}/meeting/newMeeting`,data , config)
    return response
  } catch (error) {
    console.log(error)
    return (error)
  }
}
/*---------------------------------Invitation---------------------------------------------*/
export async function getAllInvitations( token) {
  try {
    let config = auth(token)
    let response = await axios.get(`${REACT_APP_API_CONECTION}/invitation` , config)
    return response
  } catch (error) {
    console.log(error)
    return (error)
  }
}
export async function getInvitationById(invitationId, token) {
  try {
    let config = auth(token)
    let response = await axios.get(`${REACT_APP_API_CONECTION}/invitation/${invitationId}`, config)
    return response
  } catch (error) {
    console.log(error)
    return (error)
  }
}
export async function updateInvitationStatus(data, token) {
  try {
    let config = auth(token)
    let response = await axios.put(`${REACT_APP_API_CONECTION}/invitation/updateInv`,data , config)
    return response
  } catch (error) {
    console.log(error)
    return (error)
  }
}
export async function updateAllInvitations(data, token) {
  try {
    let config = auth(token)
    let response = await axios.put(`${REACT_APP_API_CONECTION}/invitation/updAllInv`,data , config)
    return response
  } catch (error) {
    console.log(error)
    return (error)
  }
}
// export async function createNewInvitation(data, token) { //half to fart
//   try {
//     let config = auth(token)
//     let response = await axios.post(`${REACT_APP_API_CONECTION}/invitation`,data , config)
//     return response.data
//   } catch (error) {
//     console.log(error)
//     return (error)
//   }
// }
