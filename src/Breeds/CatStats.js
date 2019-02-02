import React, { Component } from 'react'
import Stars from './Stars'

export default class CatStats extends Component {
    render() {
        return (
            <div>
                <span className="cat-stats">
                    <div className="row">
                        <div className="col text-right">
                            {this.props.title}
                        </div>
                        <div className="col text-left">
                            <Stars rating={this.props.rating} />
                        </div>
                    </div>
                </span>
            </div>
        )
    }
}
