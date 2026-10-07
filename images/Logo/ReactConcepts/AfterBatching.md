We’re now at the next key concept after state batching — which is how React actually reacts to those state changes.



So let’s move into how React updates the UI efficiently — through re-rendering, reconciliation, and the virtual DOM in action.



⚛️ What Happens When State Updates



Whenever you call setState (like setCount(count + 1)), React goes through 4 main steps:



🧩 Step 1. Trigger a Re-render



React marks the component as “dirty” — meaning it needs to be re-rendered.

It re-runs your component function to get the new JSX output.



Example:



**function Counter() {**

  **const \[count, setCount] = useState(0);**

  **return <h1>{count}</h1>;**

**}**



If setCount(1) runs, React re-runs Counter() and gets:



**<h1>1</h1>**



🧠 Step 2. Compare with Previous Virtual DOM



React keeps a Virtual DOM tree (a JS object representation of your UI).



It now creates a new virtual DOM for the latest render, then compares it (using diffing) with the previous version.



This step figures out exactly what changed (e.g., just the text inside <h1>).



⚙️ Step 3. Reconciliation



React figures out how to update the real DOM minimally based on that diff.

If only the text changed, it doesn’t rebuild the whole <h1> — it just updates the text node.



🧵 Step 4. Commit Phase



React applies those minimal updates to the real DOM.

This is called the commit phase — when the user actually sees the change.



🔁 Summary



React doesn’t re-render everything — it recomputes the component tree virtually, compares it, and then only updates the changed parts in the real DOM.

That’s why React is so fast and predictable.



