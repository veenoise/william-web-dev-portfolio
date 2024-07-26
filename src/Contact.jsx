import Pen from './assets/pen.webp'

function Contact() {
	return (
		<>
			<div className="container container-sm my-5" id="Contact">
				<h1 className="mb-5 d-flex justify-content-center">Contact Me</h1>
				<div className="row">
					<div className="col-md-6 d-none d-md-flex justify-content-center align-items-center">
						<img src={Pen} height={64} id="pen" alt="pen image" />
					</div>
					<div className="col-md-6">
						<form action='https://formspree.io/f/xkgwodwz' target='_blank' method='post'>		
							<div className="mb-4">
								<label htmlFor="name" className="form-label">Fullname <span className="text-danger">*</span></label>
								<input type="text" className="form-control" id="name" name="Name" aria-describedby="sender name" placeholder="John Doe" required />
							</div>
							<div className="mb-4">
								<label htmlFor="email" className="form-label">Email address <span className="text-danger">*</span></label>
								<input type="email" className="form-control" id="email" name="Email" aria-describedby="contact email" placeholder="name@email.com" required />
							</div>
							<div className="mb-4">
								<label htmlFor="org" className="form-label">Organization</label>
								<input type="text" className="form-control" id="org" name="Organization" aria-describedby="organization name" placeholder="Organization name" />
							</div>
							<div className="mb-5">
								<label htmlFor="message" className="form-label">Message <span className="text-danger">*</span></label>
								<textarea className="form-control" id="message" name="Message" rows={4} placeholder="Send me a message" required />
							</div>
							<div className="d-flex justify-content-end">
								<button type="submit" className="btn btn-bd-primary btn-lg">Let's work together</button>
							</div>
						</form>
					</div>
				</div>
				
				
			</div>
		</>
	)
}

export default Contact;