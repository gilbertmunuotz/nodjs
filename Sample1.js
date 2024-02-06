// console.log('hello');

// console.log(global);

// console.log(__dirname);

// console.log(__filename);

// const {names, ages} = require('./Sample2')

// console.log(names);
// console.log(ages);

// const os = require('os')

// console.log(os.platform(), os.homedir());

const { error } = require('console');
const fs = require('fs')

//Reading Data & Files

// fs.readFile('./Folders/lovet.txt', (error, data) => {
//     console.log(error ? error : data.toString());  Another alternative of toString() is 'utf8' Which is the specific encoding standard character
// })


//Making Folders & Directories

// fs.mkdir('./Folder', (error) => {
//     console.log(error ? error : 'Folder Created');
// })

//Deleting Files

// if (fs.existsSync('./Folder/delete.txt')) {  // Removed extra parentheses
//     fs.unlink('./Folder/delete.txt', (error) => {  // Added `error` parameter
//         console.log(error ? error : 'File Deleted');  // Access error message
//     });
// }

const readStream = fs.createReadStream('./Folder/delete.txt', 'utf8');
const writeStream = fs.createWriteStream('./Folder/NewText.txt')

// readStream.on('data', (chunk) => {
//     console.log('----NEW CHUNK----');
//     console.log(chunk);
//     writeStream.write(chunk);
// })

//Another Option is The Piping Method
readStream.pipe(writeStream)

