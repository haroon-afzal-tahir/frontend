import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import StudentList from "./pages/StudentList";
import BookList from "./pages/BookList";
import StudentDetail from "./pages/StudentDetail";
import BookDetail from "./pages/BookDetail";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/StudentList" element={<StudentList />} />
				<Route path="/BookList" element={<BookList />} />
				<Route path="/StudentDetail" element={<StudentDetail />} />
				<Route path="/BookDetail" element={<BookDetail />} />
			</Routes>
		</div>
	);
}

export default App;
