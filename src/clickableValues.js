
const getWorkingNumbers =(numbers)=>{

    let workingNumbers = [];
    numbers.map((nr, i) => {
      if (nr === null) {
        const index = i + 1;
        const leftOrRightPosition = index % 4;
        if (leftOrRightPosition < 2) {
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
          if (index > 13) {
            // Bottom side
            workingNumbers = [
              numbers[index - 2],
              numbers[index - 5],
              numbers[index]
            ];
          } else if (index < 4) {
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
    return workingNumbers
}

export default getWorkingNumbers

