import React from 'react';
import { Grid, Typography, Paper, Box } from '@mui/material';

import useMakeStyle from './styles';

export default function Home() {
    const classes = useMakeStyle()
    let array = [
        { id: '0', title: 'Title', body: 'corpo', logo: '#' },
        { id: '1', title: 'Title', body: 'corpo', logo: '#' },
        { id: '2', title: 'Title', body: 'corpo', logo: '#' },
        { id: '3', title: 'Title', body: 'corpo', logo: '#' },

    ]

    let arrayV = [
        { id: '0', title: 'Title', body: 'corpo', logo: '#' },
        { id: '1', title: 'Title', body: 'corpo', logo: '#' },
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
                            <Paper>
                                <div className={classes.title}>
                                    {t.title}
                                    <div className={classes.bodyPaper}>
                                        <Typography>{t.body}</Typography>
                                        <Typography>{t.logo}</Typography>
                                    </div>
                                </div>
                            </Paper>
                        </Grid>
                    ))
                }
                <Grid item xs={12} className={classes.bodyGrafic}>
                    <Paper className={classes.grafic}>Teste1</Paper>
                    <Grid item xs={4}>
                        <Paper className={classes.leads}>Teste2</Paper>
                    </Grid>
                </Grid>
                {
                    arrayV.map((veiculos) => (
                        <Grid key={veiculos.id} item xs={6}>
                            <Paper className={classes.testDrive}>{veiculos.title}</Paper>
                        </Grid>
                    ))
                }
            </Grid>

        </Box>
    )
}