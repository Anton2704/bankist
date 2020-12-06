/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*  console.log(0.1 + 0.2);

 console.log(+'23');

 console.log(Number.parseInt('30px', 10));

 console.log(Number.parseFloat('2.5rem', 10));
 */
/*  console.log(Number.isInteger(23));


console.log(Math.sqrt(25));
console.log(25 ** (1/2));
console.log(8 ** (1/3));

console.log(Math.min(5,18, '23',11,2));
console.log(Math.PI * Number.parseFloat('10px') ** 2);


const randomInt = (min,max) => Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10,20));

console.log(Math.trunc(-23.3));


console.log((2.127).toFixed(2));

console.log(6 % 2 === 0);


const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));

labelBalance.addEventListener('click', function() {
  [...document.querySelectorAll('.movements__row')].forEach(function(row, i) {
    if(i % 2 === 0) row.style.backgroundColor = 'orangered';
    if(i % 3 === 0)  row.style.backgroundColor = 'blue';
  });
  
});
 */

/* const now = new Date();
console.log(now);


console.log(new Date('Nov 10 2020 09:34:54'));
console.log(new Date('December 24, 2015'));

console.log(new Date(account1.movementsDates[0]));


console.log(new Date(3 * 24 * 60 * 60 * 1000));
 */

/* const future = new Date(2037, 10,19,15,23);
console.log(future.getTime());

console.log(new Date(2142246180000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future); */

/* const future = new Date(2037, 10,19,15,23);
console.log(+future);

const calcDaysPassed = (date1, date2) => Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24, 10, 8));
console.log(days1); */

/* const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'RUB',
  useGrouping: true,
};

const num = 3884764.23;

console.log(new Intl.NumberFormat('de-DE', options).format(num));

console.log(new Intl.NumberFormat(navigator.language, options).format(num)); */

/* const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2)=> console.log(`Here is your pizza with ${ing1} and ${ing2}`), 
3000, 
...ingredients
);
console.log('Waiting...');

if(ingredients.includes('spinach')) clearTimeout(pizzaTimer); */

setInterval(function () {
  const now1 = new Date();
  console.log(now1);
}, 3000);
