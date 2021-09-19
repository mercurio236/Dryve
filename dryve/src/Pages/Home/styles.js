import { makeStyles } from '@material-ui/core/styles';

const useMakeStyle = makeStyles((theme) => ({
    root: {
        marginLeft:'4%',
    },
    resumo: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    title:{
        height: 150,
        padding: 15
    },
    bodyPaper:{
        display:'flex',
        justifyContent:'space-between',
        marginTop:'30%'
    },
    bodyGrafic:{
        flexDirection:'row',
        display:'flex'
    },
    grafic:{
        width: '104%',
        marginRight: 15,
        height: 250
    },
    leads:{
        height: 250
    },
    testDrive:{
        height: 250
    }
}))

export default useMakeStyle;