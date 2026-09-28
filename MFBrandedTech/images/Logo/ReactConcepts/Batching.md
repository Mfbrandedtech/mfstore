🧠 The Concept of Batching



When you call setState() multiple times in a single event (like a button click), React doesn’t immediately update the state after every call.

Instead, it batches these updates and applies them together before the next render.



Example:



**function Counter() {**

  **const \[count, setCount] = useState(0);**



  **function handleClick() {**

    **setCount(count + 1);**

    **setCount(count + 1);**

    **setCount(count + 1);**

    **console.log(count);**

  **}**



  **return <button onClick={handleClick}>{count}</button>;**

**}**



If you click the button once:



You might expect the count to become 3 immediately.



But it actually becomes 1 — because React batches the updates and uses the same count value (0) during that tick.



⚙️ What Happens Internally



All setState calls made during the same tick are queued.



React groups them, and before the browser paints the next frame, React flushes these updates and re-renders.



That’s why your console.log(count) still shows the old value.



However, if you run an async operation (like a setTimeout), batching behaves differently (depending on React version).



⚡ React 18+ Automatic Batching



Before React 18, batching only happened inside React event handlers.

But now, automatic batching also happens in:



Promises



setTimeout



Native event listeners



Async functions



Example:



**setTimeout(() => {**

  **setCount(c => c + 1);**

  **setFlag(f => !f);**

  **// Both happen together in one render now (React 18+)**

**});**



⚙️ Before React 18



React’s batching was limited — it only happened inside React-managed event handlers, such as onClick, onChange, etc.



So for example:



**function handleClick() {**

  **setCount(c => c + 1);**

  **setFlag(f => !f);**

**}**



✅ One render — both updates are batched (because React knows it’s inside its own event handler).



But outside of React’s control, like inside:



**setTimeout(() => {**

  **setCount(c => c + 1);**

  **setFlag(f => !f);**

**});**



❌ Two renders — React 17 treated each setState as a separate update because it didn’t know they were logically related.



⚡ React 18 and Automatic Batching



React 18 introduced automatic batching everywhere.



Now React can batch multiple setState calls that occur:



in setTimeout



in Promise.then



in async/await



in fetch callbacks



in custom event listeners



✅ Result:

All state updates that happen within the same event loop tick are batched automatically into one render.



🧠 So in summary

React Version	Where Batching Happens				Example Behavior

Before 18	Only inside React events (like onClick)		setTimeout → multiple renders

React 18+	Everywhere (React + async tasks)		setTimeout → single render



🧩 In your words (and correct)



Before React 18, every setState outside React’s event handlers caused a separate re-render.

In React 18, all setState calls inside the same tick are automatically batched — meaning they cause only one render.



Below is a side-by-side demo showing what happens in React 17 (before automatic batching) and in React 18 (with automatic batching).



⚛️ Example Code



import { useState, useEffect } from "react";



**function App() {**

  **const \[count, setCount] = useState(0);**

  **const \[flag, setFlag] = useState(false);**



  **console.log("🎨 Rendered — count:", count, "flag:", flag);**



  **useEffect(() => {**

    **// Simulate async code**

    **setTimeout(() => {**

      **console.log("⏱ setTimeout triggered");**



      **setCount(c => c + 1);**

      **setFlag(f => !f);**

    **}, 1000);**

  **}, \[]);**



  **return (**

    **<div>**

      **<h1>Count: {count}</h1>**

      **<h2>Flag: {flag.toString()}</h2>**

    **</div>**

  **);**

**}**



**export default App;**



🧩 What Happens

🧱 In React 17 (before automatic batching)



The timeout triggers.



setCount updates → React re-renders immediately.



setFlag updates → React re-renders again.



✅ Output in console:



**🎨 Rendered — count: 0 flag: false**

**⏱ setTimeout triggered**

**🎨 Rendered — count: 1 flag: false**

**🎨 Rendered — count: 1 flag: true**





🧠 Two renders — React handled each setState separately.



⚡ In React 18 (automatic batching)



Timeout triggers (same as before).



Both setCount and setFlag are grouped (batched) automatically.



React re-renders only once after both updates are applied.



✅ Output in console:



**🎨 Rendered — count: 0 flag: false**

**⏱ setTimeout triggered**

**🎨 Rendered — count: 1 flag: true**



🧠 One render — React waited until all state updates in that tick finished before re-rendering.



🔍 Why This Matters



Your app becomes more efficient (fewer renders).



You don’t have to worry about where updates happen — React does batching automatically.



You can still force immediate updates if you ever need to (using flushSync() from react-dom).



