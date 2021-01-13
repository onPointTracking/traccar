import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import SideDrawer from "./SideDrawer"
import NavLinks from './NavLinks';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const flex = {
	"width": "60%",
	"display":"flex",
	"justifyContent":"center",
	"flexDirection":"row",
}
const toolbarStyle = {
    "width": "100%",
    "display": "flex",
	"justifyContent": "space-between",
}

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={toolbarStyle}>
		<Hidden mdUp>
		<SideDrawer />
</Hidden>
<div style={flex}>
<Hidden smDown>
<NavLinks />
</Hidden>
</div>
	
          
<Box component="span" m={2}><Button color="inherit"><AccountCircle /></Button></Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
