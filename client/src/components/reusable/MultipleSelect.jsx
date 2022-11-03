import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import FolderList from './listItem';

export default function MultipleControlledOpenSelect({inputValue, input, setInput, values, label,}) { //por unput paso el arreglo
  const [open, setOpen] = React.useState(false);
  

  const handleChange = (event) => {
    // console.log(event.target.value)
    let finder = input.find(user => user.id === event.target.value.id)
    if (finder) return
    setInput([...input, event.target.value]);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 220 }}>
        <InputLabel id="demo-controlled-open-select-label">{label}</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          name={label}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          // value={inputValue}
          label={label}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {values?.map(option => {
            return (<MenuItem value={option} key={option.name}>{option.name} {option.surname}</MenuItem>)
          })}
        </Select>
      </FormControl>
      <FolderList inputValue={input} />
          
    </div>
  );
}