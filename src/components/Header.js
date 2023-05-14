import React from "react";
import TotalPlayers from "./TotalPlayers";

const Header = (props) => {

	return (
		<header>
			<TotalPlayers players={props.players} />
			<h1>{props.title}</h1>
		</header>
	);
};

export default Header;