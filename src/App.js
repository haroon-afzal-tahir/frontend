import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import StudentList from "./pages/StudentList";
import BookList from "./pages/BookList";
import StudentDetail from "./pages/StudentDetail";
import BookDetail from "./pages/BookDetail";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/StudentList" component={StudentList} />
				<Route path="/BookList" component={BookList} />
				<Route path="/StudentDetail" component={StudentDetail} />
				<Route path="/BookDetail" component={BookDetail} />
			</Routes>
		</Router>
	);
}

export default App;
