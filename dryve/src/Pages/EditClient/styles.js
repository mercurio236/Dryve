import { makeStyles } from '@material-ui/styles'

const useMakeStyles = makeStyles((theme) => ({
    root:{
        marginTop:'4%',
        marginLeft:'6%'
    },
    titleArea:{
        display:'flex',
        alignItems:'center'
    },
    title:{
        fontWeight:'bold'
    },
    paperInfo:{
        margin:10,
        height: 850,
        padding: 15
    },
    paperBuy:{
        margin:10,
        height:200,
        padding: 15,
        overflow:'auto'
        
    },
    bodyInfo:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginTop: 50
    },
    inputArea:{
        margin:10
    },
    input:{
        margin:10,
        width:250,
    }
}))

export default useMakeStyles