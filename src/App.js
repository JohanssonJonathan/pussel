import React, { Component } from "react";
import "./App.css";
import { isTemplateElement } from "@babel/types";

class App extends Component {
  state = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null],
    workingNumbers: []
  };

  componentDidMount() {
    let shuffled = this.state.numbers
      .map(a => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map(a => a.value);

    this.setState({
      numbers: shuffled
    });
  }

  setNewNumbers =(i,workingNumbers)=>{
    const {numbers}= this.state;

    const pressedCorrectNr = workingNumbers.filter((nr)=>numbers[i]===nr)
    if(pressedCorrectNr.length>0){
      // switch place with null with the new value
      const newNumbers = numbers.map((nr)=>{
        if(nr===null){
          return pressedCorrectNr[0]
        }else if(pressedCorrectNr[0]=== nr){
          return null
        }else{
          return nr
        }
      })  
    
        this.setState({
          numbers:newNumbers
        })
    }
  }

  render() {
    const { numbers } = this.state;

    /* talet den röda är på t.ex. 9%4 eftesom att de är en rad på 4. 
      om siffran blir 1 så är den ute på vänster kant. om den blir 0 så är den på höger kant.
      */
    let workingNumbers = [];
    numbers.map((nr, i) => {
      if (nr === null) {
        const index = i + 1;
        const leftOrRightPosition = index % 4;
        if (leftOrRightPosition === 0 || leftOrRightPosition === 1) {
          if (leftOrRightPosition === 1) {
            //Left side
            if (index < 2) {
              //Up on the left side
              workingNumbers = [numbers[index], numbers[index + 3]];

            } else if (index > 12) {
              //Down left side
              workingNumbers = [numbers[index], numbers[index - 5]];

            } else {
              // Middle of left side
              workingNumbers = [
                numbers[index],
                numbers[index - 5],
                numbers[index + 3]
              ];

            }
          } else {
            //Right side
            if (index < 5) {
              //Up on the right side
              workingNumbers = [numbers[index - 2], numbers[index + 3]];

            } else if (index > 12) {
              //Down on the right side
              workingNumbers = [numbers[index - 2], numbers[index - 5]];

            } else {
              //Middle of right side
              workingNumbers = [
                numbers[index - 2],
                numbers[index - 5],
                numbers[index + 3]
              ];

            }
          }
        } else {
          //In the middle 
          if (index === 15 || index === 14) {
            // Bottom side
            workingNumbers = [
              numbers[index - 2],
              numbers[index - 5],
              numbers[index]
            ];


          } else if (index === 2 || index === 3) {
            // Top side
            workingNumbers = [
              numbers[index],
              numbers[index - 2],
              numbers[index + 3]
            ];

          } else {
            //Center
            workingNumbers = [
              numbers[index + 3],
              numbers[index - 5],
              numbers[index - 2],
              numbers[index]
            ];

          }
        }
      }
    });
   
    return (
      <div className="main-container">
        {numbers.map((nr, i) => (
          <div className="cell" key={i} onClick={()=>this.setNewNumbers(i,workingNumbers)}>
            {nr}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
