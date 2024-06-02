// Developer: Roderick Bernardo
// Purpose: JSX demo

// Import css for this app
import "./css/normalize.css";
import "./css/sakura.css";
import "./css/styles.css";

function App() {
  // Uncomment the lines to see the different scenarios start
  return <h1>Uncomment the lines to see the different scenarios</h1>;
  // Uncomment the lines to see the different scenarios end
  // Single line HTML start
  // return <h1>Hello World</h1>;
  // Single line HTML end
  // Single line HTML as a const variable start
  // const htmlElement = <h1>Hello World</h1>;
  // return htmlElement;
  // Single line HTML as a const variable end
  // Using expression start
  // return <h1>1 + 1 = {1 + 1}</h1>;
  // Using expression end
  // Multi line HTML, place inside parenthesis start
  // return (
  //   <div>
  //     <h1>JS Frontend Frameworks</h1>
  //     <h2>React</h2>
  //     <h2>Angular</h2>
  //   </div>
  // );
  // Multi line HTML, place inside parenthesis end
  // One top level HTML element start
  // return (
  //   <div>
  //     <h1>JS Frontend Frameworks</h1>
  //     <h2>JS Frontend Frameworks</h2>
  //     <h3>JS Frontend Frameworks</h3>
  //   </div>
  // );
  // One top level HTML element end
  // One top level using fragment start
  // return (
  //   <>
  //     <h1>JS Frontend Frameworks</h1>
  //     <h2>JS Frontend Frameworks</h2>
  //     <h3>JS Frontend Frameworks</h3>
  //   </>
  // );
  // One top level using fragment end
  // All Elements must be closed
  // return (
  //   <>
  //     <p>
  //       Username: <input type="text" placeholder="Enter your username" />
  //     </p>
  //   </>
  // );
  // All Elements must be closed end
  // class attribute works but error on console start
  // return <h1 class="redFont">Hello World</h1>;
  // class attribute works but error on console end
  // camelCase attributes className start
  // return <h1 className="redFont">Hello World</h1>;
  // camelCase attributes className end
  // if statement usage start
  // const dayString = [
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  //   "Sunday",
  // ];
  // const currentDay = new Date().getDay();
  // let weekEndOrDay = "Weekend";
  // if (currentDay <= 5) {
  //   weekEndOrDay = "Weekday";
  // }
  // return (
  //   <h1>
  //     Using if statement:&nbsp;
  //     {dayString[currentDay - 1]} is a {weekEndOrDay}
  //   </h1>
  // );
  // if statement usage end
  // How to use ternary
  // const dayString = [
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  //   "Sunday",
  // ];
  // const currentDay = new Date().getDay();
  // return (
  //   <h1>
  //     Using ternary:&nbsp;
  //     {dayString[currentDay - 1]} is a {currentDay <= 5 ? "Weekday" : "Weekend"}
  //   </h1>
  // );
  // How to use ternary
}

export default App;
