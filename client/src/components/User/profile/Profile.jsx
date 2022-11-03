import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import UploadImg from '../../reusable/uploadImg';


export default function Profile() {
  const user = useSelector(state => state.userInfo)

  const [input, setInput] = useState({profilePic:user.profilePic})


  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Stack direction='row' sx={{ bgcolor: '#f0f0f0', margin: ' 20px 0', borderRadius: '15px', border: 'solid 2px #A40909' }}>
          <Stack spacing={2}>
            <Avatar alt={user.name} src={user.profilePic} sx={{ width: 300, height: 300 }} />
          {/* <UploadImg input={input} setInput={setInput}/> */}
          </Stack>
          <Stack sx={{ width: '100%', maxWidth: 225 }}>
            <Typography variant="h1" >
              {user.name}
            </Typography>
            <Typography variant="h2" >
              {user.surname}
            </Typography>
            <Typography variant="h6" >
              email: {user.email}
            </Typography>
            <Typography sx={{ color: '#A40909' }} variant="body2" >
              {user.isAdmin ? 'Administrator' : 'Regular user'}
            </Typography>
          </Stack>
          <Stack direction='column' sx={{ alignItems: 'center', justifyContent: 'flex-end' }}>
            <Typography sx={{ color: '#A40909' }} variant="h5" >
              Invitations recived: {user.invitations.length}
            </Typography>
            <Typography sx={{ color: '#A40909' }} variant="h5" >
              Meetings Accepted:{user.meetings.length}
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}
