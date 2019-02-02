import React, { Component } from 'react'

// Component for rendering background image on top of
// single breed card

export default class SingleBreedImage extends Component {
	render() {
		// inline styling for dynamic url handling
		const url = this.props.url
		const img_holder = {
			"width": "100%",
			"height": "300px",
			"minHeight": "200px",
			"position": "relative",
		}

		const img_holderImage = {
			"height": "100%",
			"position": "relative",
			"background": `url('${url}') no-repeat`,
			"backgroundSize": "cover",
			"backgroundPosition": "center",
		}
		return (
			<div style={img_holder}>
				<div style={img_holderImage}>
				</div>
			</div>
		)
	}
}



