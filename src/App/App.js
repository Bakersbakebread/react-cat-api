import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from '../Home/Main'
import Navbar from '../Navbar/Navbar'
import BreedList from '../Breeds/BreedList'
import SingleBreed from '../Breeds/SingleBreed'
import ErrorNotFound from '../Errors/NotFound'
import Footer from '../Footer/Footer'
import './App.css'

// quick class render using VScode extension
// https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>

              <Route path="/breeds" component={BreedList} exact />
              <Route path="/breeds/:id" component={SingleBreed} />

              <Route path="/" component={Main} exact />
              {/* 404 route */}
              <Route component={ErrorNotFound} />

            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
