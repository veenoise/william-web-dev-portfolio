function Navigation() {
	return (
		<header>
			<nav className="navbar bg-dark navbar-expand-md bg-body-tertiary fixed-top" data-bs-theme="dark" id="navbar-id">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">William</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarNav">
						<ul className="navbar-nav nav-pills">
							<li className="nav-item d-flex justify-content-center">
								<a className="nav-link" href="#">Home</a>
							</li>
							<li className="nav-item d-flex justify-content-center">
								<a className="nav-link" href="#Projects">Projects</a>
							</li>
							<li className="nav-item d-flex justify-content-center">
								<a className="nav-link" href="#Contact">Contact me</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Navigation;