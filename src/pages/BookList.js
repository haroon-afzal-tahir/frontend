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

function BookList() {
	const [data, setData] = useState([{}])

	useEffect(() => {
		async function getData() {
			await fetch("/history")
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

	return (
		<>
			<div>
				{/* <div>
					<TextField id="outlined-basic" label="Search Book" variant="outlined"/>
					<Button variant="contained" onClick={() => {

					}}>Search</Button>
				</div> */}
				<TableContainer component={Paper}>
					<Table aria-label="Customized Table">
						<TableHead>
							<TableRow>
								<TableCell align="center">Book Name</TableCell>
								<TableCell align="center">Author</TableCell>
								<TableCell align="center">Borrowed By</TableCell>
								<TableCell align="center">Date Borrowed</TableCell>
								<TableCell align="center">Expected Date Return</TableCell>
								<TableCell align="center">Edit</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>{
							data.map((item) =>
								<StyledTableRow key={item.b_id}>
									<StyledTableCell component="th" scope="row" align="center">{item.bname}</StyledTableCell>
									<StyledTableCell align="center">{item.author}</StyledTableCell>
									<StyledTableCell align="center">{item.fname + ' ' + item.lname}</StyledTableCell>
									<StyledTableCell align="center">{new Date(item.dateborrowed).toLocaleDateString("en-US")}</StyledTableCell>
									<StyledTableCell align="center">{new Date(item.datereturn).toLocaleDateString("en-US")}</StyledTableCell>
									<StyledTableCell align="center">
										<Link to={{pathname: '/BookDetail', state: { b_id: item.b_id, bname: item.bname, author: item.author, name: item.fname + ' ' + item.lname, dateborrowed: new Date(item.dateborrowed).toLocaleDateString("en-US"), datereturn: new Date(item.datereturn).toLocaleDateString("en-US")}}}>
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
	)
}

export default BookList;