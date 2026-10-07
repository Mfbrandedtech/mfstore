🧩 useEffect() — Side Effects and Lifecycles

🧠 What is a “Side Effect”?



A side effect is anything your component does that affects something outside of React’s rendering process.

For example:



Fetching data from an API



Setting up event listeners



Using setTimeout or setInterval



Directly manipulating the DOM



Logging to the console (technically also a side effect)



React components should ideally be pure functions — meaning:



For the same input (props + state), they should always return the same output (UI).



But side effects break this rule — that’s why React gives us a separate place to handle them:

👉 useEffect()



⚙️ Syntax of useEffect



**import { useEffect } from "react";**



**useEffect(() => {**

  **// 1️⃣ Code that causes side effects (runs after render)**

  **console.log("Component rendered");**



  **// 2️⃣ Optional cleanup function**

  **return () => {**

    **console.log("Component unmounted or effect re-runs");**

  **};**

**}, \[dependencies]);**





📅 When Does useEffect Run?



It depends on the dependency array (\[]):



Dependency Array	When It Runs			Example Use Case

No array		After every render		Logging, debugging

Empty array \[]		Once after first render		Fetching data on mount

\[count]			When count changes		Responding to specific state changes



Example: 



**import { useState, useEffect } from "react";**



**function Counter() {**

  **const \[count, setCount] = useState(0);**



  **// Effect that runs whenever count changes**

  **useEffect(() => {**

    **console.log(`Count changed: ${count}`);**



    **// Optional cleanup example**

    **return () => {**

      **console.log(`Cleaning up previous count: ${count}`);**

    **};**

  **}, \[count]);**



  **return (**

    **<button onClick={() => setCount(count + 1)}>**

      **Clicked {count} times**

    **</button>**

  **);**

**}**





🧩 Each time you click:



React re-renders the component.



useEffect runs after the DOM updates.



The cleanup runs before the effect re-runs.





🧩 1. What Is a Pure Function?



A pure function is a function that satisfies two key rules:



✅ Rule 1: Deterministic



Given the same inputs, it always returns the same output.



Example:



**function add(a, b) {**

  **return a + b;**

**}**



add(2, 3) will always return 5, no matter when or how many times you call it.



✅ Rule 2: No Side Effects



It doesn’t change anything outside its own scope.



That means:



It doesn’t modify global variables



It doesn’t change parameters passed to it



It doesn’t perform network requests, log to console, or manipulate the DOM



Example (❌ impure):



**let count = 0;**

**function increment() {**

  **count++; // modifies external variable**

**}**





Example (✅ pure):



**function increment(count) {**

  **return count + 1;**

**}**





⚡ 2. What Are Side Effects?



A side effect is anything a function does that affects the outside world — something beyond returning a value.



Common side effects include:



Changing global or external state



**total += 1;**



Making API calls (fetch, axios)



Writing to localStorage



Manipulating the DOM manually



Logging to console



Setting timers (setTimeout, setInterval)



Updating state in React (setState)



Basically, if a function interacts with the “outside world” — it has a side effect.



⚛️ 3. Why React Cares About This



React’s rendering logic assumes that your components behave like pure functions of their props and state:





**UI = f(state, props)**



That’s why React can:



Call your components multiple times



Compare results for reconciliation (virtual DOM)



Batch state updates for performance



If your component function causes side effects during rendering, it breaks these assumptions and React can behave unpredictably.



That’s why React strictly separates “rendering” (pure) from “side effects” (impure):



Rendering happens inside the function component (pure).



Side effects should go inside useEffect (or other effect hooks).



🔍 Example





**function Counter({ start }) {**

  **const \[count, setCount] = useState(start);**



  **// ❌ BAD: side effect inside render**

  **console.log('Counter rendered!');** 



  **// ✅ GOOD: side effect isolated**

  **useEffect(() => {**

    **console.log('Component mounted or updated');**

  **}, \[count]);**



  **return <button onClick={() => setCount(count + 1)}>{count}</button>;**

**}**





🧩 1. “It doesn’t change parameters passed to it” — what does that mean?



When we say a pure function doesn’t change its parameters, we mean it shouldn’t mutate the input values it receives.



Example (impure)



**function addItem(arr, item) {**

  **arr.push(item); // ❌ modifies the original array (parameter)**

  **return arr;**

**}**



**const list = \[1, 2];**

**addItem(list, 3);**

**console.log(list); // \[1, 2, 3] — changed!**



Here, the function changed the array that was passed into it.

That means calling addItem() has side effects outside of itself — it mutated an external object.



Example (pure)



**function addItem(arr, item) {**

  **return \[...arr, item]; // ✅ returns a new array, leaves input untouched**

**}**



**const list = \[1, 2];**

**const newList = addItem(list, 3);**

**console.log(list);    // \[1, 2] — unchanged**

**console.log(newList); // \[1, 2, 3]**





So, a pure function never alters its inputs — it derives a result, it doesn’t cause changes.



⚛️ 2. Why updating state counts as impure (even though React uses state)



You’re right — React components read from props and state like a pure function:



**UI = f(props, state)**





But when you call setState (or setCount, etc.), that’s not “reading” state — that’s causing a change in React’s internal data.

And causing a change is, by definition, a side effect.



Let’s illustrate 👇



⚙️ Think of this example





**function Counter({ start }) {**

  **const \[count, setCount] = useState(start);**



  **if (count < 0) {**

    **setCount(0); // ❌ impure! changes state \*during rendering\***

  **}**



  **return <p>{count}</p>;**

**}**





Why is this bad?



The component is called to calculate what to render.



But while rendering, it changes state.



That triggers another render — which again changes state — and boom ⚠️ → infinite loop.



React expects rendering to be pure:



“Given the same props and state, produce the same UI.”



But setCount() changes state, meaning the render is no longer pure — it caused a side effect (a state update).



That’s why React forbids state updates during render.

You can update state after render — e.g., in useEffect, event handlers, or async callbacks — because those happen outside the pure render phase.



✅ Correct way



**function Counter({ start }) {**

  **const \[count, setCount] = useState(start);**



  **useEffect(() => {**

    **if (count < 0) setCount(0); // ✅ runs after render (side effect allowed)**

  **}, \[count]);**



  **return <p>{count}</p>;**

**}**





Here, the render stays pure — it only reads state and props.

The effect runs afterward, performing the impure update safely.



🧠 So, in summary



Concept				Pure (allowed in render)	Impure (goes in useEffect)

Reading props/state		✅				—

Computing derived data		✅				—

Changing state			❌				✅

Fetching data			❌				✅

Logging / timers / DOM access	❌				✅





