import React, { useState } from "react";
import {
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemText,
	makeStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "blue",
        fontSize: "20px",
    },
    icon:{
        color: "white"
    }
}));

function DrawerComponent() {
	const classes = useStyles();
	const [openDrawer, setOpenDrawer] = useState(false);
	return (
		<>
			<Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
				<List>
					<ListItem onClick={() => setOpenDrawer(false)}>
						<ListItemText>
							<Link to="/StudentList" className={classes.link}>Student List</Link>
						</ListItemText>
					</ListItem>
					<ListItem onClick={() => setOpenDrawer(false)}>
						<ListItemText>
							<Link to="/BookList" className={classes.link}>Book List</Link>
						</ListItemText>
					</ListItem>
					<ListItem onClick={() => setOpenDrawer(false)}>
						<ListItemText>
							<Link to="/StudentDetail" className={classes.link}>Student Detail</Link>
						</ListItemText>
					</ListItem>
					<ListItem onClick={() => setOpenDrawer(false)}>
						<ListItemText>
							<Link to="/BookDetail" className={classes.link}>Book Detail</Link>
						</ListItemText>
					</ListItem>
				</List>
			</Drawer>
			<IconButton onClick={() => setOpenDrawer(!openDrawer)}>
				<MenuIcon />
			</IconButton>
		</>
	);
}
export default DrawerComponent;