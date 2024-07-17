import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-1">
			<Link to="/">
				<div className="container">
     				 <img src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-1-1.png" alt="logo" width="70" height="35"/>
  				</div>
			</Link>
			<div className="ml-auto">
			<div className="dropdown">
				<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>
				<ul className="dropdown-menu">
					<li><a className="dropdown-item" href="#">Action</a></li>
					<li><a className="dropdown-item" href="#">Another action</a></li>
					<li><a className="dropdown-item" href="#">Something else here</a></li>
				</ul>
</div>
				{/* <Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link> */}
			</div>
		</nav>
	);
};
