import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import ReactHearts from "./component/react-heart-rating";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: left;
  color: palevioletred;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Show your love in here</h1>
        <Title>Rating component</Title>
        <ReactHearts
          size={40}
          onChange={newRating => {
            console.log(newRating);
          }}
          emptyIcon={<i className="far fa-star" />}
          halfIcon={<i className="fa fa-star-half-alt" />}
          filledIcon={<i className="fa fa-star" />}
        />
      </div>
    );
  }
}

export default App;
