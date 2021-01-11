import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	title: {
	  flexGrow: 1,
	},
  }));

  function NavLinks() {

	const classes = useStyles();

	  return (
		  <>
<Typography variant="subtitle2" className={classes.title}>
				Groups
          </Typography>
		  <Typography variant="subtitle2" className={classes.title}>
				Customers
          </Typography>
		  <Typography variant="subtitle2" className={classes.title}>
				Devices
          </Typography>
		  <Typography variant="subtitle2" className={classes.title}>
				Alerts
          </Typography>
		  <Typography variant="subtitle2" className={classes.title}>
				Geofences
          </Typography>
		  <Typography variant="subtitle2" className={classes.title}>
				Statistics
          </Typography>
		  </>
	  )
  }
  
  export default NavLinks
  