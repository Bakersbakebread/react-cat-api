import React, { Component } from 'react';
import CatModal from './CatModal'

const headings = [
	'If I fits, I sits.',
	'Cat got your tongue!',
	'You’re purrrrr-ty.',
	'Did someone say catnip?!',
	'Keep calm and purr on',
	'Be PAWsitive.'
]

const randomHeading = headings[Math.floor(Math.random() * headings.length)];

class Main extends Component {
	state = {
		modalShow: false
	};

	render() {
		let modalClose = () => this.setState({ modalShow: false });

		return (
			<div>
				<div className="grid-container">
					<div className="grid-item">
						<h1>{randomHeading}</h1>
						<p className="mb-0">
							A simple tool for displaying information about cat breeds,
						</p>
						<p>
							built using ReactJs, Boostrap and React-Router-Dom
                            <br />
							<button
								className="btn mybtn"
								onClick={() => this.setState({ modalShow: true })}
							>Random Cat Pic
							</button>
							<a
								href="/breeds"
								className="btn mybtn"
							>Breed List
							</a>
						</p>
						<CatModal
								show={this.state.modalShow}
								onHide={modalClose}
							/>
					</div>
				</div>
			</div>
		);
	}
}
export default Main;