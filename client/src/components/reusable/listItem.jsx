import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';


export default function FolderList({ inputValue }) {
  return (
    <List sx={{ width: '100%', maxWidth: 240, bgcolor: '#f5f5f5' }}>
      {inputValue?.map((el) => {
        return (
          <ListItem>
            <ListItemAvatar>
              <Avatar>
              <img height='50px' src={el.profilePic} alt={el.name} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={el.name} secondary={el.surname}/>
          </ListItem>
        )
      })}
    </List>
  );
}