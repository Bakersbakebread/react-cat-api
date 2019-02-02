import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Home/Loading'
import './BreedList.css'

const API_BREEDS = 'https://api.thecatapi.com/v1/breeds'

export default class BreedList extends Component {
  constructor() {
    super()
    this.state = {
      breeds: [],
      isLoading: true,
      error: null,
      searchString: '',
      filteredBreeds: [],
      isHovered: false,
    }
    // react is very declaritive...
    this.updateSearchString = this.updateSearchString.bind(this)

  }
  // async function to fetch all breeds
  async fetchBreeds() {
    try {
      let response = await fetch(API_BREEDS)
      response = await response.json()
      this.setState({
        ...this.state,
        breeds: response,
        filteredBreeds: response,
        isLoading: false
      })
    } catch (error) {
      console.log(error)
      this.setState({
        ...this.state,
        error,
        isLoading: false
      })
    }
  }
  // update our state on input in /breeds
  updateSearchString(event) {
    this.setState({
      ...this.state,
      searchString: event.target.value,
      filteredBreeds: (event.target.value !== '')
      // breeds which only contain the search string (lowercase comparison for case-insensitive search)
        ? this.state.breeds.filter(breed => {
          return breed.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
        })
        : this.state.breeds
    })
  }
  // componentDidMount wasn't fetching before rendering
  // componentWillMount async fixed this
  async componentWillMount() {
    await this.fetchBreeds()
  }

  render() {

    const { isLoading, filteredBreeds, error } = this.state

    return (
      <div className="container pt-3 pb-5">
      {/* return error if error else don't */}
        {(error ? <p>{error}</p> : null)}
        <input
          type="text"
          value={this.state.searchString}
          onChange={this.updateSearchString}
          placeholder="Enter a cat breed..."
          className="form-control"
        />
        <div className="breed-counter">
          There are {filteredBreeds.length} cat breed matches
        </div>
        <hr style={{ "border": "solid 1px #537c8e" }} />
        <div className="breed-list">
          {
            isLoading
              ? (<Loading />)
              : (filteredBreeds.map(feline => {
                const { id, name } = feline
                return (
                  <Link
                    to={`/breeds/${id}`}
                    className="mybtn"
                    id="breed-item-btn"
                    key={id}>
                    <span>{name}</span>
                  </Link>
                )
              }))
          }
        </div>
      </div>
    )
  }

}
