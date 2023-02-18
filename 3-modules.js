//* Modules - Encapsulated Code (only share minimum)
//* CommonJS, every file is module (by default)
//info: Node uses CommonJS library under the hood

const names = require('./4-names')
const sayHi = require('./5-utils')
const { items, singlePerson } = require('./6-alternative-flavor')
//const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
//console.log(data);

//console.log(items)
//console.log(singlePerson.name)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
