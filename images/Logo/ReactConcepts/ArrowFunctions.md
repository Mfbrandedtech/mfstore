🧩 1. Two Ways to Write Functions

Normal (Function Declaration or Expression)



**function greet() {**

  **console.log("Hello!");**

**}**



or



**const greet = function() {**

  **console.log("Hello!");**

**};**





Arrow Function



**const greet = () => {**

  **console.log("Hello!");**

**};**



They look similar — but behave differently in three key areas:



⚙️ 2. Difference #1 — this Binding

🔹 Normal Function



Normal functions have their own this — it depends on how the function is called, not where it’s written.



Example:



**const user = {**

  **name: "Faisal",**

  **showName: function() {**

    **console.log(this.name);**

  **}**

**};**





**user.showName(); // Faisal**





✅ Works fine — this refers to the object (user).



But if you call it differently:



**const fn = user.showName;**

**fn(); // undefined**





⚠️ Now this refers to the global object (or undefined in strict mode), not user.



🔹 Arrow Function



Arrow functions do not have their own this.

They use this from their lexical scope — the place they were written.



Example:



**const user = {**

  **name: "Faisal",**

  **showName: () => {**

    **console.log(this.name);**

  **}**

**};**



**user.showName(); // undefined ❌**





Why? Because arrow functions inherit this from the outer scope — in this case, the global scope.

So this.name doesn’t refer to user.



✅ Correct with Arrow Function (Lexical Example)



Arrow functions are great inside other functions or classes where you want to preserve the outer this:



**const user = {**

  **name: "Faisal",**

  **greetLater: function() {**

    **setTimeout(() => {**

      **console.log("Hi " + this.name);**

    **}, 1000);**

  **}**

**};**



**user.greetLater(); // Hi Faisal ✅**





If you used a normal function inside setTimeout, it would lose this:



**setTimeout(function() {**

  **console.log("Hi " + this.name); // undefined ❌**

**}, 1000);**





⚙️ 3. Difference #2 — arguments Object



Normal functions have a built-in arguments object (array-like),

which contains all parameters passed to it.



**function showArgs() {**

  **console.log(arguments);**

**}**



**showArgs(1, 2, 3); // \[1, 2, 3]**





Arrow functions ❌ don’t have their own arguments.





**const showArgs = () => {**

  **console.log(arguments); // ReferenceError ❌**

**};**





You can still use rest parameters instead:



**const showArgs = (...args) => {**

  **console.log(args); // \[1, 2, 3]**

**};**





⚙️ 4. Difference #3 — Constructors



Normal functions can be used as constructors with new:



**function Person(name) {**

  **this.name = name;**

**}**



**const p = new Person("Faisal");**

**console.log(p.name); // Faisal ✅**





Arrow functions ❌ cannot be used as constructors — they have no this and no prototype.



**const Person = (name) => {**

**  this.name = name;**

**};**



**const p = new Person("Faisal"); // TypeError ❌**





🧭 Summary Table

Feature	Normal Function				Arrow Function

this	Own this (depends on how called)	Inherits this from outer scope

arguments	Available			Not available

Used as constructor (new)	✅ Yes		❌ No

Syntax	Longer					Shorter

Best used for	Object methods, constructors	Callbacks, short functions, preserving this





🧩 Why Arrow Functions Don’t Have arguments



Every normal function in JavaScript automatically gets a hidden variable called arguments.



It’s like this:



**function add(a, b) {**

  **console.log(arguments); // \[2, 3, 4]**

**}**



**add(2, 3, 4);**





Even though add only defines two parameters (a, b),

arguments still holds all the passed values in a pseudo-array.



But…



⚠️ Arrow functions don’t get their own arguments object.



Because arrow functions don’t create their own scope for this, super, or arguments.

They inherit those from the outer (lexical) scope.



So if you try this:





**const add = () => {**

  **console.log(arguments);**

**};**



**add(1, 2, 3);**



You'll Get:



**ReferenceError: arguments is not defined**





That’s why we need rest parameters instead.





🧭 Rest Parameters to the Rescue



Rest parameters (...args) are a modern replacement for arguments.



They collect all passed parameters into an array.





**const add = (...args) => {**

  **console.log(args);**

**};**



**add(2, 3, 4); // \[2, 3, 4]**





Now args is a real array (not array-like like arguments),

so you can use array methods directly:





**const sum = (...nums) => nums.reduce((a, b) => a + b, 0);**



**console.log(sum(2, 3, 4)); // 9**





⚙️ Why Rest Parameters Are Better Than arguments

Feature		arguments				...rest

Type		Array-like (not a real array)		Real array

Works in	Normal functions only			All functions (including arrow)

Supports destructuring	❌ No				✅ Yes

Simpler \& Modern	❌ No				✅ Yes





💡 Analogy:



Think of arguments as an old car without modern features —

it runs, but clunky.

Rest parameters are the new car with power steering and AC — same job, smoother ride 😄

