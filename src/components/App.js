import React from "react"; // 'react' and 'date-fns' are npm packages
import { format } from "date-fns"; 
// App.js pulls packages' specific content by importing from 'node_modules' folder 
// (created when we ran npm install)
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent"

// Add your code own within the return statement
function App() {
  return ( // returns JSX (JS XML) code, which is transpiled to JS code
    <div className="App">
      {/* <h1>{format(new Date(), "MMMM do yyyy, h:mm:ss a")}</h1> */}
      <h1>Now</h1>
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      <ExampleComponent />
      <TestComponent />
    </div>
  ); 
}

export default App;
