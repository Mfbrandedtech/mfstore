⚙️ How Props Cause Re-renders in React



When a parent component re-renders, React recreates the child elements and passes new props to them.

Then React does a comparison (using the Virtual DOM diffing algorithm) to decide whether the child should re-render.



🔄 Step-by-step Example



**function Child({ name }) {**

  **console.log("Child rendered");**

  **return <h1>Hello, {name}</h1>;**

**}**



**function Parent() {**

  **const \[count, setCount] = useState(0);**



  **return (**

    **<div>**

      **<Child name="Faisal" />**

      **<button onClick={() => setCount(count + 1)}>Increment</button>**

    **</div>**

  **);**

**}**



🔍 What Happens:



Parent renders for the first time → Child also renders.



You click the button → setCount updates state → Parent re-renders.



React calls Parent() again — it creates a new <Child name="Faisal" /> element.



React checks the Virtual DOM:



Old props for Child: { name: "Faisal" }



New props for Child: { name: "Faisal" }



They are identical, so React does not re-render Child unnecessarily (it reuses the old DOM output).



🧠 Key Insight



React re-renders a component only if:



Its props change, or



Its state changes, or



Its parent re-renders and forces a re-render (in some cases).



So props trigger a re-render only when their values change between renders.



🚀 Optimization Note



You can prevent unnecessary re-renders with React.memo():



**const Child = React.memo(({ name }) => {**

  **console.log("Child rendered");**

  **return <h1>Hello, {name}</h1>;**

**});**



Now even if the parent re-renders for other reasons, React will skip re-rendering Child unless name changes.



