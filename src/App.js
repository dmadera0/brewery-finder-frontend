import React, { Component } from 'react';
import './App.css';
import Breweries from './Components/Breweries';
import Favoritedbreweries from './Components/FavoritedBreweries'

class App extends Component {

  state = {
    isLoggedIn: false,
    allBreweries: [],
    favoritedBreweries: [],
    userAge: ""
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
    // fetch('http://localhost:7000/favorites',{
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   body: JSON.stringify(

    //   )
    //   }
    // })
  }

  removeFromFavorites = (clickedBrewery) => {
    const thatBrewery = this.state.favoritedBreweries.filter(brewery => {
      return brewery.id !== clickedBrewery.id
    })

    this.setState({
      favoritedBreweries: [...thatBrewery]
    })
  }

  verifyUserAge = () => {
    if (this.state.userAge >= 21 ) {
      this.setState({
        isLoggedIn: true
      })
  } else {
    window.alert("You are to effin young hombre")
  }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  signOut = () => {
    this.setState({
      isLoggedIn: false,
      userAge: ""
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Brew Finder!</h1>
        
        <main>
          {this.state.isLoggedIn ? 
          <div className="header">
            <img src="https://brew.sh/assets/img/homebrew-256x256.png"></img>
            <button onClick={this.signOut}>Sign Out</button>
            <section className = "favorites">
              <h2>Favorites</h2>
              <Favoritedbreweries 
                breweries={this.state.favoritedBreweries}
                removeFromFavorites={this.removeFromFavorites}
              />
            </section>
            <section className='all-breweries'>
              <h2>All Breweries</h2>
              <Breweries 
                breweries={this.state.allBreweries} 
                addToFavorites={this.addToFavorites}
              />
            </section>
          </div> : 
          <div>
          <img src="https://i.imgur.com/lainPny.gif"></img>
            <form>
              <input name="name" placeholder="enter name"></input>
              <input 
                onChange={this.handleChange}
                name="userAge" 
                value={this.state.userAge} 
                placeholder="enter age">
              </input>
              <button onClick={this.verifyUserAge}>Verify Age</button>
            </form>
          </div>
          }
        </main>
      </div>
    );
    }
}

export default App;
