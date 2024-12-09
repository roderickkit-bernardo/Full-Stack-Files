// Developer: Roderick Bernardo
// Purpose: React conditionals demo

import WeekdayMenu from "./WeekdayMenu";
import WeekendMenu from "./WeekendMenu";

// Uncomment to try the different scenarios

// Using an if statement to return a compoment
// function Menu() {
//   if (new Date().getDay() <= 5) {
//     return <WeekdayMenu></WeekdayMenu>;
//   } else {
//     return <WeekendMenu></WeekendMenu>;
//   }
// }

// // Using a ternary operator to return a component
// function Menu() {
//   return (
//     <>
//       {new Date().getDay() <= 5 ? (
//         <WeekdayMenu></WeekdayMenu>
//       ) : (
//         <WeekendMenu></WeekendMenu>
//       )}
//     </>
//   );
// }

// Using an && to return a compoment
function Menu() {
  return (
    <>
      {new Date().getDay() <= 5 && <WeekdayMenu></WeekdayMenu>}
      {new Date().getDay() > 5 && <WeekendMenu></WeekendMenu>}
    </>
  );
}

export default Menu;
