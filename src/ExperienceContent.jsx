function ExperienceContent(props) {
	return (
		<>
			<div className="row row-cols-2">
				<h3 className="col-5 d-flex justify-content-end align-items-center text-end reset-h3" style={{borderRight: "solid #7a28ff 4px"}}>{props.date}</h3>
				<div className="col-7">
					<h4>{props.title}</h4>
					<h5>{props.location}</h5>
					<ul>{props.desc.map(e => <li>{e}</li>)}</ul>
				</div>
			</div>
		</>
	)
}

export default ExperienceContent;