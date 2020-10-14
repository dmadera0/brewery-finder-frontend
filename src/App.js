import React, { Component } from 'react';
import './App.css';
import Breweries from './Components/Breweries';

class App extends Component {

  state = {
    allBreweries: [],
    favoritedBreweries: []
  }

  componentDidMount() {
    fetch('http://localhost:7000/brewhouses')
      .then(response => response.json())
      .then(result => this.setState({allBreweries: result}))
  }

  addToFavorites = (clickedBrewery) => {

    const thisBrewery = this.state.favoritedBreweries.find(brewery => {
      return brewery.id === clickedBrewery.id
    })

    if (!thisBrewery) {
      this.setState({
        favoritedBreweries: [...this.state.favoritedBreweries, clickedBrewery]
      })
    }
    fetch('http://localhost:7000/favorites',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      body: JSON.stringify(
        
      )
      }
    })
  }

  // removeFromFavorites = (clickedBrewery) => {
  //   const thatBrewery = this.state.favoritedBreweries.filters(brewery => {
  //     return brewery.id !== clickedBrewery.id
  //   })

  //   this.setState({
  //     favoritedBreweries: [...thatBrewery]
  //   })
  // }

  render() {
    return (
      <div className="App">
        <h1>Brew Finder!</h1>
        <main>
          <section className='all-breweries'>
            <h2>All Breweries</h2>
            <Breweries 
              breweries={this.state.allBreweries} 
              addToFavorites={this.addToFavorites}
            />
          </section>
        </main>
      </div>
    );
    }
}

export default App;
