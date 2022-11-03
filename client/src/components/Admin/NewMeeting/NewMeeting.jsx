import React from 'react'
import { useState, useEffect } from 'react'
import style from './NewMeeting.module.css'
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs';
import { allUsers, newMeetingCreate } from '../../../redux/actions.js'
import { validatorCreateMeeting } from "../../../functions/errorValidator.js";

import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { beerCalc, dateFormat } from '../../../utils/functions';
import ControlledOpenSelect from '../../reusable/SelectMui';
import MultipleControlledOpenSelect from '../../reusable/MultipleSelect'
import HalfRating from '../../reusable/rating.jsx'
import Button from '@mui/material/Button';

export default function NewMeeting() {

  const users = useSelector(state => state.users)
  const dispatch = useDispatch()
  const initialState = {
    name: '',
    detail: '',
    date: dayjs(new Date()),
    beer: 0,
    temperature: 0,
    status: "",
    invitedList: []
  }

  const [userList, setUserList] = useState([])
  const [errors, setErrors] = useState({})
  const [input, setInput] = useState(initialState)

  let today = new Date()

  useEffect(() => {
    dispatch(allUsers())
  }, [])


  useEffect(() => {
    const calc = async () => {
      const value = await beerCalc(dateFormat(input.date.$d, 'yyyy-mm-dd hh hs').split(" ")[0], dateFormat(input.date.$d, 'yyyy-mm-dd hh hs').split(" ")[1], userList.length, 'Argentina')
      return value
    }
    calc().then((el) => setInput({
      ...input,
      beer: el.beer,
      temperature: el.temperature,
      invitedList: userList
    }))
  }, [input.date, userList])

  useEffect(() => {
    setErrors(validatorCreateMeeting(input))
  }, [input])





  // console.log(Date(input.date.$d))


  const handleSubmit = (e) => {
    e.preventDefault()
    if (!Object.keys(errors).length) {
      const result = dispatch(newMeetingCreate(input))
      if (result) {
        setInput(initialState)
        setUserList([])
        alert('The meeting was created Succesfully')
      }
    }else {
      alert('Not enough information')
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      invitedList: userList
    })
  }


  return (
    <div>
      <form className={style.form} onChange={(e) => handleChange(e)} onSubmit={(e) => handleSubmit(e)}>
        <Grid container spacing={3}>
          <Grid item xs={3} sm={3} md={3} className={style.name}>
            <Box sx={{
              display: "flex",
              alignItems: "center",
              minWidth: 220
            }}>
              <TextField
                fullWidth
                name="name"
                variant="outlined"
                label="Meetup name"
                value={input.name}
                onChange={(e) => handleChange(e)}
                required
              />

            </Box>
          </Grid>

          <Grid item xs={4} className={style.date}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label='Select a date to the meetup'
                renderInput={(props) => <TextField {...props} />}
                value={input.date}
                onChange={e => setInput({ ...input, date: e })}
                maxDate={today.setDate(today.getDate() + 14)}
                minDate={today.setDate(today.getDate() - 14)}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={5} className={style.status}>
            <ControlledOpenSelect
              inputValue={input.status}
              input={input}
              setInput={setInput}
              name='status'
              label='State of the meeting'
              values={['Done', 'Canceled', 'On Going']}
            />
          </Grid>
          <Grid item xs={3} className={style.detail}>
            <TextField
              fullWidth
              name="detail"
              multiline
              variant="outlined"
              rows={4}
              label="What are we going to celebrate?"
              value={input.detail}
              required
            />
          </Grid>
          <Grid item xs={4} className={style.invitedList}>
            <MultipleControlledOpenSelect
              inputValue={input.invitedList}
              input={userList}
              setInput={setUserList}
              label='guests'
              values={users}
            />
          </Grid>
          <Grid item xs={4} className={style.beerAndTemperature}>
            <h3>Packs needed</h3>
            <HalfRating value={Math.ceil(input.beer / 6)} size={50}/>

            <h2>{input.beer} beers needed for {input.temperature} °C</h2>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" spacing={2}>
              <Button onClick={(e) => handleSubmit(e)} variant="contained" endIcon={<SendIcon />}>
                Create and Send invitations
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </div >
  )
}
