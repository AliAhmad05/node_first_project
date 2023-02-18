//* Global
/***/
//info: There is no Window object in Node, it is in Vanilla JS
/**
 * @ GLOBALS    - NO WINDOW !!!!
 *
 * @ __dirname  - gives path to current directory
 * @ __filename - file name
 * @ require    - function to use modules (CommonJS)
 * @ module     - info about current module (file)
 * @ process    - info about env where the program is being executed
 */
console.log(__filename)

setInterval(() => {
  console.log('hello world')
}, 1000)
