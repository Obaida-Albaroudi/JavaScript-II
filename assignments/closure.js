// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let name="Obaida Albaroudi";
const name_age=()=>{
  let age=22;
  const join=()=>{
    intro= "Hey, my name is "
    return intro + name +" and I am " + age + " years old";
  };
  return join;
};

const x=name_age()
console.log(x());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let counter=0;
  counting =()=>{
    counter=counter+1;
    return counter;
  };
  return counting;
  // Return a function that when invoked increments and returns a counter variable.
};
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
