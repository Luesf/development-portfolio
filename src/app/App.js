import { useEffect, useState } from 'react';
import './App.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function App() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (event) => {
			setMousePosition({ x: event.clientX, y: event.clientY });
		}
		window.addEventListener('mousemove', handleMouseMove);
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		}
	}
	, []);

  	return (
    	<div className="App">
			<div className='glow'
				style={{
					position: 'fixed',
					top: mousePosition.y,
					left: mousePosition.x,
					transform: 'translate(-50%, -50%)',
					width: '400px',
					height: '400px',
					borderRadius: '50%',
					background: 'radial-gradient(circle, rgba(11,102,106,0.45) 0%, rgba(11,102,106,0.25) 20%, rgba(7,25,82,0.10) 70%, rgba(7,25,82,0.0) 100%)',
					pointerEvents: 'none',
					transition: 'opacity 0.2s ease',
					opacity: 0.4,
					zIndex: 0
				}}
			/>
			<div className='app-container'>
				<div className='main-content-container'>
					<div className='title'>
						<p className='title-prefix'>Hi, my name is </p>
						<h1 className='title-name'>Luis Espinoza</h1>
						<h2>Software Developer | Compliance Manager</h2>
						<p className='title-caption'>I'm a junior Software Developer switching careers after a successful management journey in a financial organization. Passionate and eager to build beautiful and helpful web applications as well as expanding my knowledge in development technologies and technical coding skills in general.</p>
						<div className='links-container'>
							<a className='profile-link' href='https://github.com/Luesf' target='_blank' rel='noopener noreferrer'><FaGithub />Github</a>
							<a className='profile-link' href='https://www.linkedin.com/in/luis-espinoza-6564b81a1/' target='_blank' rel='noopener noreferrer'><FaLinkedin />LinkedIn</a>
						</div>
					</div>
					<div className='projects'>
						<h2 className='projects-title'>Projects:</h2>
						<div className='projects-container'>
							<ul>
								<li>
									<a className='project-item' href='https://contact-keeper-frontend-f0wo.onrender.com' target='_blank' rel='noreferrer'>
										<h3>Contact Keeper</h3>
										<p>CRUD Web application that manages contact information in a SQL database, built with the PERN stack (PostgreSQL, Express, React, Node.js)</p>
									</a>
								</li>
								<li>
									<a className='project-item' href='https://main.d291ovxt4pi42d.amplifyapp.com/' target='_blank' rel='noreferrer'>
										<h3>Landing Page - Ame Home</h3>
										<p>Landing page for a home products instagram shop, mainly developed in React.js</p>
									</a>
								</li>
								<li>
									<a className='project-item' href='https://main.d3kopirdz6tn9u.amplifyapp.com/' target='_blank' rel='noreferrer'>
										<h3>To Do List</h3>
										<p>Simple to do list web application to test and practice React + Redux technologies</p>
									</a>
								</li>
								<li>
									<a className='project-item' href='https://main.dviupdoo9we7s.amplifyapp.com/' target='_blank' rel='noreferrer'>
										<h3>Time Zones Meeting Helper</h3>
										<p>Web application to help users find the best time to meet with people in different time zones, connected to TimeAPI</p>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<footer>	
					<p>Portfolio coded in Visual Studio Code, apps including this portfolio deployed with AWS Amplify and Render.com</p>
				</footer>
			</div>
    	</div>
  	);
}

export default App;
