import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAllData } from '../../../redux/actions'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MeetingCard from './Meeting Card/MeetingCard';

export default function Meetings() {
  const { userInfo } = useSelector(state => state)

  const dispatch = useDispatch()

  useEffect(() => {
    const user = dispatch(getUserAllData())
    if (!user) alert('Something went wrong meetings')
  }, [])

  return (
    <Box sx={{ flexGrow: 20 }}>
      <Grid container spacing={1}>
        {userInfo.meetings?.map(meet => {
          return (
            <Grid item xs={4}>
              <MeetingCard
              isAdmin={userInfo.isAdmin}
              id={meet.id}
              title={meet.name}
              date={meet.date}
              description={meet.detail}
              users={meet.users}
              beers={meet.beer}
              adminId={meet.hostId}
              adminName={meet.hostName}
              adminimg={meet.hostPic}
              status={meet.status}
              />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
