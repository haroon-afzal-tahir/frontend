import React, { useEffect, useState } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

function StudentList() {
	
	const [data, setData] = useState([{}])
	const [message, setMessage] = useState('')

	useEffect(() => {
		async function getData() {
			await fetch("/users")
				.then(res => res.json())
				.then(res => setData(res))
		}
		getData()
	}, [])
	
	const StyledTableCell = withStyles((theme) => ({
		head: {
			backgroundColor: theme.palette.common.black,
			color: theme.palette.common.white,
		},
		body: {
			fontSize: 14
		},
	})) (TableCell);

	const StyledTableRow = withStyles((theme) => ({
		root: {
			'&:nth-of-type(odd)': {
				backgroundColor: theme.palette.action.hover,
			},
		},
	})) (TableRow);

	const handleChange = event => {
		setMessage(event.target.value)
		console.log('Value is: ', event.target.value)
	}

	const handleClick = event => {
		event.preventDefault()

		async function getData() {
			await fetch(`/users?fname=${message}`)
				.then(res => res.json())
				.then(res => setData(res))
		}

		getData()

		console.log('Handle Click: ', message)
	}

	return (
		<>
			<div>
				{/* <div className="" style={{
					marginBottom: "20px"
				}} align="center">
					<TextField id="outlined-basic" label="Search Student" variant="outlined" value={message} onChange={handleChange} autoComplete="off"/>
					<Button variant="contained" onClick={handleClick} style={{
						marginTop: "8px",
						marginLeft: "10px"
					}}>Search</Button>
				</div> */}
				<TableContainer component={Paper}>
					<Table aria-label="Customized Table">
						<TableHead>
							<TableRow>
								<TableCell align="center">First Name</TableCell>
								<TableCell align="center">Last Name</TableCell>
								<TableCell align="center">Edit</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>{
							data.map((item) =>
								<StyledTableRow key={item.s_id}>
									<StyledTableCell component="th" scope="row" align="center">{item.fname}</StyledTableCell>
									<StyledTableCell align="center">{item.lname}</StyledTableCell>
									<StyledTableCell align="center">
										<Link to={{pathname: '/StudentDetail', state: {s_id: item.s_id, fname: item.fname, lname: item.lname }}}>
											<Button variant="outlined">
												Edit
											</Button>
										</Link>
									</StyledTableCell>
								</StyledTableRow>
							)
						}</TableBody>
					</Table>
				</TableContainer>
	 		</div>
	 	</>
	);
}

export default StudentList;