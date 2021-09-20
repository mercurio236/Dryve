import React, { useEffect, useState } from 'react';
import {
    Box, Grid, TextField, Typography, Button, Table, TableBody,
    TableCell, TableContainer, TableHead,
    TableRow, Paper, Stack, Pagination, Avatar
} from '@mui/material';
import useMakeStyle from './styles';



const columns = [
    { id: 1, name: 'Pedro ', sobrenome: 'Gandra', email: 'pedrogandra@gmail.com', telefone: '(61) 99610-4666' },
    { id: 2, name: 'Renato Silva ', sobrenome: 'Medeiros', email: 're.medeiros@uol.com.br', telefone: '(16) 99873-2219' },
    { id: 3, name: 'Eduardo Rocha ', sobrenome: 'Oliveira', email: 'eduardorocha@hotmail.com', telefone: '(16) 99627-0092' },
    { id: 4, name: 'Paulo ', sobrenome: 'Mendes', email: 'paulo@mendesconsultoria.com.br', telefone: '(16) 99887-0126' },
    { id: 5, name: 'Tatiane ', sobrenome: 'Alves', email: 'tati.alves@globo.com', telefone: '(16) 99876-4251' },
    { id: 6, name: 'Mario Augusto dos ', sobrenome: 'Santos', email: 'marioaugusto.santos@gmail.com', telefone: '(16) 99654-0045' },
    { id: 7, name: 'Alice Rocha ', sobrenome: 'Silva', email: 'alicerocha@outlook.com', telefone: '(16) 99678-6711' },
    { id: 8, name: 'Thiago ', sobrenome: 'Costa', email: 'thicosta@uol.com.br', telefone: '(16) 99726-9811' },
    { id: 9, name: 'Thiago ', sobrenome: 'Costa', email: 'thicosta@uol.com.br', telefone: '(16) 99726-9811' },
];
export default function Contato() {
    const classes = useMakeStyle()
    const [search, setSearch] = useState('');
    const [searchFilter, setSearchFilter] = useState([]);


    useEffect(() => {
        setSearchFilter(
            columns.filter((clienteFilter) => {
                return clienteFilter.name.toLowerCase().includes(search.toLowerCase())
            })
        )
    }, [search, columns])



    return (
        <Box sx={{ display: 'flex' }}>
            <Grid container spacing={2} className={classes.container}>
                <Grid item xs={12} className={classes.search}>
                    <Typography variant="h5" className={classes.titleSearch}>Contato</Typography>
                    <TextField
                        className={classes.input}
                        label="Buscar"
                        variant='outlined'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}

                    />
                    <div className={classes.btnArea}>
                        <Button variant="outlined" sx={{ margin: 1 }}>Filtrar</Button>
                        <Button variant="outlined" sx={{ margin: 1 }}>Adicionar</Button>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <TableContainer component={Paper} sx={{ width: '95%', marginBottom: 4 }}>
                        <Table sx={{ minWidth: 650 }} arial-label="simple table">
                            <TableHead>
                                <TableCell>Nome do Cliente</TableCell>
                                <TableCell>E-mail</TableCell>
                                <TableCell>Telefone</TableCell>
                            </TableHead>
                            <TableBody>
                                {
                                    searchFilter.map((cliente) => (
                                        <TableRow key={cliente.id} >
                                            <TableCell>
                                                <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                                                    <Avatar className={classes.avatar}>{cliente.name.substr(0, 1) + cliente.sobrenome.substr(0, 1)}</Avatar>
                                                    {`${cliente.name} ${cliente.sobrenome}`}
                                                </Stack>
                                            </TableCell>
                                            <TableCell>{cliente.email}</TableCell>
                                            <TableCell>{cliente.telefone}</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Stack spacing={2} sx={{ marginBottom: 10 }}>
                        <Pagination count={30} shape="rounded" variant="outlined" color="primary"/>
                    </Stack>
                </Grid>


            </Grid>
        </Box>
    )
}