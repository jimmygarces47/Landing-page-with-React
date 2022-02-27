import React from "react";

const Navbar = () => {
	return (
		<div className="container-fluid" style={{ backgroundColor: "#1f1f14" }}>
			<nav className="navbar navbar-expand-lg navbar-light ">
				<div
					className="container"
					style={{ backgroundColor: "#1f1f14" }}>
					<a
						className="navbar-brand"
						href="#"
						style={{ color: "white" }}>
						Start bootstrap
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse justify-content-end"
						id="navbarNavAltMarkup">
						<div className="navbar-nav ">
							<a
								className="nav-link active "
								aria-current="page"
								href="#"
								style={{ color: "white" }}>
								Home
							</a>
							<a
								className="nav-link "
								aria-current="page"
								href="#"
								style={{ color: "white" }}>
								About
							</a>
							<a
								className="nav-link "
								aria-current="page"
								href="#"
								style={{ color: "white" }}>
								Service
							</a>
							<a
								className="nav-link "
								aria-current="page"
								href="#"
								style={{ color: "white" }}>
								Contact
							</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};
export default Navbar;
