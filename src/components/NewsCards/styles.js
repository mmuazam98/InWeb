import {makeStyles} from '@material-ui/core/styles';

export default makeStyles({
	card: {
	    display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		height: '50vh',
		padding: '10%',
		borderRadius: 5,
		color: 'white',
	},
	infoCard: {
		display: 'flex', 
		flexDirection: 'column', 
		textAlign: 'center',
	},
	container: {
		padding: '0 6%',
		width: '100%',
		margin: '0',
	}
})