import HeroImg from './assets/avatar.jpg'
import GH from './assets/github.png'
import LinkedIn from './assets/linkedin.png'
import FB from './assets/facebook.png'
import Grass from './assets/grass.jpg'
import Resume from './assets/Chua_FullStackWebDeveloperIntern.pdf'
import Car from './assets/car.png'
import SunAndMoon from './assets/sunAndMoon.svg'

function Hero() {
	return (
		<>
			<div style={{position: "relative", overflowX: "hidden"}}>
				<img src={SunAndMoon} alt="sun and moon image" className="rotate-opposite" height={720} style={{position: "absolute", right: "-360px", top: "-360px", rotate: "45deg", zIndex: "1003"}} />
				<div className='container full-vh hero d-flex flex-column justify-content-center' id="hero-section" style={{position: "relative", zIndex: "1004"}}>
					<img src={HeroImg} width={128} alt="Avatar picture" className='rounded-circle' />
					<h1 className='intro mt-4'>I'm William Chua 👋</h1>
					<p>Full Stack Web Developer based in Cavite, Philippines</p>	
					<div className='d-flex'>
						<div className='highlight rounded-pill p-2 d-flex gap-3 mt-2 align-items-center'>
							<a href="https://github.com/veenoise/" target='_blank'>
								<img src={GH} height={32}  alt="github logo" />
							</a>
							<a href="https://www.linkedin.com/in/william-eduard-chua/" target='_blank'>
								<img src={LinkedIn} height={32} alt="github logo" />
							</a>
							<a href="https://www.facebook.com/williameduardmchua/" target='_blank'>
								<img src={FB} height={32} alt="github logo" />
							</a>
							<a href={Resume} target='_blank' className='btn btn-bd-primary rounded-pill'>Résumé</a>
						</div>
					</div>
					
				</div>
				<img src={Car} height={32} alt="car" style={{position: "absolute", bottom: "32px", left: "-76px"}} id="car" />
			</div>
			<div style={{height: "32px", backgroundImage: `url(${Grass})`, backgroundSize: "32px", backgroundRepeat: "repeat-x", marginTop: "-32px", zIndex: "1005"}} id='platform'></div>
		</>
	)
}

export default Hero;