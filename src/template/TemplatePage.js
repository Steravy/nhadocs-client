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
import LanguageTableComponent from './templateComponents/LanguageTableComponent';
import DigitalSkillsTableComponent from './templateComponents/DigitalSkillsTableComponent';


const iconList = [<LocationOnIcon />, <PhoneIphoneIcon />, <PhoneEnabledIcon />, <EmailIcon />, <PersonIcon />]
const Location = "Palmarejo, Praia, Santiago, 7600"



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
        <Box maxWidth="lg" sx={{ flexGrow: 1, p: '40px 20px', justifyContent: 'center', alignItems: 'center', mx: 'auto' }} >
            <Divider textAlign="left" sx={{ mb: '20px' }}  >INFORMAÇÃO PESSOAL</Divider>


            {/* <Divider textAlign="left" > Educacao e Formacao </Divider>  */}

            <Grid container spacing={2} sx={{ p: '10px  30px' }} direction="row" justifyContent="center" alignItems="center">

                <Grid container item xs={12} md={3} direction="row" justifyContent="center" alignItems="center">
                    <ProfileAvatarComponent />
                </Grid>

                <Grid item xs={12} md={9}>
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

            {/* <Divider /> */}

            <Grid container spacing={2} sx={{ p: '40px 30px 30px 30px' }}>
                <Grid container item xs={12} md={3} direction="row" justifyContent="center" alignItems="center">
                    <Stack spacing={2}>

                        <Typography>{'Cargo a que se candidata'}</Typography>

                    </Stack>
                </Grid>

                <Grid item xs={12} md={9} >

                    <Stack spacing={0}>

                        <Typography>{'JavaScript FullStack Developer'}</Typography>

                    </Stack>

                </Grid>
            </Grid>


            <Divider textAlign="left" sx={{ m: '20px 0' }}> EXPERIÊNCIA PROFISSIONAL </Divider>


            <Grid container spacing={2} sx={{ p: '6px  30px' }}>
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

            <Grid container spacing={2} sx={{ p: '6px  30px' }}>
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

            <Grid container spacing={2} sx={{ p: '6px  30px' }}>
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


            <Divider textAlign="left" sx={{ m: '20px 0' }}> EDUCAÇÃO E FORMAÇÃO </Divider>

            <Grid container spacing={2} sx={{ p: '6px  30px' }}>
                <Grid item xs={12} md={3} >
                    <Stack spacing={2}>

                        <Typography>{'25/10/2020'} a {'25/10/2022'}</Typography>

                    </Stack>
                </Grid>

                <Grid item xs={12} md={9} >
                    <Stack spacing={0}>

                        <Typography>{'Ensino Secundario'}</Typography>
                        <Typography> {'Escola Secundaria do Tarrafal'} </Typography>
                        <Typography> {'Ponta D`Atum - Cidade do Tarrafal'} </Typography>

                    </Stack>
                    <Divider />

                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ p: '6px  30px' }}>
                <Grid item xs={12} md={3} >
                    <Stack spacing={2}>

                        <Typography>{'25/10/2020'} a {'25/10/2022'}</Typography>

                    </Stack>
                </Grid>

                <Grid item xs={12} md={9} >
                    <Stack spacing={0}>

                        <Typography>{'Ensino Secundario'}</Typography>
                        <Typography> {'Escola Secundaria do Tarrafal'} </Typography>
                        <Typography> {'Ponta D`Atum - Cidade do Tarrafal'} </Typography>

                    </Stack>
                    <Divider />

                </Grid>
            </Grid>


            <Divider textAlign="left" sx={{ m: '20px 0' }}> COMPETÊNCIAS PESSOAIS </Divider>

            <Grid container spacing={2} sx={{ p: '6px 30px 30px 30px' }}>
                <Grid container item xs={12} md={3} direction="row" justifyContent="center" alignItems="center">
                    <Stack spacing={2}>

                        <Typography>{'Lingua materna'}</Typography>

                    </Stack>
                </Grid>

                <Grid item xs={12} md={9} >

                    <Stack spacing={0}>

                        <Typography>{'Crioulo'}</Typography>

                    </Stack>
                    <Divider />

                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ p: '6px 30px' }}>
                <Grid container item xs={12} md={3} direction="row" justifyContent="center" >
                    <Stack spacing={2}>

                        <Typography>{'Outras Linguas'}</Typography>

                    </Stack>
                </Grid>

                <Grid item xs={12} md={9} >

                    <Stack spacing={0}>

                        <LanguageTableComponent />

                    </Stack>

                </Grid>
            </Grid>

            {/* Competencias de comunicacao section */}

            <Grid container spacing={2} sx={{ p: '6px 30px 30px 30px' }}>
                <Grid container item xs={12} md={3} direction="row" justifyContent="center">
                    <Stack spacing={2}>

                        <Typography>{'Competências de comunicação'}</Typography>

                    </Stack>
                </Grid>

                <Grid item xs={12} md={9} >

                    <Stack spacing={0}>

                        <Typography>{`Excelente capacidade de comunicação adquirida através da experiência profissional
                        enquanto responsável de venda, formações extracurriculares e através de unidades
                        curriculares lecionadas a fim de estabelecer contato com o utente nos diferentes
                        contextos e nas diferentes formas de comunicação.`}
                        </Typography>

                    </Stack>
                    <Divider />

                </Grid>
            </Grid>


            {/* Competencias de Organizacao section */}

            <Grid container spacing={2} sx={{ p: '6px 30px 30px 30px' }}>
                <Grid container item xs={12} md={3} direction="row" justifyContent="center">
                    <Stack spacing={2}>

                        <Typography>{'Competências de Organização'}</Typography>

                    </Stack>
                </Grid>

                <Grid item xs={12} md={9} >

                    <Stack spacing={0}>

                        <Typography>{`Excelente capacidade de comunicação adquirida através da experiência profissional
                        enquanto responsável de venda, formações extracurriculares e através de unidades
                        curriculares lecionadas a fim de estabelecer contato com o utente nos diferentes
                        contextos e nas diferentes formas de comunicação.`}
                        </Typography>

                    </Stack>
                    <Divider />

                </Grid>
            </Grid>

            {/* Competencias relacionadas com o trabalho section */}

            <Grid container spacing={2} sx={{ p: '6px 30px 30px 30px' }}>
                <Grid container item xs={12} md={3} direction="row" justifyContent="center">
                    <Stack spacing={2}>

                        <Typography>{'Competências relacionadas com o trabalho'}</Typography>

                    </Stack>
                </Grid>

                <Grid item xs={12} md={9} >
                    <Stack spacing={0}>

                        <Typography>{`Excelente capacidade de comunicação adquirida através da experiência profissional
                            enquanto responsável de venda, formações extracurriculares e através de unidades
                            curriculares lecionadas a fim de estabelecer contato com o utente nos diferentes
                            contextos e nas diferentes formas de comunicação.`}
                        </Typography>

                    </Stack>
                    <Divider />

                </Grid>
            </Grid>

            {/* Competencias digitais */}

            <Grid container spacing={2} sx={{ p: '6px 30px' }}>
                <Grid container item xs={12} md={3} direction="row" justifyContent="center" >
                    <Stack spacing={2}>

                        <Typography>{'Competências digitais'}</Typography>

                    </Stack>
                </Grid>

                <Grid item xs={12} md={9} >

                    <Stack spacing={0}>

                        <DigitalSkillsTableComponent />

                    </Stack>

                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ p: '6px 30px 6px 30px' }}>
                <Grid container item xs={12} md={3} direction="row" justifyContent="center">
                    <Stack spacing={2}>

                        <Typography>{'Outras Competências'}</Typography>

                    </Stack>
                </Grid>

                <Grid item xs={12} md={9} >

                    <Stack spacing={0}>

                        <Typography>{'Bloging'}</Typography>
                        <Typography>{'Write Poem'}</Typography>
                        <Typography>{'Play Guitar'}</Typography>

                    </Stack>
                    <Divider />

                </Grid>
            </Grid>

            <Divider textAlign="left" sx={{ m: '20px 0' }}> INFORMAÇÃO ADICIONAL </Divider>

            {/* Seminarios */}

            <Grid container spacing={2} sx={{ p: '6px 30px 30px 30px' }}>
                <Grid container item xs={12} md={3} direction="row" justifyContent="center">
                    <Stack spacing={2}>

                        <Typography>{'Seminários'}</Typography>

                    </Stack>
                </Grid>

                <Grid item xs={12} md={9} >

                    <Stack spacing={0}>

                        <Typography>{'Bloging'}</Typography>
                        <Typography>{'Write Poem'}</Typography>
                        <Typography>{'Play Guitar'}</Typography>

                    </Stack>
                    <Divider />

                </Grid>
            </Grid>

            {/* Conferencias */}

            <Grid container spacing={2} sx={{ p: '6px 30px 30px 30px' }}>
                <Grid container item xs={12} md={3} direction="row" justifyContent="center">
                    <Stack spacing={2}>

                        <Typography>{'Conferências'}</Typography>

                    </Stack>
                </Grid>

                <Grid item xs={12} md={9} >

                    <Stack spacing={0}>

                        <Typography>{'Bloging'}</Typography>
                        <Typography>{'Write Poem'}</Typography>
                        <Typography>{'Play Guitar'}</Typography>

                    </Stack>
                    <Divider />

                </Grid>
            </Grid>

            {/* Certificações */}

            <Grid container spacing={2} sx={{ p: '6px 30px 30px 30px' }}>
                <Grid container item xs={12} md={3} direction="row" justifyContent="center">
                    <Stack spacing={2}>

                        <Typography>{'Certificações'}</Typography>

                    </Stack>
                </Grid>

                <Grid item xs={12} md={9} >

                    <Stack spacing={0}>

                        <Typography>{'Bloging'}</Typography>
                        <Typography>{'Write Poem'}</Typography>
                        <Typography>{'Play Guitar'}</Typography>

                    </Stack>
                    <Divider />

                </Grid>
            </Grid>

            <Divider textAlign="left" sx={{ m: '20px 0' }}> ANEXOS </Divider>
            
            {/* Anexos */}

            <Grid container spacing={2} sx={{ p: '6px 30px 30px 30px' }} direction="row" justifyContent="center" alignItems='center'>

                <Grid container item xs={12} md={9} direction="row" justifyContent="center" alignItems='center' >

                    <Stack spacing={0}>

                        <Typography>{'Cópia dos diplomas e certificados mencionados'}</Typography>
                        <Typography>{'Cópia do cartão nacional de identificação'}</Typography>
                        <Typography>{'Cópia do cartão nacional de identificação'}</Typography>
                        <p>Cópia do cartão nacional de identificação</p>


                    </Stack>

                </Grid>
            </Grid>


        </Box>
    );
}
