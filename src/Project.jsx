import ML from './assets/ML.png'
import PetPeeve from './assets/PetPeeve.png'
import ROTC from './assets/ROTC.png'
import ReactCalculator from './assets/ReactCalculator.png'
import Seen from './assets/seen.png'
import Poke from './assets/Poke.png'
import Card from './Card'

function Project() {
	return (
		<>
			<div className="container my-5" id="Projects">
				<h1 className="mb-5 d-flex justify-content-center">Projects</h1>
				<div className="container">
					<div className="row  row-cols-1 row-cols-lg-3 g-4">
						<Card 
							image={ML}
							alt="mobile legends extension"
							title="PUP-SIS ML Semester Summary"
							body="A web extension for PUP SIS that summarizes student performance in the last semester
							with the theme of Mobile Legends."
							redirect="https://github.com/veenoise/PUP-SIS-ML-Semester-Summary"
						/>
						<Card 
							image={PetPeeve}
							alt="pet peeve web application"
							title="PetPeeve"
							body="Flask web application that gives pet care tips depending on the weather and temperature 
							in the client's location. Uses Geolocation and OpenWeatherMap API for fetching user data. Implements 
							own implementation of a hash table for faster lookup time."
							redirect="https://github.com/veenoise/PetPeeve"
						/>
						<Card 
							image={ROTC}
							alt="pup rotc database"
							title="PUP ROTC Database"
							body="Flask web application for the PUP ROTC office. A full-fledged CRUD application as 
							part of the final requirement for my Information Management course. Uses postgreSQL for 
							database implementation."
							redirect="https://github.com/veenoise/PUPROTCDatabase"
						/>
						<Card 
							image={ReactCalculator}
							alt="React Calculator"
							title="React Calculator"
							body="Final project for Meta's React Basics on the Coursera learning platform.
							Learned the basics of React."
							redirect="https://github.com/veenoise/tenth-react-app"
						/>
						<Card 
							image={Seen}
							alt="seen web app"
							title="Seen"
							body="Flask web application for the Capture-The-Flag event I hosted for the 
							Google Developer Student Club - PUP Sta. Mesa. Uses sqlite for database."
							redirect="https://github.com/veenoise/seen"
						/>
						<Card 
							image={Poke}
							alt="auto poke"
							title="AutoPoke"
							body="Web extension for the Facebook's '/pokes' end point. Automatically 
							clicks the Poke Back button for all your FB friends and refreshes the page to do it 
							infinitely."
							redirect="https://github.com/veenoise/autopoke"
						/>
					</div>
				</div>
				
			</div>
		</>
	)
}

export default Project;