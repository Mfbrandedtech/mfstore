🧱 1. What is a Component in React?



A component is basically a function (or class) that returns JSX.



Example:



**function Welcome() {**

  **return <h1>Hello, React!</h1>;**

**}**



Each component:



Is reusable.



Is independent (it manages its own logic and UI).



Can be nested (used inside other components).



👉 Think of a React app as a tree — the root component (App.js) sits at the top and renders child components.



🧭 2. Props (Short for “Properties”)



Props are how data flows from parent → child components.



Example:



**function Greeting(props) {**

  **return <h1>Hello, {props.name}!</h1>;**

**}**



**function App() {**

  **return <Greeting name="Faisal" />;**

**}**





Here:



App is the parent component.



Greeting is the child.



The child receives name as a prop and can use it dynamically.



✅ Props are read-only — the child cannot modify them.



⚙️ 3. Destructuring Props



Instead of props.name, we often destructure props directly in the function parameter:



**function Greeting({ name }) {**

  **return <h1>Hello, {name}!</h1>;**

**}**



Cleaner, right?



🧠 4. React’s One-Way Data Flow



Props always flow down (parent → child).

If a child needs to send data back up, we use callback functions passed as props.



Example:



**function Child({ onClick }) {**

  **return <button onClick={onClick}>Click Me</button>;**

**}**



**function Parent() {**

  **const handleClick = () => alert('Clicked!');**

  **return <Child onClick={handleClick} />;**

**}**





Here, Parent gives Child a function as a prop — this is how child → parent communication happens.

