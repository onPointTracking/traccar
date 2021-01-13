import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
	Link
  } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	title: {
	  fontSize:"1.1rem",
	  color: "#fff",
	  
	},
	link:{
		flexGrow: 1,
		textDecoration:"none",
	}
  }));

  function NavLinks() {

	const classes = useStyles();

	  return (
		  <>
		  
			  <Link to="/groups" className={classes.link}>
		  <Typography variant="h6" className={classes.title}>
				Groups
          </Typography>
			  </Link>
			  <Link to="/customers" className={classes.link}>
		  <Typography variant="h6" className={classes.title}>
			  
				Customers
          </Typography>
			  </Link>
			  <Link to="/devices" className={classes.link}>
		  <Typography variant="h6" className={classes.title}>
			  
				Devices
          </Typography>
			  </Link>
			  <Link to="/alerts" className={classes.link}>
		  <Typography variant="h6" className={classes.title}>
			  
				Alerts
          </Typography>
			  </Link>
			  <Link to="/geofences" className={classes.link}>
		  <Typography variant="h6" className={classes.title}>
			  
				Geofences
          </Typography>
			  </Link>
			  <Link to="/statistics" className={classes.link}>
		  <Typography variant="h6" className={classes.title}>
			  
				Statistics
          </Typography>
			  </Link>
		  </>
	  )
  }
  
  export default NavLinks
  