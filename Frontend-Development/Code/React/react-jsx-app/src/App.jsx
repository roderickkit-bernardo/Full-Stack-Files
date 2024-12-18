// Developer: Roderick Bernardo
// Purpose: React jsx demo

import "./css/normalize.css";
import "./css/sakura.css";
import "./css/styles.css";

function App() {
  return <h1>IT WORKS...</h1>;
}

// Different scenarios you can try
/*
return <h1>Hello World</h1>;

const htmlElement = <h1>Hello World</h1>;
return htmlElement;

return <h1>1 + 1 = {1 + 1}</h1>;

return (
<div>
  <h1>JS Frontend Frameworks</h1>
  <h2>React</h2>
  <h2>Angular</h2>
</div>
);

return (
<div>
  <h1>JS Frontend Frameworks</h1>
  <h2>JS Frontend Frameworks</h2>
  <h3>JS Frontend Frameworks</h3>
</div>
);

return (
<>
  <h1>JS Frontend Frameworks</h1>
  <h2>JS Frontend Frameworks</h2>
  <h3>JS Frontend Frameworks</h3>
</>
);

return (
<>
  <p>
	Username: <input type="text" placeholder="Enter your username" />
  </p>
</>
);

return <h1 className="redFont">Hello World</h1>;

const dayString = [
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",
"Sunday",
];

const currentDay = new Date().getDay();
let weekEndOrDay = "Weekend";

if (currentDay <= 5) {
weekEndOrDay = "Weekday";
}

return (
<h1>
  {dayString[currentDay - 1]} is a {weekEndOrDay}
</h1>
);

const dayString = [
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",
"Sunday",
];

const currentDay = new Date().getDay();

return (
<h1>
  {dayString[currentDay - 1]} is a {currentDay <= 5 ? "Weekday" : "Weekend"}
</h1>
);
*/

export default App;
