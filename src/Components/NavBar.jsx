import React, { Component } from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import "./NavBar.css";
import Rating from "./rating";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  findSearch = e => {
    e.preventDefault();

    this.props.sortByName(e.target.value);
  };
  render() {
    return (
      <React.Fragment>
        <Navbar className="justify-content-center nav-bar">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              onChange={e => this.findSearch(e)}
            />
            <Button>Search</Button>
          </Form>
          <Rating
            count={this.props.minrate}
            onChange={this.props.onChange}
            sortByRating={this.props.sortByRating}
          />
        </Navbar>
      </React.Fragment>
    );
  }
}
