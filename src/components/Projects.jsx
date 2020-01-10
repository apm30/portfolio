import React, { Component } from 'react';
import {
	Tab,
	Tabs,
	Grid,
	Cell,
	Card,
	CardTitle,
	CardText,
	CardActions,
	Button,
	CardMenu,
	IconButton
} from 'react-mdl';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0 };
	}
	toggleCategories() {
		if (this.state.activeTab === 0) {
			return (
				<div className="projects-grid">
					<Card shadow={5} style={{ minwidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background:
									'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png) center / cover'
							}}
						>
							JS project 1
						</CardTitle>
						<CardText>
							CardText CardText CardText CardText CardText CardText CardText
							CardText
						</CardText>
						<CardActions border>
							<Button colored>GitHub</Button>
							<Button colored>Codepen</Button>
							<Button colored>Live Demo</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
					<Card shadow={5} style={{ minwidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background:
									'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png) center / cover'
							}}
						>
							JS project 2
						</CardTitle>
						<CardText>
							CardText CardText CardText CardText CardText CardText CardText
							CardText
						</CardText>
						<CardActions border>
							<Button colored>GitHub</Button>
							<Button colored>Codepen</Button>
							<Button colored>Live Demo</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
				</div>
			);
		} else {
			return (
				<div>
					<h1>React</h1>
				</div>
			);
		}
	}
	render() {
		return (
			<div className="category-tabs">
				<Tabs
					activeTab={this.state.activeTab}
					onChange={tabId => this.setState({ activeTab: tabId })}
					ripple
				>
					<Tab>JavaScript</Tab>
					<Tab>React</Tab>
				</Tabs>

				<section>
					<Grid className="projects-grid">
						<Cell col={12}>
							<div className="content">{this.toggleCategories()}</div>
						</Cell>
					</Grid>
				</section>
			</div>
		);
	}
}

export default Projects;
