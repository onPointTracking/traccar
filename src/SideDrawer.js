import * as React from "react"
import { useState } from "react"
import { IconButton,Drawer,List,ListItem,ListItemText } from "@material-ui/core"
import { Menu } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles"
import  {Link} from "react-router-dom"

const useStyles = makeStyles({
	list: {
	  width: 250,
	},
	linkText: {
	  textDecoration: `none`,
	  textTransform: `uppercase`,
	  fontWeight:"bold",
	  
	},
	link:{
		textDecoration:"none",
		color: "black",
	}
  })
  

const SideDrawer = () => {
	const classes = useStyles();
	const [state, setState] = useState({ right: false })
	const toggleDrawer = (anchor, open) => (event) => {
	  if (
		event.type === "keydown" &&
		(event.key === "Tab" || event.key === "Shift")
	  ) {
		return
	  }
	  setState({ [anchor]: open })
	}
	const sideDrawerList = anchor => (
		<div
		  className={classes.list}
		  role="presentation"
		  onClick={toggleDrawer(anchor, false)}
		  onKeyDown={toggleDrawer(anchor, false)}
		>
		  <List component="nav">
			  <Link to="/groups" className={classes.link}>
			  
				<ListItem button>
				  <ListItemText className={classes.linkText} primary="Groups" />
				</ListItem>
			  </Link>
			  <Link to="/customers" className={classes.link}>

				<ListItem button>
				  <ListItemText className={classes.linkText} primary="Customers" />
				</ListItem>
			  </Link>
			  <Link to="/devices" className={classes.link}>

				<ListItem button>
				  <ListItemText className={classes.linkText} primary="Devices" />
				</ListItem>
			  </Link>
			  <Link to="/alerts" className={classes.link}>

				<ListItem button>
				  <ListItemText className={classes.linkText} primary="Alerts" />
				</ListItem>
			  </Link>
			  <Link to="/geofences" className={classes.link}>

				<ListItem button>
				  <ListItemText primary="Geofences" />
				</ListItem>
			  </Link>
			  <Link to="/statistics" className={classes.link}>

				<ListItem button>
				  <ListItemText className={classes.linkText}  className={classes.linkText} primary="Statistics" />
				</ListItem>
			  </Link>
		  </List>
		</div>
	  );

  return (
	<React.Fragment>
	<IconButton
	  edge="start"
	  aria-label="menu"
	  onClick={toggleDrawer("right", true)}
	>
	  <Menu fontSize="large" style={{ color: `white` }} />

	</IconButton>
	<Drawer
  anchor="right"
  open={state.right}
  onOpen={toggleDrawer("right", true)}
  onClose={toggleDrawer("right", false)}
>
  {sideDrawerList("right")}
</Drawer>
  </React.Fragment>
  )
}

export default SideDrawer