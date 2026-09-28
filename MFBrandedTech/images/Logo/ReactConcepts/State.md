🧠 What Is “State” in React?



Think of state as the memory of your component.

It’s what allows React components to “remember” things over time — like user input, a counter value, or whether a modal is open.



In contrast:



Props → Data passed into a component from the outside (read-only).



State → Data that belongs to the component itself and can change over time.



🧩 Example: Counter Without State (won’t work)



**function Counter() {**

  **let count = 0;**



  **function increase() {**

    **count++;**

    **console.log(count);**

  **}**



  **return (**

    **<div>**

      **<p>Count: {count}</p>**

      **<button onClick={increase}>Increment</button>**

    **</div>**

  **);**

**}**



❌ Problem:

Even though count increases in the console, the UI doesn’t update — because React doesn’t “react” to regular variable changes.



⚙️ The useState Hook



React gives you a special hook to handle dynamic data:



**import { useState } from "react";**



**function Counter() {**

  **const \[count, setCount] = useState(0); // ✅ state variable**



  **function increase() {**

    **setCount(count + 1); // updates state \& triggers re-render**

  **}**



  **return (**

    **<div>**

      **<p>Count: {count}</p>**

      **<button onClick={increase}>Increment</button>**

    **</div>**

  **);**

**}**



✅ How this works:



useState(0) initializes a piece of state with value 0.



React returns two things:



count → the current state value



setCount → a special function that updates it



When setCount() is called → React re-renders the component with the new value.



⚡ Why This Matters



State is local to the component.



Updating state triggers a re-render (React diffs and updates only the changed parts — efficient!).



You can use multiple useState() hooks in one component.



🧪 Quick Practice Thought



Can you guess what happens here?



**setCount(count + 1);**

**setCount(count + 1);**



Answer will be 1 instead of 2



Let’s unpack why that happens, because this is one of the most commonly misunderstood parts of React’s behavior.



⚙️ React Batches State Updates



React doesn’t immediately update the UI each time you call setCount().

Instead, it batches (groups) multiple updates happening inside the same event loop tick — like a click handler — and then re-renders once at the end.



So when you write:



**setCount(count + 1);**

**setCount(count + 1);**



Both calls refer to the same stale value of count (say, 0), so React sets the state to 1 — not 2.



🧩 Correct Way: Using Functional Updates



When your new state depends on the previous state, use the functional form of setState:



**setCount(prevCount => prevCount + 1);**

**setCount(prevCount => prevCount + 1);**





✅ This tells React:



“Hey, use the most recent state value, not the one captured earlier.”



Now the result will correctly be 2.



🧠 Concept Summary



Concept						Behavior

setCount(count + 1)				Uses current render’s count value (might be stale if called multiple times quickly).

setCount(prev => prev + 1)			Always uses the latest value, even when updates are batched.

React batches updates				To improve performance and avoid unnecessary re-renders.





How React schedules and batches these updates in the event loop



We’ll first explain the event loop tick, then how React batches state updates within it.



🌀 What is an “Event Loop Tick”?



JavaScript runs in a single thread and follows an event loop model.

You can think of it like a queue system where tasks are picked and executed one by one.



Each “tick” is one full cycle of the event loop:



JavaScript runs synchronous code (your click handler, etc.)



React batches any state updates during this time.



Once the synchronous code finishes, the event loop moves to the next tick — now React may perform re-renders or flush effects.



So, during one tick, multiple setState() calls can happen, and React waits till the end of that tick to apply them efficiently.



🔁 Step-by-Step Example



Let’s say we have this code:



**function Counter() {**

  **const \[count, setCount] = useState(0);**



  **function handleClick() {**

    **setCount(count + 1);**

    **setCount(count + 1);**

    **console.log("Clicked:", count);**

  **}**



  **return <button onClick={handleClick}>{count}</button>;**

**}**



Step 1️⃣ — Initial Render



count = 0



React renders the button showing 0.



Step 2️⃣ — You click the button



Browser triggers onClick → enters one event loop tick.



React calls handleClick() synchronously.



Inside handleClick():



setCount(count + 1) → schedules an update to 1.



setCount(count + 1) → schedules another update to 1 (still using old count=0).



React doesn’t re-render yet — it’s batching.



console.log(count) logs 0 (because React hasn’t updated yet).



Step 3️⃣ — End of Event Loop Tick



Event loop finishes executing the click handler.



React now processes batched updates → applies final count = 1.



React triggers a re-render → button now shows 1.



🧠 Now Functional Updates Fix This



If you write:



**setCount(prev => prev + 1);**

**setCount(prev => prev + 1);**



Here’s what changes:



Each update reads from the latest committed state, not from the old one.



React executes them in order:



prev = 0 → new state 1



prev = 1 → new state 2



After batching → React re-renders → count = 2.



🧩 Timeline Visualization



Event Loop Tick #1

&nbsp;├── handleClick() starts

&nbsp;│    ├── setCount(0 + 1) → pending update

&nbsp;│    ├── setCount(0 + 1) → pending update

&nbsp;│    └── log(0)

&nbsp;└── handleClick() ends

&nbsp;React batches updates → applies once → re-render → count=1



When using functional updates:



Event Loop Tick #1

&nbsp;├── handleClick() starts

&nbsp;│    ├── setCount(prev => prev + 1) → 1

&nbsp;│    ├── setCount(prev => prev + 1) → 2

&nbsp;│    └── log(0)

&nbsp;└── handleClick() ends

&nbsp;React batches → applies once → re-render → count=2



So, in short:



React waits until the end of the current JavaScript task (event loop tick) before it commits state updates and re-renders.





🧠 What exactly is an event loop tick?



Think of the event loop as a manager that processes different tasks in a queue — one at a time.



Each tick (also called an iteration or turn) of the event loop does this:



Takes one task from the macrotask queue (like setTimeout, fetch, event handlers, etc.).



Runs it completely from start to finish — meaning all synchronous code inside it runs to completion.



Then, before moving to the next macrotask, it clears all microtasks (like Promises or queueMicrotask).



Once all that is done, it starts the next tick.



⚙️ Example to visualize it:



**console.log("Start");**



**setTimeout(() => console.log("Macrotask"), 0);**



**Promise.resolve().then(() => console.log("Microtask"));**



**console.log("End");**



Output: 



**Start**

**End**

**Microtask**

**Macrotask**



Explanation:



Start and End run in the first tick’s synchronous phase.



Then, before the tick ends, JS runs all microtasks (Promise.then).



Finally, the next tick starts and runs the setTimeout callback (macrotask).



So in short:



Each tick = one full cycle of processing synchronous code + microtasks.



Then React (and the browser) get a chance to update the DOM or paint the UI.



🧩 How React uses this:



When you call multiple setState (or setCount) inside one tick (like inside an event handler), React:



Batches them together,



Updates the state after the tick ends (before the browser paints).



That’s why this:



**setCount(count + 1);**

**setCount(count + 1);**

**console.log(count); // still old value**





Logs the old value — React waits until the tick ends to apply the updates.



✅ Summary:



A tick = one full run of the JS call stack + microtasks.



React batches all updates within a single tick.



The UI updates after the tick ends (before the browser paints).



**Why microtasks run within the same tick, while macrotasks are scheduled for a future tick?**



🧠 First, understand what JS is optimizing for



JavaScript is single-threaded — it runs one thing at a time.

So the event loop’s job is to make sure:



The UI doesn’t freeze.



Promises, async/await, etc., still run predictably.



Timing-based tasks (setTimeout, click events, etc.) don’t get starved.



To make this possible, the event loop divides work into two kinds of queues:



⚡ Microtasks — “Run immediately after current code finishes”



These are high-priority callbacks, like:



Promise.then() / await



queueMicrotask()



process.nextTick() (in Node.js)



They’re called micro because:



They’re tiny follow-ups that should happen right after the current script, before the browser paints or processes other events.



🧩 Why run in the same tick?



Because microtasks often depend on the current operation finishing.



For example:



**console.log("1");**



**Promise.resolve().then(() => console.log("2"));**



**console.log("3");**



Output:



**1**

**3**

**2**



Here, the microtask (.then) needs to run immediately after the current code, because maybe another operation depends on its result.



So the event loop says:



“Okay, finish all synchronous code, then flush all microtasks, before doing anything else.”



This makes Promises feel “almost synchronous,” which is essential for predictable async code.



🕐 Macrotasks — “Run in the next event loop tick”



These are bigger, scheduled tasks, like:



setTimeout()



setInterval()



setImmediate() (Node)



I/O events, click, fetch, etc.



They’re deferred until after the current tick completely finishes — meaning:



All sync code ✅



All microtasks ✅



Then → start next microtask



💡 Why not run macrotasks immediately?



Because that would block:



Rendering



UI responsiveness



Other queued work (timers, input events, etc.)



Macrotasks are meant for independent events, not follow-ups to the current computation.



So the browser defers them to the next loop cycle (next tick) to give breathing space.



🪄 Quick Analogy



Imagine a chef 🧑‍🍳 working in a kitchen:



Main script (synchronous) → Cooking one order.



Microtasks → Tiny garnishes and toppings that must be added before the plate leaves the counter.



Macrotasks → New orders waiting in line.



Chef rule:



Finish the dish → Add garnishes (microtasks) → Then take the next order (macrotask).



🧾 Summary Table



Type		Examples		Runs When			Priority			Reason

Microtasks	Promise.then, 

&nbsp;		queueMicrotask, await	Right after current code 

&nbsp;					(same tick)			High				For immediate follow-ups

Macrotasks	setTimeout, 

&nbsp;		setInterval, I/O	Next tick			Normal				Keeps UI + timing consistent





🧩 The Main Script Is the First Macrotask



When your JS file starts executing — say script.js — the browser (or Node.js) doesn’t run it “outside” the event loop.

Instead, it adds the whole script as the first macrotask in the macrotask queue.



Then the event loop starts processing it just like any other macrotask:



1️⃣ Start of Tick 1:

→ Take the main script macrotask.

→ Run all its synchronous code line by line (declarations, loops, function calls, etc.).



2️⃣ During that run:

→ Async things like setTimeout, fetch, or Promise callbacks are scheduled for later — not executed now.

→ They go into their respective queues (macrotask queue for timeouts, microtask queue for Promises).



3️⃣ End of Tick 1:

→ When the main script’s synchronous code is done, JS looks into the microtask queue and executes all of them (e.g., all resolved Promise callbacks).



4️⃣ Next Ticks:

→ Now the event loop picks the next macrotask (like your setTimeout callback), runs it fully, then flushes microtasks again.



🧠 So yes:



The “main script macrotask” runs first, and within it all synchronous code executes before anything async happens.



Here’s a quick demo showing that the script itself is treated like the first macrotask:



console.log("Script start"); // Sync inside main script (first macrotask)



setTimeout(() => console.log("Timeout callback (macrotask)"), 0);



Promise.resolve().then(() => console.log("Promise callback (microtask)"));



console.log("Script end");



Output order:



Script start

Script end

Promise callback (microtask)

Timeout callback (macrotask)



Explanation:



The main script macrotask runs first → logs “start” and “end”.



Then all microtasks run → logs “Promise callback”.



Then next macrotask runs → logs “Timeout callback”.

