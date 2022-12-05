const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
function slice(st, end) {
  let modifiedArray = [];
  for (let i = st; i < end - 1; i++) {
    modifiedArray.push(foods[i]);
  }
  return modifiedArray;
}
// Progression 2:
function spliced() {
  let res = [...foods];
  let elm = ['noodles', 'icecream'];
  res.splice(2, 0, ...elm);
  return res;
}
// Progression 3:

// Progression 4:

// Progression 5:

// Progression 6:

// Progression 7:
