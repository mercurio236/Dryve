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
        marginTop:'22%'
    },
    bodyGrafic:{
        flexDirection:'row',
        display:'flex'
    },
    grafic:{
        width: '104%',
        marginRight: 15,
        height: 250,
        padding: 10
    },
    leads:{
        height: 250,
        padding: 10,
        overflow:'auto'
    },
    testDrive:{
        height: 250,
        padding: 10,
        overflow:'auto'
    }, 
    avatar:{
        background:'#EAF9FF',
        color: '#0065FF'
    }, 
    leadsEnterprise:{
        display:'flex', 
        alignItems:'center', 
        marginTop:10,
    },
    titleLeads:{
        position:'sticky', 
        top:-10, 
        background:'#FFF', 
        zIndex:1
    },
    titleTestDrive:{
        position:'sticky', 
        top:-10, 
        background:'#FFF', 
        zIndex:1
    },
    cardsTestDrive:{
        marginTop: 20, 
        display: 'flex', 
        marginBottom: 10, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
}))

export default useMakeStyle;