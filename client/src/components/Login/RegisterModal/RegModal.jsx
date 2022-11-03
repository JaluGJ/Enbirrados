import React from 'react'
import { useState } from 'react'
import style from './RegModal.module.css'
import hidden from '../../../img/hidden.png'
import notHidden from '../../../img/shown.png'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { validatorCreate } from '../../../functions/errorValidator'
import { newUserSignUp } from '../../../redux/actions'

export default function RegModal({ setIsOpen }) {

  const status = useSelector((state) => state.signupStatus)

  const [shown, setShown] = useState(false)
  const [input, setInput] = useState({})
  const [error, setError] = useState({})

  let navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    setError(validatorCreate(input))
  }, [input])

  useEffect(() => {
    setError(validatorCreate(input))
  }, [dispatch])
  
  const handleChange = (e) => {
    e.preventDefault()
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setError(validatorCreate(input))
  } 
  const handleSubmit = (e) => {
    e.preventDefault()
    if (Object.keys(error).length){
      return alert('There is missing info to sign up')
    }
    const access = dispatch(newUserSignUp(input))
    if(access){
      navigate('/home')
      setIsOpen(false)
    }
    alert('something went wrong')
  } 

  const handleClick = (e) => {
    e.preventDefault()
    setIsOpen(false)
  }
  return (
    <div className={style.container}>
      <div className={style.register}>
        <button className={style.button} onClick={e => handleClick(e)}> Exit </button>

        <h2>Sign Up</h2>
        <form className={style.form} onSubmit={(e)=>{handleSubmit(e)}} onChange={(e)=>{handleChange(e)}}>
          <div className={style.name_surname}>
            <input className={error.name&&style.error||style.ok} type="text" name='name' placeholder='Name' />
            <input className={error.surname&&style.error||style.ok} type="text" name='surname' placeholder='Surname' />
          </div>
          <div className={style.form_input}>
            <input className={[style.formInput, error.email&&style.error||style.ok].join(' ')} name='email' type="text" placeholder='Email' />
            <span className={style.di}>{error.email ? <>❌</> : <>✅</> }</span>
          </div>
          <div className={style.form_input}>
            <input className={[style.formInput, error.password&&style.error||style.ok].join(' ')} name='password' type={shown ? 'text' : 'password'} placeholder='Password' />
            <img onClick={(e)=>{e.preventDefault(); setShown(shown ? false : true)}} src={shown ? notHidden : hidden} alt="hidden" />
          </div>
          <button>Sign up</button>
        </form>
      </div>
    </div>
  )
}
