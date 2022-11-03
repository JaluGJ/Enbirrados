import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { dateFormat } from '../../../../utils/functions';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { getUserAllData, modifyInvitationStatus } from '../../../../redux/actions';
import { useDispatch } from 'react-redux';


export default function InvitationCard({
  id,
  userImg,
  userName,
  title,
  date,
  description,
  beers,
  status,
  is_deleted }) {


  const [statu, setStatu] = useState({ id: id, status })

  React.useEffect(() => {
    if (new Date(date) < new Date() && status === 'Waiting') {
      setStatu({ ...statu, status: 'Caduced' })
      dispatch(modifyInvitationStatus(statu))
    }
    const user = dispatch(getUserAllData())
  if (!user) alert('Something went wrong meetings')
  }, [statu])

  const dispatch = useDispatch()

  const handleStatus = (e, status) => {
    e.preventDefault()
    setStatu({ ...statu, status: status })
    dispatch(modifyInvitationStatus(statu))
    const user = dispatch(getUserAllData())
    if (!user) alert('Something went wrong meetings')
  }

  return (
    <>
      {is_deleted ? <></>
        :
        <Box sx={{ minWidth: 300, margin: 2 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {userName}! Your were invited to a meeting <Avatar alt={userName} src={userImg} />
              </Typography>
              <Typography variant="h5" component="div">
                {title}      </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {dateFormat(new Date(date), 'dd/mm/yyyy hh hs')}
              </Typography>
              <Typography variant="body2">
                {description}
              </Typography>
              {status === 'Rejected' ?
                <>
                  <Typography sx={{ mb: 1.5, marginLeft: 0.8 }} backgroundColor="rgba(233, 154, 154,0.5)" >
                    It's a shame you're not comming <br />
                    We will miss you
                  </Typography>

                </>
                :
                status === 'Caduced' ?
                  <>
                    <Typography sx={{ mb: 1.5, marginLeft: 0.8 }} backgroundColor="rgba(233, 154, 154,0.5)" >
                      Too late buddy. <br />
                      You didn't accepted on time
                    </Typography>
                  </>
                  :
                  status === "Attended" ?
                    <Typography sx={{ mb: 1.5, marginLeft: 0.8 }} backgroundColor="rgba(160, 233, 154,0.5)" >
                      We hope that you have spent a <br />
                      wonderfull meeting!
                    </Typography>
                    : new Date(date) < new Date() ?
                    <>
                    <Typography sx={{ mb: 1.5, marginLeft: 0.8 }} backgroundColor="rgba(112, 147, 234,0.5)" >
                      Please! Go and check the attendance
                      option, to be sure who attended
                    </Typography>
                  </> 
                  :
                    status === 'Accepted' ?
                      <>
                        <Typography sx={{ mb: 1.5, marginLeft: 0.8 }} backgroundColor="rgba(160, 233, 154,0.5)" >
                          We will be waiting you <br />
                          Please enjoy!
                        </Typography>
                      </>
                      :
                      <>
                        <Typography variant="body1" color='#C61C1C'>
                          Are you going to attend?
                        </Typography>
                        <Stack direction="row" spacing={2}>
                          <Button onClick={(e) => { handleStatus(e, 'Accepted') }} variant="contained" color="success">
                            Accept
                          </Button>
                          <Button onClick={(e) => { handleStatus(e, 'Rejected') }} variant="outlined" color="error">
                            Reject
                          </Button>
                        </Stack>
                      </>
              }
            </CardContent>
            {status === 'Canceled' && new Date(date) < new Date() ?
              <Typography sx={{ mb: 1.5, marginLeft: 0.8 }} color="red" >
                Too late my friend. The meeting is not avaible anymore
              </Typography>
              :
              <></>
            }
          </Card>
        </Box>
      }
    </>
  );
}

              // <HalfRating value={Math.ceil(beers / 6)} size={30} />
              // <Typography variant="body2">
              //   {Math.ceil(beers / 6)} packs, {beers} beers
              // </Typography>