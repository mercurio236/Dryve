import React from 'react';
import { Container, Grid, Typography, Paper, Box } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles'

const useMakeStyle = makeStyles((theme) => ({
    root: {
        marginLeft:'4%',
    },
    resumo: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    paperData:{
        height: 150,
        padding: 15
    }
}))

export default function Home() {
    const classes = useMakeStyle()
    let array = [
        { id: '0', name: 'teste0' },
        { id: '1', name: 'teste1' },
        { id: '2', name: 'teste2' },
        { id: '3', name: 'teste3' },

    ]

    let arrayGrafic = [
        { id: '0', name: 'teste0' },
        { id: '1', name: 'teste1' },
    ]

    return (
        <Box sx={{ display: 'flex' }}>
            <Grid component="main" sx={{ flexGrow: 1, p: 3 }} container spacing={2} className={classes.root}>
                < Grid item xs={12}>
                    <Typography variant="h5" className={classes.resumo}>Resumo</Typography>
                </Grid>
                {
         
                    array.map((t) => (
                        <Grid key={t.id} item xs={3}>
                            <Paper className={classes.paperData}>{t.name}</Paper>
                        </Grid>
                    ))
                }
            
                        <Grid  item xs={6}>
                            <Paper>Teste</Paper>
                            <Paper>Teste</Paper>
                        </Grid>
                   

{
                    arrayGrafic.map((t) => (
                        <Grid key={t.id} item xs={6}>
                            <Paper>{t.name}</Paper>
                        </Grid>
                    ))
                }
            </Grid>
           
        </Box>
    )
}