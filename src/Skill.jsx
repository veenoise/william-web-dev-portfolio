import Bootstrap from './assets/bootstrap.png'
import JQuery from './assets/jquery.png'
import HTML from './assets/html.png'
import CSS from './assets/css.png'
import JS from './assets/js.png'
import ReactLogo from './assets/react.svg'
import Tailwind from './assets/tailwind.png'
import Flask from './assets/flask.png'
import Python from './assets/python.png'
import MySQL from './assets/mysql.png'
import PostgreSQL from './assets/postgresql.png'
import SQLite from './assets/sqlite.png'
import Fedora from './assets/fedora.png'
import Figma from './assets/figma.png'
import GitHub from './assets/github.png'
import VSCode from './assets/vscode.png'
import Vim from './assets/vim.png'
import Linux from './assets/linux.png'

function Skill() {
	return (
		<>
			<div className="background-highlight" style={{position: "relative", zIndex: "10001"}}>
				<div className="container py-5">
					<h1 className="mb-5 d-flex justify-content-center">Skills</h1>
					<h4>Front-end</h4>
					<div className='d-flex flex-wrap gap-4 justify-content-center mb-4 rounded bg-light p-3'>
						<img src={HTML} height={48} alt="jquery logo" />
						<img src={CSS} height={48} alt="jquery logo" />
						<img src={JS} height={48} alt="jquery logo" />
						<img src={ReactLogo} className='rotate' height={48} alt="jquery logo" />
						<img src={Bootstrap} height={48} alt="jquery logo" />
						<img src={Tailwind} height={48} alt="jquery logo" />
						<img src={JQuery} height={48} alt="jquery logo" />
					</div>
					
					<h4>Back-end</h4>
					<div className='d-flex flex-wrap gap-4 justify-content-center mb-4 rounded bg-light p-3'>
						<img src={Python} height={48} alt="jquery logo" />
						<img src={Flask} height={48} alt="jquery logo" />
						<img src={MySQL} height={48} alt="jquery logo" />
						<img src={PostgreSQL} height={48} alt="jquery logo" />
						<img src={SQLite} height={48} alt="jquery logo" />
					</div>

					<h4>Tools</h4>
					<div className='d-flex flex-wrap gap-4 justify-content-center rounded bg-light p-3'>
						<img src={Figma} height={48} alt="jquery logo" />
						<img src={GitHub} height={48} alt="jquery logo" />
						<img src={Linux} height={48} alt="jquery logo" />
						<img src={Fedora} height={48} alt="jquery logo" />
						<img src={VSCode} height={48} alt="jquery logo" />
						<img src={Vim} height={48} alt="jquery logo" />
					</div>
				</div>				
			</div>
		</>
	)
}

export default Skill;