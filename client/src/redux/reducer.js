import { GET_ALL_USERS, GET_MY_USER, GET_USER, LOGIN_SUCCES, LOG_OUT, SIGN_UP } from "./const";

const initialState = {
  user: {},
  userInfo: {},
  signupStatus: 0,
  users: [],
  usersBackup: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: [...action.payload],
        usersBackup: [...action.payload]
      }
    case LOGIN_SUCCES:
      return {
        ...state,
        user: action.payload
      }
    case GET_USER:
      return {
        ...state,
        user: action.payload
      }
    case GET_MY_USER:
      return {
        ...state,
        userInfo: action.payload
      }
    case SIGN_UP:
      return {
        ...state,
        signupStatus: action.payload
      }
    case LOG_OUT:
      return {
        ...state,
        user: {},
        userInfo: {},
        users: [],
        usersBackup: [],
        signupStatus: 0
      }
    default:
      return {
        ...state
      }
  }
}