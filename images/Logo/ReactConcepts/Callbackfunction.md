🧠 What is a Callback Function?



A callback function is simply a function passed as an argument to another function, so it can be called (“called back”) later by that function.



👉 In other words:



“You give a function to another function, and trust it to call your function when it’s ready.”



🧩 Example (Simple Callback)



**function greet(name) {**

  **console.log("Hello " + name);**

**}**



**function processUserInput(callback) {**

  **const name = "Faisal";**

  **callback(name); // calling back the passed function**

**}**



**processUserInput(greet);**





Explanation:



greet is a callback function.



processUserInput doesn’t know what to do with the data — it just “calls back” the function you gave it.



This pattern allows custom behavior to be injected dynamically.



⚙️ Callback Inside Array Methods (like map, filter, forEach)



All array iteration methods (like .map(), .filter(), .forEach()) use callbacks internally.

They call your function once for each element in the array.



Example — Using map()





**const numbers = \[1, 2, 3, 4];**



**// map() takes a callback function as an argument**

**const doubled = numbers.map(function(num) {**

  **return num \* 2;**

**});**



**console.log(doubled); // \[2, 4, 6, 8]**





Here:



.map() receives a callback function (num) => num \* 2.



For each item in numbers, it “calls back” your function.



The return values form a new array.



✅ Arrow Function Version (Common in React)



**const doubled = numbers.map(num => num \* 2);**



Cleaner and more common in modern code.



💡 Why Are Callbacks So Important?



They allow asynchronous operations (e.g. waiting for data to load, animations, etc.).



They enable higher-order functions (functions that work with other functions).



They are the foundation for React event handlers, useEffect, map rendering, and fetch API.



🧠 Real React Example



**const names = \["Ali", "Sara", "Faisal"];**



**function App() {**

  **return (**

    **<ul>**

      **{names.map((name) => (**

        **<li key={name}>{name}</li> // ← callback runs for each name**

      **))}**

    **</ul>**

  **);**

**}**





The map() callback returns a new <li> element for each name.



React then renders the new list of elements.

