import React, { Component } from "react";
import "./AddMovie.css";

export default class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: "",
      src: "",
      description: "",
      rating: "",
      addingMovieInput: false
    };
  }

  addToList = e => {
    e.preventDefault();

    if (
      this.state.movieName &&
      this.state.src &&
      this.state.description &&
      this.state.rating
    ) {
      this.props.addToMovieTab(this.state);
    } else {
      alert("Fill your fucking cases");
    }

    this.setState({
      movieName: "",
      src: "",
      description: "",
      rating: ""
    });
    this.setState({addingMovieInput:!this.state.addingMovieInput})
    console.log(this.state)

  };
  render() {
    return this.state.addingMovieInput ? (
      <div className="add-movie-container">
        <form className="add-movie" action="" onSubmit={this.addToList}>
          <label htmlFor=""></label>
          <input
            placeholder="Add Movie Name"
            type="text"
            value={this.state.movieName}
            onChange={e => this.setState({ movieName: e.target.value })}
          />
          <label htmlFor=""></label>
          <input
            placeholder="Add Photo Source"
            type="url"
            value={this.state.src}
            onChange={e => this.setState({ src: e.target.value })}
          />
          <label htmlFor=""></label>
          <input
            placeholder="Add Description"
            type="comment"
            value={this.state.description}
            onChange={e => this.setState({ description: e.target.value })}
          />
          <label htmlFor=""></label>
          <input
            placeholder="Add Rating"
            type="number"
            value={this.state.rating}
            onChange={e =>
              this.setState({
                rating: e.target.value <= 5 ? e.target.value : ""
              })
            }
          />

          <button>AddMovie</button>
        </form>
      </div>
    ) : (
      <button
        type="button"
        onClick={() =>
          this.setState({ addingMovieInput: !this.state.addingMovieInput })
        }
      >
        ADD
      </button>
    );
  }
}
