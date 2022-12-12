// exloring the path module
const { join } = require('path');
const path = require('path');

//checking the path separator using the sep method
console.log(path.sep);

// fragment to make a path using the join method
const filepath = path.join('./content','subfolder','text.txt');
console.log(filepath);

//getting the basename of a path using the basename method
const basename= path.basename(filepath);
console.log(basename);

//getting the absolute path using the resolve method 
const absolute = path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolute);
