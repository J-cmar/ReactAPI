import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import TicTacToe from "./pages/TicTacToe.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home.js";
import API from "./pages/API.js";
// import Blogs from "./pages/Blogs";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="tictactoe" element={<TicTacToe />} />
					<Route path="apiconsumption" element={<API />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
