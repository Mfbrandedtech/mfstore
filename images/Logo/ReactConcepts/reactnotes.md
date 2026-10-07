React is a different object while ReactDom is a different object



React only creates virtual dom elements(plain js objects), handles logic, UI and state. To render them we use ReactDom that works with the actual browser dom api to update the dom. 



**Steps involved in converting JSX into plain JavaScript that the browser understands**



const element = <h1>Welcome</h1>;



🧩 Step 1: JSX is not HTML



JSX looks like HTML, but it’s actually syntactic sugar for JavaScript.



Your browser doesn’t understand JSX — it must first be converted into regular JavaScript.



That’s where Babel (a compiler) comes in.



⚙️ Step 2: Babel transforms JSX → React.createElement



Babel sees your JSX and rewrites it into this:



const element = React.createElement('h1', null, 'Welcome');



✅ Here’s what each argument means:



'h1' → the HTML tag or component name



null → props (none in this case)



'Welcome' → the content (children)



🧱 Step 3: React.createElement creates a plain JavaScript object



React doesn’t create real DOM nodes here.

It just creates a virtual element object that describes what the DOM should look like.



Internally, it returns something like this 👇



const element = {

&nbsp; type: 'h1',

&nbsp; props: {

&nbsp;   children: 'Welcome'

&nbsp; }

};



That’s all it is — a plain JavaScript object describing:



what element type to create (h1)



what props or attributes it has (none)



what children it contains ('Welcome')



🧮 Step 4: React DOM takes this object and renders it



Later, when you run:



**import { createRoot } from 'react-dom/client';**



**createRoot(document.getElementById('root')).render(element);**



react-dom reads the element object and uses the browser’s DOM API to actually create:



<h1>Welcome</h1>



and insert it into the page.



🔁 Summary Flow



**JSX → (Babel) → React.createElement() → Virtual DOM Object → (ReactDOM) → Real DOM**



So JSX is just a more human-friendly way to write what React is doing under the hood using plain JS.





🧠 **What is Babel?**



Babel is a JavaScript compiler (or transpiler) that takes your modern JavaScript (ES6+, JSX, TypeScript, etc.) and converts it into older JavaScript that browsers can actually understand.



Think of it like a translator between two versions of JavaScript.



💬 **Why do we need Babel?**



Because not all browsers understand:



JSX syntax (<h1>Hello</h1>)



ES6+ features like import/export, arrow functions, async/await, etc.



TypeScript syntax (if you’re using TS)



So Babel converts all that into plain ES5 JavaScript, which every browser supports.



🧩 Example



You write this in React:



**const element = <h1>Hello, Faisal!</h1>;**



The browser doesn’t understand JSX.

So Babel converts it into this before sending it to the browser:



**const element = React.createElement('h1', null, 'Hello, Faisal!');**



**⚙️ How Babel fits into a React project**



When you create a project using:



**npm create vite@latest my-app -- --template react**



or 



**npx create-react-app my-app**



👉 Babel is automatically included inside your build setup.



When you run npm run dev:



Babel compiles your JSX and modern JS



Vite or Webpack bundles it into files the browser can execute



🧱 Summary

Concept	Role

JSX					Developer-friendly syntax

Babel					Converts JSX + modern JS → plain JS

React.createElement			Creates virtual DOM elements

ReactDOM				Turns those into real DOM elements





🧠 **1. What are Vite and Webpack?**



Both are build tools (or “bundlers”).

Their job is to take all your project’s files —

JS, JSX, CSS, images, etc. — and bundle them together into something the browser can efficiently load.



🧩 **2. The Problem They Solve**



When you write a modern app, you usually have:



**App.jsx**

**Header.jsx**

**Footer.jsx**

**index.css**

**logo.png**



and maybe 100+ small files.



🧱 The browser can’t understand JSX or ES6 imports directly (in older browsers), and loading 100+ files separately would be slow.

So we need a tool that:



Converts JSX → JS (via Babel)



Bundles all the JS and CSS into a few optimized files



Runs a local development server (for live reload)



Optimizes assets for production



That’s what Vite and Webpack do.



**⚙️ 3. What is Webpack?**



Webpack is the older, battle-tested bundler that powered Create React App (CRA).

It’s very powerful and customizable, but also:



Slower (rebuilds can take seconds)



Complex configuration



How it works:



Uses Babel to transform JSX



Bundles everything into bundle.js



Runs a dev server with hot reload



So CRA (Create React App) uses Webpack + Babel under the hood.



**⚡ 4. What is Vite?**



Vite (pronounced veet, French for "fast") is the modern, lightweight alternative to Webpack — created by Evan You (creator of Vue.js).



It’s designed for speed and simplicity, especially during development.



How Vite works:



Uses ES modules directly in the browser (no bundling needed at first)



Transforms JSX instantly with esbuild (written in Go, 10–100x faster than Babel)



Only bundles files when you build for production



So Vite is basically:



“Webpack + Babel, but insanely faster and simpler.”



🏎️ **5. Vite vs Webpack at a glance**



Feature					Vite ⚡				Webpack 🧱

Dev speed		Super fast (instant reloads)			Slower (needs full rebuilds)

Uses			ES modules + esbuild				Bundling + Babel

Config			Simple						Complex

Used in			Modern React, Vue, Svelte			Older React (CRA)

Output			Optimized production bundle			Same, but slower to build



**🧩 6. Example**



When you run:



**npm create vite@latest my-app -- --template react**



Vite sets up everything for you:



React + JSX ready (via esbuild)



Hot reloading built-in



npm run dev → instant preview



npm run build → optimized output in /dist



**🔁 Summary**



Tool		Purpose

Babel		Converts modern JS (JSX, ES6) → plain JS

Vite / Webpack	Bundles and serves your files efficiently

React		Builds your UI

ReactDOM	Puts your React code into the real browser DOM


🧩 Next Step: How React Updates the DOM Efficiently

React doesn’t directly update the browser DOM with every change like plain JS does. Instead, it uses a virtual DOM, diffing, and reconciliation.

Here’s how it works step by step:

Render Phase (Virtual DOM Creation):
When your component runs, React creates a virtual DOM tree — a lightweight JavaScript object version of the real DOM.

Diffing (Finding Changes):
When something changes (like state or props), React re-renders the virtual DOM and compares it with the previous one — this is called diffing.

Reconciliation (Applying Changes):
React calculates the minimum set of changes needed to update the real DOM.
Only the parts that changed are re-rendered — not the whole page.

Commit Phase:
Finally, React updates the real DOM efficiently with just those differences.

This approach makes React much faster than manually updating the DOM in vanilla JS.


🚫 Props Are Read-Only

You cannot modify props inside a child component.

This will not work:

function MovieCard({ title }) {
  title = "Avatar"; // ❌ Bad practice
}

Props are meant to flow down from parent → child only.




