import { createLighter } from './trafficLighter.js';



createLighter(document.querySelector('#firstLighter'), 2000);
createLighter(document.querySelector('#secondLighter'), 1000);
createLighter(document.querySelector('#thirdLighter'));

const greet = function() {
  console.log('HELLO!', this.title);
  this.title = this.title + 'WASTED';
};

const myObject = {
  title: 'John',
  sayHi: greet
};
const sum = (a) => {

}
console.log(sum(1)(2)(3)()) ;// 6

const myObject2 = {
  title: 'Jane',
  sayHi: greet
};

myObject.sayHi();
console.log(myObject)
myObject2.sayHi();
console.log(myObject2)



