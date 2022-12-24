import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import { Grid, Stack, Typography, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ProfileAvatarComponent from './templateComponents/ProfileAvatarComponent';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';



const Location = "Palmarejo, Praia, Santiago, 7600"
// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: '#000',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.primary,
// }));

export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1, p: ' 80px 60px' }}>
            <Divider textAlign="left" >Informacao pessoal</Divider>

            <Grid container spacing={2} sx={{ p: ' 30px 60px' }} >

                <Grid item xs={12} md={3} >
                    <ProfileAvatarComponent />
                </Grid>

                <Grid item xs={12} md={9} >
                    <Stack spacing={1}>
                        <Typography>Stephan Salvatory</Typography>
                        <Typography>Cabo Verde, Santiago-Praia, Palmarejo, 7600</Typography>
                        <Typography>+238 9352569</Typography>
                        <Typography>+238 9567880</Typography>
                        <Typography>steph.74lw@gmail.com</Typography>
                        <Typography>Sexo Masculino | Data de nascimento 24 de Outubro de 1996 | Nacionalidade Cabo-
                            verdiana</Typography>
                    </Stack>
                </Grid>

            </Grid>

            <Divider textAlign="left" > Educacao e Formacao </Divider>

            <Grid container spacing={2} sx={{ p: ' 30px 60px' }} >

                <Grid item xs={12} md={3} >
                    <ProfileAvatarComponent />
                </Grid>

                <Grid item xs={12} md={9} >
                    <List spacing={2}>

                        <ListItem sx={{p: 0}} >
                            <Typography>Dwayne Jhonson The Rock</Typography>
                        </ListItem>

                        <ListItem sx={{p: 0}} >
                            <ListItemIcon>
                                <LocationOnIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary= {Location}
                            />
                        </ListItem >

                        <ListItem sx={{p: 0}} >
                            <ListItemIcon>
                                <PhoneIphoneIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary= '+238 9352569'
                            />
                        </ListItem>

                        <ListItem sx={{p: 0}} >
                            <ListItemIcon>
                                <PhoneEnabledIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary= '+238 9352569'
                            />
                        </ListItem>

                        <ListItem sx={{p: 0}} >
                            <ListItemIcon>
                                <EmailIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary= 'therock@gmail.com'
                            />
                        </ListItem>

                    </List>
                </Grid>

            </Grid>
        </Box>
    );
}
