import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, IconButton, Paper, TextField, Divider, Radio, RadioGroup, FormControl, FormControlLabel, FormGroup, Button, Stack } from '@mui/material';
import { useSelector } from 'react-redux'
import useMakeStyle from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import api from '../../Components/Connection/api';



export default function EditClient() {
    const classes = useMakeStyle()
    const data = useSelector((state) => state.editState.data)
    const [drive, setDrive] = useState([])

    useEffect(() => {
        api.get('/5eb553df31000060006994a8')
            .then((res) => {
                setDrive(res.data)
            })
            .catch((err) => {
                alert(`Erro ao carregar dados ${err}`)
            })
    }, [])


    console.log(data)
    return (
        <Box sx={{ display: 'flex' }}>
            <Grid container spacing={2} className={classes.root}>
                <Grid item xs={12}>
                    <div className={classes.titleArea}>
                        <Link to='/contato'>
                            <IconButton sx={{ marginRight: 3 }}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </IconButton>
                        </Link>
                        <Typography variant="h5" className={classes.title}>Editar Contato</Typography>
                    </div>
                    <Grid item xs={12} sx={{ display: 'flex' }}>
                        <Grid item xs={6}>
                            <Paper className={classes.paperInfo}>
                                <Typography >Informações</Typography>
                                <Divider />
                                <div >
                                    <FormControl component="fieldset">
                                        <RadioGroup row>
                                            <FormControlLabel value="selected" control={<Radio />} label="Pessoa física" />
                                            <FormControlLabel value='selecte' control={<Radio />} label="Pessoa jurídica" />
                                        </RadioGroup>
                                    </FormControl >
                                    <Typography sx={{ color: '#0065FF', fontWeight: 'bold' }}>Dados pessoais</Typography>
                                    <FormGroup row>
                                        <TextField value={data.name} label="Nome" size="small" className={classes.input} />
                                        <TextField value={data.sobrenome} label="Sobrenome" size="small" className={classes.input} />
                                        <TextField value={data.email} label="E-mail" size="small" className={classes.input} />
                                        <TextField value={data.telefone} label="Telefone" size="small" className={classes.input} />

                                        <FormGroup row>
                                            <TextField label="Nascimento" size="small" sx={{ width: 119, margin: 1 }} />
                                            <TextField label="Genero" size="small" sx={{ width: 119, margin: 1 }} />
                                            <TextField label="RG" size="small" sx={{ width: 119, margin: 1 }} />
                                            <TextField label="CPF" size="small" sx={{ width: 119, margin: 1 }} />
                                        </FormGroup>
                                    </FormGroup>
                                    <Typography sx={{ color: '#0065FF', fontWeight: 'bold' }}>Endereço</Typography>
                                    <FormGroup row>
                                        <TextField label="CEP" size="small" sx={{ width: 119, margin: 1 }} />
                                        <FormGroup row>
                                            <TextField label="Endereço" size="small" sx={{ width: 350 }} className={classes.inputArea} />
                                            <TextField label="Número" size="small" sx={{ width: 150 }} className={classes.inputArea} />
                                            <TextField label="Complemento" size="small" sx={{ width: 250 }} className={classes.inputArea} />
                                            <TextField label="Bairro" size="small" sx={{ width: 250 }} className={classes.inputArea} />
                                            <TextField label="Cidade" size="small" sx={{ width: 350 }} className={classes.inputArea} />
                                            <TextField label="Estado" size="small" sx={{ width: 150 }} className={classes.inputArea} />
                                        </FormGroup>
                                    </FormGroup>
                                    <Typography sx={{ color: '#0065FF', fontWeight: 'bold' }}>Dados bancários</Typography>
                                    <FormGroup row>
                                        <TextField label="Banco" size="small" sx={{ width: 520, margin: 1 }} />
                                        <FormGroup row>
                                            <TextField label="Tipo de conta" size="small" sx={{ width: 119, margin: 1 }} />
                                            <TextField label="Agencia" size="small" sx={{ width: 119, margin: 1 }} />
                                            <TextField label="Conta" size="small" sx={{ width: 119, margin: 1 }} />
                                            <TextField label="Digito" size="small" sx={{ width: 119, margin: 1 }} />
                                        </FormGroup>
                                    </FormGroup>
                                    <Typography sx={{ color: '#0065FF', fontWeight: 'bold' }}>Tags</Typography>
                                    <Button variant="outlined" color="primary" sx={{ marginBottom: 2 }} startIcon={<FontAwesomeIcon icon={faPlus} />}>Adicionar</Button>
                                    <Divider />
                                    <Button variant="contained" sx={{ marginTop: 2, marginLeft: 55 }}>Salvar</Button>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paperBuy}>
                                <Typography style={{position:'sticky', top:-15, background:'#FFF', zIndex:1}}>Informaçãoes de compra</Typography>
                                <Divider />
                                {
                                    drive.map((d) => (
                                        <Paper style={{ marginTop: 20, marginBottom: 10, display: 'flex', margin: 10 }}>
                                            <img src={d.image} width={150} height={120} />
                                            <div style={{flexDirection:'row', marginLeft:10}}>
                                                <Typography style={{ fontWeight: 'bold' }}>{d.name}</Typography>
                                                <Typography>{`${d.version_name}`}</Typography>
                                                <Typography>{`${d.model_year} - ${d.fuel_type}`}</Typography>
                                                <Typography>{`${d.mileage} Km - R$ ${d.ad_selling_price}`}</Typography>
                                            </div>
                                        </Paper>
                                    ))
                                }
                            </Paper>
                            <Paper className={classes.paperBuy}>
                                <Typography>Intenção de Venda</Typography>
                                <Divider />
                                <div className={classes.bodyInfo}>
                                    <Button variant="outlined" color="primary" startIcon={<FontAwesomeIcon icon={faPlus} />}>Adicionar</Button>
                                </div>

                            </Paper>
                            <Paper className={classes.paperBuy}>
                                <Typography>Anúncios</Typography>
                                <Divider />
                                <div className={classes.bodyInfo}>
                                    <Typography >Este contato não possui vinculados</Typography>
                                </div>


                            </Paper>
                            <Paper className={classes.paperBuy}>
                                <Typography>Oportunidades</Typography>
                                <Divider />

                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}