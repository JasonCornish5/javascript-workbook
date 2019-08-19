//Requirement #1

function day() {
  let callTime = Date();
  console.log(callTime);
}
day();

//Requirement #2

function convertInt(a) {
  let integer = parseInt(a, 10);
  console.log(integer);
}
convertInt("27");

//Requirement #3

function convertNum(a) {
  let integer = a.toString();
  console.log(integer);
}
convertNum(27);

//Requirement #4

function sanityCheck(a, b, c, d, e, f) {
  console.log(typeof a + " " + b + " " + c + " " + d + " " + e + " " + f);
}
sanityCheck(true, null, undefined, 1, 100/'twenty', 'IM A STRING');

//Requirement #5

function plus(a, b) {
  let addition = a + b;
  console.log(addition);
}plus(10,20);

//Requirement #6

var valOne = true;
var valTwo = true;

function trueTest(a, b) {
  if (a && b === true) {
    function winner() {
      console.log('I win! I win!')
    }
    winner();
  }
  else {
    console.log('Man that shit aint true');
  }
}

trueTest(valOne, valTwo);

//Requirement #7

var valThree = false;

function trueTestTwo(a, b) {
  if (a || b === true) {
    function winner() {
      console.log('This is some true shit dawg');
    }
    winner();
  }

  else {
    console.log('Why you always lying?')
  }
}

trueTestTwo(valOne, valThree);

//#Requirement #8

var valFour = "false";

function falseTest(a, b) {
  if (a && b === false) {
    function winner() {
      console.log('This is some fake news fam');
    }
    winner();
  }

  else {
    console.log('Why you gotta be so trruuueeeee');
  }
}

falseTest(valOne, valFour);