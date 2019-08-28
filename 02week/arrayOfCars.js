let cars = ['Ford', 'BMW', 'Jeep', 'Kia'];
console.log(cars.length);

let moreCars = ['Audi', 'Mercedez', 'Chevy', 'Honda'];

let totalCars = cars.concat(moreCars);
console.log(totalCars)

console.log(cars);
console.log(moreCars);

console.log(totalCars.indexOf('Honda'));

console.log(totalCars.lastIndexOf('Ford'));

let stringOfCars = totalCars.join(" ");
console.log(stringOfCars);

totalCars = stringOfCars.split(" ");
console.log(totalCars);

let carsInReverse = totalCars.reverse();
console.log(carsInReverse);
console.log(totalCars);

carsInReverse = carsInReverse.sort();
console.log(carsInReverse.indexOf('Audi'));
console.log(carsInReverse);

let removedCars = carsInReverse.slice(3 , 5);

console.log(removedCars);
// console.log(carsInReverse);

console.log(carsInReverse.splice(1, 2));
console.log(carsInReverse);

console.log(carsInReverse.push('BMW', 'Chevy'));
console.log(carsInReverse);

console.log(carsInReverse.pop());
console.log(carsInReverse);

console.log(carsInReverse.shift());
console.log(carsInReverse);

console.log(carsInReverse.unshift('Mustang'));
console.log(carsInReverse);

let numbers = [23, 45, 0, 2];

numbers.forEach(function(element) {
  element++;
  element++;
  console.log(element);
  });

  //galvanitic and alexxest92 worked on this with me