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
import { Box } from '@mui/system';


function createData(lingua, compreensãoOral, leitura, interacçãoOral, produçãoOral, escrita) {
    return { lingua, compreensãoOral, leitura, interacçãoOral, produçãoOral, escrita };
}

const rows = [
    createData('Português', 'C2', 'C1', 'C1', 'C1', 'C2'),
    createData('Inglês', 'C1', 'C1', 'C1', 'C1', 'C2'),

];

export default function LanguageTableComponent() {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={1}></TableCell>
                            <TableCell align="center" colSpan={2}>COMPREENDER</TableCell>
                            <TableCell align="center" colSpan={2}>FALAR</TableCell>
                            <TableCell align="center" colSpan={1}>ESCREVER</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">Linguas</TableCell>
                            <TableCell align="center">Compreensão oral</TableCell>
                            <TableCell align="center">Leitura</TableCell>
                            <TableCell align="center">Interacção oral</TableCell>
                            <TableCell align="center">Produção oral</TableCell>
                            <TableCell align="center">Escrita</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, i) => (
                            <TableRow
                                key={i}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align='center' component="th" scope="row">
                                    {row.lingua}
                                </TableCell>
                                <TableCell align="center">{row.compreensãoOral}</TableCell>
                                <TableCell align="center">{row.leitura}</TableCell>
                                <TableCell align="center">{row.interacçãoOral}</TableCell>
                                <TableCell align="center">{row.produçãoOral}</TableCell>
                                <TableCell align="center">{row.escrita}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Box sx={{ mt: '8px' }}  >
                <Typography>
                    Níveis: A1/A2: utilizador básico | B1/B2 utilizador independente | C1/C2: utilizador avançado
                </Typography>
            </Box>
            <Box sx={{ m: '0 0 15px 0' }} >
                <Link href="https://europa.eu/europass/pt/common-european-framework-reference-language-skills" target="_blank" rel="noopener">
                    Quadro Europeu Comum de Referência para as Línguas
                </Link>
            </Box>
        </>
    );
}