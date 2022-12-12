//commonJS, every file is a module (by default)
//modules - encapsulate code (only share minimum)

//this tutorial extends and uses files from 3 to 7


//importing with the key word required
const names = require('./4-names')
const display =require('./5-utils');
const alternative =require('./6-alternative-export');

console.log(alternative);
console.log(alternative.item);
console.log(alternative.singlePerson);
//destructuring object names
const{boni,emma}=names;

display("susan");
display(boni);
display(emma);

require('./7-add');
