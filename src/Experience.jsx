import ExperienceContent from './ExperienceContent'

function Experience() {
	return (
		<>			
			<div className="container my-5">
				<h1 className="mb-5 d-flex justify-content-center">Experience</h1>

				<ExperienceContent 
					date="Sep 2023 - Jul 2024"
					title="Cyber Security Lead"
					location="Google Developer Student Club - PUP Sta. Mesa"
					desc={[
						'Developed a web app for a capture-the-flag event',
						'Managed 50+ cadets',
						'Bash scripting session speaker'
					]}
				/>
				
				<ExperienceContent 
					date="Sep 2023 - Sep 2023"
					title="UI/UX Virtual Apprentice"
					location="MedGrocer (KadaKareer) - Remote"
					desc={[
						'Special mention from KadaKareer',
						'Designed UI/UX for MedGrocer',
						'Collaborate and plan with teammates'
					]}
				/>

				<ExperienceContent 
					date="Aug 2023 - Sep 2023"
					title="IT Intern"
					location="Zalora - Muntinlupa"
					desc={[
						'Created a countdown web page',
						'Troubleshooting of computers',
						'Migrating laptops to Azure AD'
					]}
				/>
			</div>
			
		</>
	)
}

export default Experience;