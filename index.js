console.log("Testing");

const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("Testing");
// Interpolated
let variable = "👍";
console.log("This is a %s string", "👍");
console.log(`This is a ${variable} string`);
// Styled
console.log(
  "%c Manipulate this text",
  "font-size: 10px; background-color: red; color: blue"
);
// warning!
console.warn("Go back, bad decision ✋");

// Error :|
console.error("Nope, just NO");

// Info
console.info("Penguins have knees, they're just hiding under the suit");

// Testing - If false, throws error, if true nothing happens - no console message
console.assert(1 === 5, "The math ain't mathing");

const p = document.querySelector("p");
console.assert(p.classList.contains("what?"), "Uh oh");

// clearing - Weirdly unclear what it's purpose is??
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p); //for dropdown view of element - all properties and methods

// Grouping together

dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`); // also console.group(`${dog.name}`); groupCollapsed means they are by default collapsed
  console.log(`And the best dog in the world is... ${dog.name}`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
  console.log(`That's ${dog.age} in human years.`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("What?");
console.count("What?");
console.count("the?");
console.count("What?");
console.count("the?");
console.count("What?");
console.count("hell?");
console.count("What?");
console.count("What?");
console.count("hell?");
console.count("the?");
console.count("hell?");

// timing - Time it takes to fetch data
console.time("Fetching data");
fetch("https://api.github.com/users/LJ-Fryer")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("Fetching data");
    console.log(data);
  });
// table

console.table(dogs);
