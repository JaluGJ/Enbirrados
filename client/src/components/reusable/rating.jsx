import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import SportsBarIcon from '@mui/icons-material/SportsBar'

export default function HalfRating({ value, size }) {
  return (
    <Stack spacing={1}>
      <Rating
        max={6}
        name="beer"
        value={value}
        precision={0.25}
        icon={<SportsBarIcon fontSize="inherit" sx={{ fontSize: size }} />}
        emptyIcon={
          <SportsBarIcon
            style={{ opacity: 0.55 }}
            fontSize="inherit"
            sx={{ fontSize: size }}
          />
        }
        readOnly />
    </Stack>
  );
}