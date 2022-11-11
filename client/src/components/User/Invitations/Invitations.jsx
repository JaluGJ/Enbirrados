import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAllData } from '../../../redux/actions'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InvitationCard from './InvitationCard/InvitationCard';

export default function Invitations() {
  const { userInfo } = useSelector(state => state)

  const dispatch = useDispatch()

  useEffect(() => {
    const user = dispatch(getUserAllData())
    if (!user) alert('Something went wrong meetings')
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {userInfo.invitations?.map(inv => {
          return (
            <Grid key={inv.id} item xs={2.8}>
              <InvitationCard 
              id={inv.id}
              userImg={userInfo.profilePic}
              userName={userInfo.name}
              title={inv.name}
              date={inv.date}
              description={inv.info}
              is_deleted={inv.is_deleted}
              beers={inv.beer}
              status={inv.status}
              key={inv.id}
              />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
