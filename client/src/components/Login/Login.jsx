import React, { useEffect } from 'react'
import { useState } from 'react'
import { validatorLogin } from '../../functions/errorValidator'
import hidden from '../../img/hidden.png'
import noHidden from '../../img/shown.png'
import style from './Login.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../redux/actions'
import RegModal from './RegisterModal/RegModal'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const {user, signupStatus} = useSelector((state)=> state)
  const [shown, setShown] = useState(false)
  const [data, setData] = useState({})
  const [error, serError] = useState({})
  const [isOpen, setIsOpen] = useState(false)

  // console.log(localStorage)

  const dispatch = useDispatch()

  let navigate = useNavigate()

  useEffect(() => {
    return () => {
      setData({})
    }
  }, [])
  

  useEffect(() => {
    serError(validatorLogin(data))
  }, [data])

  const handleChange = (e) => {
    e.preventDefault()
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
    serError(validatorLogin(data))
  }

  const handleReg = (e) => {
    e.preventDefault()
    setIsOpen(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setData({
      ...data,
      [e.target.name]: e.target.value
    })

    if (!Object.keys(error).length) {
      const access = await dispatch(userLogin(data))
      if (access){
        setData({})
        navigate('/home')
      }
    } else {
      alert(`Missing information`)
    }


  }


  return (
    <div className={style.container}>
      <h1 className={style.texth}>WELCOME</h1>
      <p className={style.text}>Log in with your account</p>
      <form className={style.form} onSubmit={(e) => { handleSubmit(e) }} onChange={(e) => { handleChange(e) }}>
        <input name='email' className={style.input} placeholder='Email address' type="text" />
        <div className={error.email ? style.error : style.success}>
          {error.email ? error.email : <>Done</>}
        </div>
        <div className={style.pass}>
          <input name='password' className={style.input} placeholder='Password' type={shown ? 'text' : 'password'} />
          <img className={style.img} onClick={() => { shown ? setShown(false) : setShown(true) }} src={shown ? noHidden : hidden} alt="visibility" />
        </div>
        <div className={error.password ? style.error : style.success}>
          {error.password ? error.password : <>Done</>}
        </div>
        <button className={style.btn}>SIGN IN</button>
      </form>
      <button className={style.btn} onClick={(e) => handleReg(e)}>Sign Up</button>
      {isOpen ? <RegModal setIsOpen={setIsOpen} /> : <></>}
    </div>
  )
}
