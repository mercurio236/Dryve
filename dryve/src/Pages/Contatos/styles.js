import { makeStyles } from '@material-ui/styles';

const useMakeStyle = makeStyles((theme) => ({
    container:{
        marginLeft: '7%',
        marginTop: '3%',
    },
    search:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        
    },
    titleSearch:{
        fontWeight:'bold',
        fontSize: 30,
        marginRight: 10,
        
    },
    input:{
        width: '30%',
       
    },
    btnArea:{
        marginLeft: 400,
        justifyContent:'space-between',
        display:'flex',
        
    }
}))

export default useMakeStyle;