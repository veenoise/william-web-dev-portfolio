function Card(props) {
	return (
		<div className="col">
			<div className="card h-100 text-bg-dark">
				<img src={props.image} alt={props.alt} />
				<div className="card-body d-flex flex-column justify-content-between gap-3">			
					<div>
						<h5 className="card-title">{props.title}</h5>
						<p className="card-text">{props.body}</p>
					</div>
					<div className="d-flex justify-content-end">
						<a href={props.redirect} target="_blank" className="btn btn-bd-primary">Visit</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card;