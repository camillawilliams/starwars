import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom"
//import { Characters } from "../component/characters.js";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Row } from "../component/row";
import { Navbar } from "../component/navbar.js";

export const Home = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className=“container mt-5">
            <Row title=“Planets” data={store.planets} />
        </div>
    );
};
// export function Home() {
// 	let characters = [
// 		{
// 			image: "https://via.placeholder.com/300",
// 			title: "My card",
// 			body: "Lorem ipsum dolor sit amet, consectrtur adipicing elit. Nulla rutrum in metus quis pellentesque.",
// 			buttonText: "View",
// 			url: "Find out More!"
// 		},
// 		{
// 			image: "https://via.placeholder.com/300",
// 			title: "My card",
// 			body: "Lorem ipsum dolor sit amet, consectrtur adipicing elit. Nulla rutrum in metus quis pellentesque.",
// 			buttonText: "View",
// 			url: "Find out More!"
// 		},
// 		{
// 			image: "https://via.placeholder.com/300",
// 			title: "My card",
// 			body: "Lorem ipsum dolor sit amet, consectrtur adipicing elit. Nulla rutrum in metus quis pellentesque.",
// 			buttonText: "View",
// 			url: "Find out More!"
// 		},
// 		{
// 			image: "https://via.placeholder.com/300",
// 			title: "My card",
// 			body: "Lorem ipsum dolor sit amet, consectrtur adipicing elit. Nulla rutrum in metus quis pellentesque.",
// 			buttonText: "View",
// 			url: "Find out More!"
// 		}
// 	];

	// return (
	// 	<div className="nav-bar">
	// 		{/* <Navbar brand={navbar.text} /> */}
	// 		<div className="container">
	// 			<div className="card-deck">
	// 				{characters.map((card, index) => {
	// 					return (
	// 						<Characters
	// 							key={index}
	// 							image={card.image}
	// 							title={card.title}
	// 							body={card.body}
	// 							buttonText={card.buttonText}
	// 							url={card.url}
	// 						/>
	// 					);
	// 				})}
	// 			</div>
	// 			);
	// 		</div>
	// 	</div>
// 	return (
// 		<div className="container-fluid">
// 			<div className="row">
// 				{row.map((card, index) => (
// 					<div className="col-3" key={index}>
// 						<Row
// 							tittle={card.title}
// 							body={card.body}
// 							buttonText={card.buttonText}
// 							url={card.url}
// 							image={card.image}
// 						/>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// }
