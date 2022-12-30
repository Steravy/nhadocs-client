import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';


function createData(processamentoDeInformação, comunicação, criaçãoDeConteudos, segurança, resoluçãoDeProblemas) {
    return { processamentoDeInformação, comunicação, criaçãoDeConteudos, segurança, resoluçãoDeProblemas };
}

const rows = [
    createData('Utilizador independente', 'Utilizador independente', 'Utilizador independente', 'Utilizador independente', 'Utilizador independente')

];

export default function DigitalSkillsTableComponent() {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={5}>AUTOAVALIAÇÃO</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">Processamento de informação</TableCell>
                            <TableCell align="center">Comunicação</TableCell>
                            <TableCell align="center">Criação de conteúdos</TableCell>
                            <TableCell align="center">Segurança</TableCell>
                            <TableCell align="center">Resolução de problemas</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, i) => (
                            <TableRow
                                key={i}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align='center' component="th" scope="row">
                                    {row.processamentoDeInformação}
                                </TableCell>
                                <TableCell align="center">{row.comunicação}</TableCell>
                                <TableCell align="center">{row.criaçãoDeConteudos}</TableCell>
                                <TableCell align="center">{row.segurança}</TableCell>
                                <TableCell align="center">{row.resoluçãoDeProblemas}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Box sx={{ mt: '8px' }}  >
                <Typography>
                    Níveis: utilizador básico - utilizador independente - utilizador avançado
                </Typography>
            </Box>
            <Box sx={{ m: '0 0 15px 0' }} >
                <Link href="https://europa.eu/europass/pt/how-describe-my-digital-skills"
                    target="_blank" rel="noopener">
                    Competências digitais - Grelha de auto-avaliação
                </Link>
            </Box>
        </>
    );
}