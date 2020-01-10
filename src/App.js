import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import MainPage from './components/MainPage';
import { Link } from 'react-router-dom';

function App() {
	return (
		<div className="demo-big-content">
			<Layout>
				<Header title="Title" scroll>
					<Navigation>
						<Link to="/projects">Projects</Link>
						<Link to="/contact">Contact</Link>
					</Navigation>
				</Header>
				<Drawer title="Title">
					<Navigation>
						<Link to="/projects">Projects</Link>
						<Link to="/contact">Contact</Link>
					</Navigation>
				</Drawer>
				<Content>
					<div className="page-content" />
					<MainPage />
				</Content>
			</Layout>
		</div>
	);
}

export default App;
