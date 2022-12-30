import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(lingua, compreensãoOral, leitura, interacçãoOral, produçãoOral, escrita) {
    return { lingua, compreensãoOral, leitura, interacçãoOral, produçãoOral, escrita };
}

const rows = [
    createData('Português', 'C2', 'C1', 'C1', 'C1', 'C2'),
    createData('Inglês', 'C1', 'C1', 'C1', 'C1', 'C2'),
    
];

export default function LanguageTableComponent() {
    return (
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
                        <TableCell align="center">Produção oral</TableCell>
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
    );
}