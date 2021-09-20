import React from 'react';
import {
    Box, Grid, TextField, Typography, Button, Table, TableBody,
    TableCell, TableContainer, TableHead,
    TableRow, Paper
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import useMakeStyle from './styles';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
            }`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
export default function Contato() {
    const classes = useMakeStyle()





    return (
        <Box sx={{ display: 'flex' }}>
            <Grid container spacing={2} className={classes.container}>
                <Grid item xs={12} className={classes.search}>
                    <Typography variant="h5" className={classes.titleSearch}>Contato</Typography>
                    <TextField
                        className={classes.input}
                        label="Buscar"
                        variant='outlined'
                    />
                    <div className={classes.btnArea}>
                        <Button variant="outlined" sx={{ margin: 1 }}>Filtrar</Button>
                        <Button variant="outlined" sx={{ margin: 1 }}>Adicionar</Button>
                    </div>
                </Grid>
                <Grid item xs={11}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} arial-label="simple table">
                            <TableHead>
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell align="right">Calories</TableCell>
                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            </TableHead>
                            <TableBody>
                                {
                                    rows.map((first) => (
                                        <TableRow key={first.id}>
                                            <TableCell>{first.firstName}</TableCell>
                                            <TableCell>{first.lastName}</TableCell>
                                            <TableCell>{first.age}</TableCell>
                                            <TableCell>{first.age}</TableCell>
                                            <TableCell>{first.age}</TableCell>
                                            
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>


            </Grid>
        </Box>
    )
}