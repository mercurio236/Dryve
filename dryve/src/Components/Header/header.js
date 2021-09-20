import React from 'react';
import { Link } from 'react-router-dom'
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import { Stack, Avatar, Badge, Box } from '@mui/material'
import Settings from '@mui/icons-material/Settings';
import Logo from '../../Assets/logo.svg';
import { Apps, Sell, CalendarToday, DriveEta, AccountCircle, AccountBalance, Notifications } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faChartLine } from '@fortawesome/free-solid-svg-icons'


const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

let menu = [
    { id: '0', title: 'Resumo', icon: <Apps />, navegar: "/" },
    { id: '1', title: 'Oportunidades', icon: <Sell /> },
    { id: '2', title: 'Agenda', icon: <CalendarToday /> },
    { id: '3', title: 'Veiculos', icon: <DriveEta /> },
    { id: '4', title: 'Publicações', icon: <FontAwesomeIcon icon={faRocket} /> },
    { id: '5', title: 'Contatos', icon: <AccountCircle />, navegar: "/contato" },
    { id: '6', title: 'Analytics', icon: <FontAwesomeIcon icon={faChartLine} /> },
    { id: '7', title: 'Financiamento', icon: <AccountBalance /> },
]

export default function Header() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };



    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} style={{ background: '#FFF' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}

                    >
                        <MenuIcon color="action" />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" style={{ flexGrow: 1 }}>
                        <Link to="/" >
                            <img src={Logo} width="100" height="40" style={{ marginTop: 14 }} />
                        </Link>
                    </Typography>
                    <Stack direction="row" spacing={2} >
                        <Badge badgeContent={4} color="primary" variant="dot">
                            <Notifications color="action"/>
                        </Badge>
                        <Settings style={{ color: '#000' }} />
                        <Avatar style={{ width: 24, height: 24 }} />
                    </Stack>

                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open} style={{ flexGrow: 1 }}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {menu.map((text, index) => (
                        <ListItem button key={text.id} onClick={handleDrawerClose}>
                            <Link to={text.navegar} style={{display:'flex', textDecoration:'none', color:'#000'}}>
                                <ListItemIcon >
                                    {text.icon}
                                </ListItemIcon>
                            <ListItemText primary={text.title} />
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

            </Box>
        </Box >
    )
}