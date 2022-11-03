import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function ControlledOpenSelect({inputValue, input, setInput, values, label, name}) {
  const [open, setOpen] = React.useState(false);
  

  const handleChange = (event) => {
    // console.log(event.target.value)
    setInput({...input, [event.target.name]:event.target.value});
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
          name={name}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={inputValue}
          label={label}
          onChange={handleChange}
        >
          {values?.map(option => {
            return (<MenuItem value={option} key={option}>{option}</MenuItem>)
          })}
        </Select>
      </FormControl>
    </div>
  );
}