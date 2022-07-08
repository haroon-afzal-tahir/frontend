import {
	AppBar,
	Toolbar,
	Typography,
	makeStyles,
	Button,
	IconButton,
	Drawer,
	Link,
	MenuItem
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import React, { useState, useEffect } from "react"
import { Link as RouterLink } from "react-router-dom"

const headersData = [
	{
		label: "Students List",
		href: "../pages/StudentList",
	},
	{
		label: "Books List",
		href: "../pages/BookList",
	},
	{
		label: "Student Detail",
		href: "../pages/StudentDetail",
	},
	{
		label: "Book Detail",
		href: "../pages/BookDetail",
	},
];

const useStyles = makeStyles(() => ({
	header: {
		backgroundColor: "#400CCC",
		paddingRight: "79px",
		paddingLeft: "118px",
		"@media (max-width: 900px)": {
			paddingLeft: 0
		},
	},
	logo: {
		fontFamily: "Work Sans, sans-serif",
		fontWeight: 600,
		color: "#FFFEFE",
		textAlign: "left",
	},
	menuButton: {
		fontFamily: "Open Sans, sans-serif",
		fontWeight: 700,
		size: "18px",
		marginLeft: "38px",
	},
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
	},
	drawerContainer: {
		padding: "20px 30px"
	}
}))

export default function Header() {
	const { header, logo, menuButton, toolbar, drawerContainer } = useStyles()

	const [state, setState] = useState({
		mobileView: false,
		drawerOpen: false,
	})

	const { mobileView, drawerOpen } = state

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 900
				? setState((prevState) => ({ ...prevState, mobileView: true }))
				: setState((prevState) => ({ ...prevState, mobileView: false }))
		}

		setResponsiveness()

		window.addEventListener("resize", () => setResponsiveness())

		return () => {
			window.removeEventListener("resize", () => setResponsiveness())
		}
	}, [])

	const displayDesktop = () => {
		return (
			<Toolbar className={toolbar}>
				{LibraryLogo}
				<div>{getMenuBttons()}</div>
			</Toolbar>
		)
	}

	const displayMobile = () => {
		const handleDrawerOpen = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: true }))
		
		const handleDrawerClose = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: false}))
		
		return (
			<Toolbar>
				<IconButton
					{...{
						edge: "start",
						color: "inherit",
						"aria-label": "menu",
						"aria-haspopup": "true",
						onClick: handleDrawerOpen,
					}}>
						<MenuIcon />
				</IconButton>

				<Drawer
					{...{
						anchor: "left",
						open: drawerOpen,
						onClose: handleDrawerClose,
					}}>
						<div classes={drawerContainer}>{getDrawerChoices()}</div>
				</Drawer>

				<div>{LibraryLogo}</div>
			</Toolbar>
		)
	}

	const getDrawerChoices = () => {
		return headersData.map(({ label, href }) => {
			return (
				<Link
					{...{
						component: RouterLink,
						to: href,
						color: "inherit",
						style: { textDecoration: "none" },
						key: label,
					}}>
						<MenuItem>{label}</MenuItem>
				</Link>
			)
		})
	}

	const LibraryLogo = (
		<Typography variant="h6" component="h1" className={logo}>
			Library
		</Typography>
	)

	const getMenuBttons = () => {
		return headersData.map(({ label, href }) => {
			return (
				<Button
					{...{
						key: label,
						color: "inherit",
						to: href,
						component: RouterLink,
						className: menuButton,
					}}>
						{label}
				</Button>
			)
		})
	}

	return (
		<header>
			<AppBar className={header}>
				{mobileView ? displayMobile() : displayDesktop()}
			</AppBar>
		</header>
	)
}

// import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   CssBaseline,
//   Typography,
//   makeStyles,
//   useTheme,
//   useMediaQuery,
// } from "@material-ui/core";
// import { Link } from "react-router-dom";
// import DrawerComponent from "./drawer";

// const useStyles = makeStyles((theme) => ({
// 	navlinks: {
// 		marginLeft: theme.spacing(5),
// 		display: "flex",
// 	},
// 	logo: {
// 		flexGrow: "1",
// 		cursor: "pointer",
// 	},
// 	link: {
// 		textDecoration: "none",
// 		color: "white",
// 		fontSize: "20px",
// 		marginLeft: theme.spacing(20),
// 		"&:hover": {
// 			color: "yellow",
// 			borderBottom: "1px solid white",
// 		},
// 	},
// }));

// function Navbar() {
// 	const classes = useStyles();
// 	console.log(classes)
// 	const theme = useTheme();
// 	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

// 	return (
//     	<AppBar position="static">
//     		<CssBaseline />
//     		<Toolbar>
//     			<Typography variant="h4" className={classes.logo}>Library</Typography>
// 				{ isMobile ? (
// 					<DrawerComponent />
// 				) : (
// 					<div className={classes.navlinks}>
// 						<Link to="/StudentList" className={classes.link}>Students List</Link>
// 						<Link to="/BookList" className={classes.link}>Books List</Link>
// 						<Link to="/StudentDetail" className={classes.link}>Student Detail</Link>
// 						<Link to="/BookDetail" className={classes.link}>Book Detail</Link>
// 					</div>
// 				)}
				
// 			</Toolbar>
//     	</AppBar>
// 	);
// }
// export default Navbar;