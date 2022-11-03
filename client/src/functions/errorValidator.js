export function validatorCreate (input){
  let error = {}
  if (!input.name){
    error.name = `A name is reqired`
  }
  if (!input.surname){
    error.surname = 'A surname ir required'
  }
  if(!input.email){
    error.email = 'Email required'
  } else if (!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(input.email)){
    error.email = 'Please, write a valid email address'
  }

  if (!input.password){
    error.password = 'Password required'
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(input.password)){
    error.password = 'Your password must have at least 8 characters which must include one uppercase, one lowercase and one number'
  }

  return error
}

export function validatorLogin(input){
  let error = {}

  if(!input.email){
    error.email = 'Email required'
  } else if (!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(input.email)){
    error.email = 'Please, write a valid email address'
  }

  if (!input.password){
    error.password = 'Password required'
  } else if (input.password.length < 8){
    error.password = 'Your password is not long enough'
  }
  return error
}

export function validatorCreateMeeting (input){
  let error = {}
  if (!input.name) error.name = 'A name is required'
  if (!input.date) error.date = 'A date is required'
  if (!input.beer) error.beer = 'A beer amount is required'
  if (!input.status) error.status = 'A status is required'
  if (!input.temperature) error.temperature = 'A temperature is required'
  if (!input.invitedList.length) error.invitedList = 'A invitedList is required'
  return error
}