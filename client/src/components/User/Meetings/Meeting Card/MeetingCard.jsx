import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { dateFormat } from '../../../../utils/functions';
import HalfRating from '../../../reusable/rating';
import ControlledOpenSelect from '../../../reusable/SelectMui';
import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { modifyMeetingStatus } from '../../../../redux/actions';
import { useDispatch } from 'react-redux';



export default function MeetingCard({
  id,
  title,
  date,
  description,
  users,
  beers,
  adminId,
  adminName,
  adminimg,
  status,
  isAdmin, }) {

    
    
    const [statu, setStatu] = useState({meetingId:id, status })

    React.useEffect(() => {
      if (new Date(date) < new Date() && status == 'On Going'){
        setStatu({...statu, status:'Done'})
        dispatch(modifyMeetingStatus(statu))
      }
    }, [])
    
  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(modifyMeetingStatus(statu))
  }

  return (
    <Box sx={{ minWidth: 300, margin: 2 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Organized by {adminName} <Avatar alt={adminName} src={adminimg} />
          </Typography>
          <Typography variant="h5" component="div">
            {title}      </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {dateFormat(new Date(date), 'dd/mm/yyyy hh hs')}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
          <HalfRating value={Math.ceil(beers / 6)} size={30} />
          <Typography variant="body2">
            {Math.ceil(beers / 6)} packs, {beers} beers
          </Typography>
          <AvatarGroup total={users.length}>{
            users.map(user => {
              return (<Avatar alt={user.name} src={user.profilePic} />)
            })
          }
          </AvatarGroup>
        </CardContent>
        {isAdmin ?
          <Stack direction="row" alignItems="center" spacing={2}>
            <ControlledOpenSelect
              inputValue={statu.status}
              input={statu}
              setInput={setStatu}
              name='status'
              label='State of the meeting'
              values={['Done', 'Canceled', 'On Going']} />
            <IconButton onClick={(e) => handleClick(e)} disabled={statu.status === status ? true : false} color="primary" aria-label="upload picture" component="label">
              <input hidden accept="image/*" type="file" />
              {statu.status === status ? <CheckCircleOutlineIcon /> : <CheckCircleIcon />}
            </IconButton>
          </Stack>
          :
          <Typography color={status === 'On Going' ? 'blue' : status === 'Done' ? 'green' : 'red'} variant="h4" component="div">
            {status}      </Typography>
        }
        {status === 'Canceled' || new Date(date) < new Date() ?
          <Typography sx={{ mb: 1.5, marginLeft:0.8}} color="red" >
            Too late my friend. The meeting is not avaible anymore
          </Typography>
          :
          <></>
        }
      </Card>
    </Box>
  );
}
