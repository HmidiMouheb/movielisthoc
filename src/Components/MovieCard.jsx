import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "./MovieCard.css";
import AddMovie from "./AddMovie";
import Rating from "./rating";

export default class MovieCard extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="cards-container">
        {(this.props.filteredTab.length
          ? this.props.filteredTab
          : this.props.filteredTabByRate.length
          ? this.props.filteredTabByRate
          : this.props.movieTab
        ).map((el, i) => {
          return (
            <Card key={i} className="all-container" style={{ width: "18rem" }}>
              <Card.Img
                className="card-img"
                variant="top"
                src={el.src}
                alt="movie"
              />
              {/* <p>{el.rating}</p> */}
              <Card.Body className="body-container">
                <Card.Title className="card-title">{el.movieName}</Card.Title>
                <Card.Text className="card-text">{el.description}</Card.Text>
                <Button className="watch" variant="secondary">
                  Watch <br />
                  <Rating count={el.rating} />
                </Button>
              </Card.Body>
            </Card>
          );
        })}

        <AddMovie addToMovieTab={this.props.addToMovieTab} />
      </div>
    );
  }
}
