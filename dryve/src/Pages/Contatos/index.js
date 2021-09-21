import React, { useEffect, useState } from 'react';
import {
    Box,
    Grid,
    TextField,
    Typography,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Stack,
    Pagination,
    Avatar
} from '@mui/material';
import { columns } from '../../Components/Data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link, Redirect } from 'react-router-dom';
import { data } from '../EditClient/Redux/editClienteAction';
import useMakeStyle from './styles';
import { useDispatch, useSelector } from 'react-redux'





export default function Contato() {
    const classes = useMakeStyle()
    const [search, setSearch] = useState('');
    const [searchFilter, setSearchFilter] = useState([]);
    const dispatch = useDispatch()

    const dataT = useSelector((state) => state.editState.data)
    console.log(dataT)

    useEffect(() => {
        setSearchFilter(
            columns.filter((clienteFilter) => {
                return clienteFilter.name.toLowerCase().includes(search.toLowerCase())
            })
        )
    }, [search, columns])

    function edit(cliente) {
        dispatch(data(cliente))

    }


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
                        <Button variant="outlined" startIcon={<FontAwesomeIcon icon={faSlidersH} />} sx={{ margin: 1 }}>Filtrar</Button>
                        <Button variant="outlined" startIcon={<FontAwesomeIcon icon={faPlus} />} sx={{ margin: 1 }}>Adicionar</Button>
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
                                        <TableRow key={cliente.id} onClick={() => edit(cliente)} style={{ cursor: 'pointer' }}>
                                            
                                                <TableCell>
                                                    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                                                        <Avatar className={classes.avatar}>{cliente.name.substr(0, 1) + cliente.sobrenome.substr(0, 1)}</Avatar>
                                                        <Link to="/edit" style={{ textDecoration: 'none', color: '#000' }}>   {`${cliente.name} ${cliente.sobrenome}`}</Link>
                                                    </Stack>
                                                </TableCell>
                                                <TableCell><Link to="/edit" style={{ textDecoration: 'none', color: '#000' }}> {cliente.email}</Link></TableCell>
                                                <TableCell><Link to="/edit" style={{ textDecoration: 'none', color: '#000' }}> {cliente.telefone}</Link></TableCell>
                                           
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Stack spacing={2} sx={{ marginBottom: 10 }}>
                        <Pagination count={30} shape="rounded" variant="outlined" color="primary" />
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

