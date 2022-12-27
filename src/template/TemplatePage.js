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
import PersonIcon from '@mui/icons-material/Person';
import { Key } from '@mui/icons-material';


const iconList = [<LocationOnIcon />, <PhoneIphoneIcon />, <PhoneEnabledIcon />, <EmailIcon />, <PersonIcon />]
const Location = "Palmarejo, Praia, Santiago, 7600"
// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: '#000',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.primary,
// }));


const Dto = [
    {
        name: 'The Rock',
        cellPhone: 9352569,
        phone: 9567880,
        email: 'theRock@gmail.com',
        generalInfo: 'Sexo Masculino | Data de nascimento 24 de Outubro de 1996 | Nacionalidade Havaian',
        location: 'Palmarejo, Praia, Santiago, 7600'
    },

    //     {
    //         name: 'Matheus Vitoria',
    //         cellPhone: 9352569,
    //         phone: 9567880,
    //         email: 'tiago@gmail.com',
    //         generalInfo: 'Sexo Masculino | Data de nascimento 30 de Maio de 2006 | Nacionalidade Capeverdean',
    //         location: 'Palmarejo, Praia, Santiago, 7600'
    //     }
]

export default function TemplatePage() {
    return (
        <Box sx={{ flexGrow: 1, p: ' 80px 60px' }}>
            <Divider textAlign="left">Informacao pessoal</Divider>


            {/* <Divider textAlign="left" > Educacao e Formacao </Divider>  */}

            <Grid container spacing={2} sx={{ p: ' 30px 60px' }} >

                <Grid item xs={12} md={3} >
                    <ProfileAvatarComponent />
                </Grid>

                <Grid item xs={12} md={9} >
                    <List spacing={2}>
                        {

                            Dto.map((person, i) => {
                                return <>
                                    <ListItem sx={{ p: 0 }} >
                                        <Typography>{person.name}</Typography>
                                    </ListItem>


                                    <ListItem sx={{ p: 0 }} >
                                        <ListItemIcon>
                                            <LocationOnIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={person.location}
                                        />
                                    </ListItem >

                                    <ListItem sx={{ p: 0 }} >
                                        <ListItemIcon>
                                            <PhoneIphoneIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={person.phone}
                                        />
                                    </ListItem>

                                    <ListItem sx={{ p: 0 }} >
                                        <ListItemIcon>
                                            <PhoneEnabledIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={person.cellPhone}
                                        />
                                    </ListItem>

                                    <ListItem sx={{ p: 0 }} >
                                        <ListItemIcon>
                                            <EmailIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={person.email}
                                        />
                                    </ListItem>

                                    <ListItem sx={{ p: 0 }} >
                                        <ListItemIcon>
                                            <PersonIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={person.generalInfo}
                                        />
                                    </ListItem>

                                </>
                            })
                        }

                    </List>
                </Grid>

            </Grid>

            <Divider textAlign="left" > Educacao e Formacao </Divider>

            <Grid container spacing={2} sx={{ p: ' 30px 60px' }}>
                <Grid item xs={12} md={3} >
                    <Stack spacing={2}>

                        <Typography>{'25/10/2020'} a {'25/10/2022'}</Typography>

                    </Stack>
                </Grid>

                <Grid item xs={12} md={9} >
                    <Stack spacing={0}>

                        <Typography>{'nhaDocs.com'}</Typography>
                        <Typography> {'Junior FullStack Developer'} </Typography>
                        <Typography> {'This'} </Typography>

                    </Stack>
                    <Divider />

                </Grid>
            </Grid>

        </Box>
    );
}
