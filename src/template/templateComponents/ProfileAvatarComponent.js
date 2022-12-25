import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import theRock from './theRock.jpg'


export default function ProfileAvatarComponent(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Profile Picture" src={theRock} sx={{height: '200px', width: '200px'}} />
    </Stack>
  );
}

