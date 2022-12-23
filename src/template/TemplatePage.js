import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {Grid} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#000',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
}));

export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={2}>

                <Grid item xs={12} sm={4}>
                    <p style={{ textAlign: 'center' }} >Nice p</p>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Item>xs=4</Item>
                </Grid>

            </Grid>

        </Box>
    );
}
