const arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]

  const arrOfPlayers = [{}];
  
  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []

  class people{
    constructor(){
      this.name;
      this.id;
      this.age;
      this.skillSet;
      this.placeBorn;
    }
  }
  
  class player {
    constructor(){
      this.name;
      this.id;
      this.age;
      this.skillSet;
      this.placeBorn;
    }
  }

  class blueTeammate extends player {
    constructor(){
    }
  }
  class redTeammate {
    constructor(){}
  }
  
  const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    listElement.innerHTML = ''
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      console.log(li);
      const button = document.createElement("button")
      button.innerHTML = "Make Player"
      button.addEventListener('click', function() {makePlayer(person)} )
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
  }

  
  const makePlayer = (person) => {
    console.log(`li ${person} was clicked!`)
    //splice from arrOfPeeps at indexOf(person)
    //push person to new array
    //redisplay arrOfPeople
    //display listOfPlayers (create function to display list of players)
  }