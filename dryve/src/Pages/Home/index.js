import React, { useState, useEffect } from 'react';
import { Grid, Typography, Paper, Box, Divider, Stack, Avatar, Button, Chip } from '@mui/material';
import api from '../../Components/Connection/api';
import { Chart } from 'react-google-charts'
import { array, arrayV, leads } from '../../Components/Data/data';
import useMakeStyle from './styles';

export default function Home() {
    const classes = useMakeStyle()

    const [drivers, setDrivers] = useState([])

    useEffect(() => {
        api.get('/5eb553df31000060006994a8')
            .then((res) => {
                setDrivers(res.data)
            })
            .catch((err) => {
                alert(`Erro ao carregar dados ${err}`)
            })
    }, [])


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
                                    <Typography>{t.title}</Typography>
                                    <div className={classes.bodyPaper}>
                                        <Typography variant="h4">{t.body}</Typography>
                                        <Typography><Avatar className={classes.avatar}>{t.logo}</Avatar></Typography>
                                    </div>
                                </div>
                            </Paper>
                        </Grid>
                    ))
                }
                <Grid item xs={12} className={classes.bodyGrafic}>
                    <Paper className={classes.grafic}>
                        Leads (últimos 30 dias)
                        <Divider sx={{ marginTop: 1 }} />
                        <Chart

                            style={{width:'100%', height:'90%'}}
                            chartType="LineChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['x', ''],
                                [0, 0],
                                [1, 10],
                                [2, 23],
                                [3, 17],
                                [4, 18],
                                [5, 9],
                                [6, 11],
                                [7, 27],
                                [8, 33],
                                [9, 40],
                                [10, 32],
                                [11, 35],
                            ]}
                            options={{
                                hAxis: {
                                    title: 'Time',
                                },
                                vAxis: {
                                    title: '',
                                },
                            }}
                            rootProps={{ 'data-testid': '1' }}
                        />




                    </Paper>

                    <Grid item xs={4}>
                        <Paper className={classes.leads}>
                            <Typography className={classes.titleLeads}> Leads por portal (últimos 30 dias) </Typography>
                            {
                                leads.map((info) => (
                                    <div>
                                        <div className={classes.leadsEnterprise}>
                                            <Avatar sx={{ margin: 1, bgcolor: '#F9F9F9' }}>{info.logo}</Avatar>
                                            <Typography sx={{ flexGrow: 1 }}>{info.title}</Typography>
                                            <Typography>{info.body}</Typography>
                                        </div>
                                        <Divider sx={{ marginTop: 1 }} />
                                    </div>
                                ))
                            }
                        </Paper>
                    </Grid>
                </Grid>

                {
                    arrayV.map((veiculos) => (
                        <Grid key={veiculos.id} item xs={6}>
                            <Paper className={classes.testDrive}>
                                <Typography className={classes.titleTestDrive}>{veiculos.title}</Typography>
                                <Divider />
                                {
                                    drivers.map((drive) => (
                                        <div key={drive.version_uuid} className={classes.cardsTestDrive}>
                                            <img src={drive.image} width={150} height={120} />
                                            <div style={{ marginLeft: 20, flexGrow: 1 }}>
                                                <Typography style={{ fontWeight: 'bold' }}>{drive.name}</Typography>
                                                <Typography>{`${drive.version_name}`}</Typography>
                                                <Typography>{`${drive.model_year} - ${drive.fuel_type}`}</Typography>
                                                <Typography>{`${drive.mileage} Km - R$ ${drive.ad_selling_price}`}</Typography>
                                            </div>
                                            <div style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                                {
                                                    veiculos.id > 0 ?
                                                        <Chip label="Agendado" color="primary" style={{ background:'#CCE8FE', color:'#000'}} /> :
                                                        <Chip style={{ background: '#FFAB00', color: "#FFF" }} label="Vencidos" />

                                                }
                                                <Typography style={{ marginLeft: 10, marginTop: 5 }}>3 dias</Typography>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Paper>
                        </Grid>
                    ))
                }
            </Grid>

        </Box>
    )
}