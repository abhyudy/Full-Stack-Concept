// const dog = {
//   name: "doggie",
//   speaks: "bhow bhow",
// };
// const cat = {
//   name: "cat",
//   speaks: "meow meow ",
// };

// function help to make code line short
// function printstr(animal) {
//   console.log("animal " + dog["name"] + " " + dog["speaks"]);
// }

// animal
// printstr(dog);
// printstr(cat);

// New way to create class by blue print

class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }

  // function - something that is happen on it
  speak() {
    console.log("hi there " + this.speaks);
  }
}

let dog = new Animal("dog", 4, "bhow bhow"); // create object
let cat = new Animal("cat", 4, "meow meow");
cat.speak(); //call function on object
