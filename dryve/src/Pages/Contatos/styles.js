import { makeStyles } from '@material-ui/styles';

const useMakeStyle = makeStyles((theme) => ({
    container: {
        marginLeft: '8%',
        marginTop: '3%',
    },
    search: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    },
    titleSearch: {
        fontWeight: 'bold',
        fontSize: 30,
        marginRight: 10,

    },
    input: {
        flexGrow:1

    },
    btnArea: {
        marginLeft: 400,
        justifyContent: 'space-between',
        display: 'flex',
    },
    avatar: {
        marginRight:20,
        background: '#EAF9FF',
        color: '#0065FF'
    }
}))

export default useMakeStyle;