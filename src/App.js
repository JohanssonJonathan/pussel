import React, { Component } from "react";
import "./App.css";
import getWorkingNumbers from "./clickableValues";
import Number from "./Number";
import Button from "./Button";
import { CSSTransition } from "react-transition-group";

class App extends Component {
  state = {
    correctNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null],
    currentNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null],
    possibleNumbersToClick: [],
    shuffle: false,
    shuffleDone: false
  };

  startShuffle = value => {
    let shuffled = this.state.currentNumbers
      .map(a => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map(a => a.value);

    this.setState({
      shuffle: value && true,
      currentNumbers: value ? this.state.currentNumbers : shuffled
    });
  };

  componentDidMount() {
    this.startShuffle();
  }

  setNewPossibleNumbersToClick = (i, possibleNumbersToClick) => {
    const { currentNumbers } = this.state;

    const pressedCorrectNr = possibleNumbersToClick.filter(
      nr => currentNumbers[i] === nr
    );
    if (pressedCorrectNr.length > 0) {
      const newNumbers = currentNumbers.map(nr => {
        if (nr === null) {
          return pressedCorrectNr[0];
        } else if (pressedCorrectNr[0] === nr) {
          return null;
        } else {
          return nr;
        }
      });

      this.setState({
        currentNumbers: newNumbers
      });
    }
  };

  componentDidUpdate() {
    if (this.state.shuffleDone) {
      this.startShuffle();
      this.setState({ shuffleDone: false });
    }
  }
  render() {
    const { currentNumbers, shuffle, shuffleDone, correctNumbers } = this.state;
    const isEqual = currentNumbers.filter((nr, i) => nr === correctNumbers[i]);

    return (
      <div>
        <CSSTransition
          in={shuffle}
          classNames="main-container"
          timeout={200}
          onEntered={() => this.setState({ shuffleDone: !shuffleDone })}
        >
          <div
            className="main-container"
            style={{ transform: shuffle ? "rotateY(180deg)" : "rotateY(0deg)" }}
          >
            {currentNumbers.map((nr, i) => {
              const indexVal = getWorkingNumbers(currentNumbers).filter(
                item => nr === item
              );

              return (
                <Number
                  nr={nr}
                  indexVal={indexVal}
                  key={i}
                  onClick={() =>
                    this.setNewPossibleNumbersToClick(
                      i,
                      getWorkingNumbers(currentNumbers)
                    )
                  }
                />
              );
            })}
          </div>
        </CSSTransition>

        <div className="shuffle-container">
          <Button onClick={() => this.startShuffle(true)}>Shuffle</Button>
          {isEqual.length === 16 && (
            <h4 className="finished">Congratulations you made it!</h4>
          )}
        </div>
      </div>
    );
  }
}

export default App;
