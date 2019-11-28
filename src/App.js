import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoadingSpinner from "./Components1/LoadingSpinner";
import IsLoadingHoc from "./Components1/IsLoadingHoc";
import NavBar from "./Components/NavBar";
import MovieCard from "./Components/MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieTab: [
        {
          movieName: "Maleficent",
          src:
            "https://i.pinimg.com/564x/10/bd/ea/10bdea62db2ecf227bfc5aa93dd22cd4.jpg",
          description:
            " Maleficent is a kind-hearted fairy, who is deceived by the love of her life, Stefan. Soon, she places a curse on his daughter, Aurora, in order to avenge her thirst for justice."
        },
        {
          movieName: "Aladdin",
          rating: 4,
          src:
            "https://i.pinimg.com/564x/0f/24/fa/0f24fadd1a82ec31291c8fb22718d16a.jpg",
          description:
            "In 1992, the first Aladdin charmed its way into the hearts of kids across the country. I was 10, the same age as my daughters are now when I saw Aladdin and the music struck me the most. When I…"
        },
        {
          movieName: "Bond: One last mission",
          src:
            "https://i.pinimg.com/564x/fc/4f/13/fc4f13d9b91928312e3caa2a008500d8.jpg",
          description: "Last movie of the series of James Bond"
        }
      ],
      filteredTab: [],
      filteredTabByRate: [],
      minrate: 0,
      isLoading:false
    };
  }

  onChange = newRate => {
    this.setState({
      minrate: newRate
    });
  };

  addToMovieTab = newMovie => {
    this.setState({ movieTab: [...this.state.movieTab, newMovie] });
  };
  sortByName = name => {
    this.setState({
      filteredTab: this.state.movieTab.filter(el => el.movieName.includes(name))
    });
  };
  sortByRating = rating => {
    this.setState({
      filteredTabByRate: this.state.movieTab.filter(el => el.rating == rating)
    });
  };

  render() {
    return (this.state.isLoading?
    (  <div className="App">
        <NavBar
          sortByName={this.sortByName}
          sortByRating={this.sortByRating}
          onChange={this.onChange}
          minrate={this.state.minrate}
        />
        <MovieCard
          addToMovieTab={this.addToMovieTab}
          movieTab={this.state.movieTab}
          filteredTab={this.state.filteredTab}
          filteredTabByRate={this.state.filteredTabByRate}
        />
      </div>):IsLoadingHoc(LoadingSpinner)
    );
  }
  componentDidMount(){
    setInterval(()=>this.setState({isLoading:true}),2000)
  }
}
