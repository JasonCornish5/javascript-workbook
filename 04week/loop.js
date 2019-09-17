let i = 1;
let string1 = [];

// do {
//     i++
//     console.log(i);
// } while (i < 1000);

let person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}

for (var profile in person) {
    let a = person[profile];
    let regex = /\d{4}/;

    if (regex.test(a) == true) {
        let date = a.match(regex);
        if (date % 2 !== 0) {
            console.log(a);
        }
        
    }
}

let arrayOfPersons = [{
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1995",
    gender: "female"
},
 {
    firstName: "Sam",
    lastName: "Garcia",
    birthDate: "Jan 5, 1954",
    gender: "male"
},
 {
    firstName: "Eric",
    lastName: "Lopez",
    birthDate: "Jan 5, 1925",
    gender: "male"
}]
    

arrayOfPersons.map(conLog)

function conLog (arrayOfPersons) {
    console.log(arrayOfPersons);
}

arrayOfPersons.filter(malesOnly);

function malesOnly(element) {
    if (element.gender === "male") {
        console.log(element);
    }
}

let regexSearch = /\d{4}/;
arrayOfPersons.filter(boomers);

function boomers(oldies) {
    let year = oldies.birthDate.match(regexSearch);
    
    if (year < 1990) {
        console.log(oldies);
        console.log('also oldies');
    }
}




