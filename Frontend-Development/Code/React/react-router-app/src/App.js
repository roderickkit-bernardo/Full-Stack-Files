// Developer: Roderick Bernardo
// Purpose: React router demo

import "bulma/css/bulma.min.css";
import AppV5 from "./AppV5";
import AppV6 from "./AppV6";

function App() {
  return (
    <>
      <AppV5 version="RR-V5"></AppV5>
      <AppV6 version="RR-V6"></AppV6>
    </>
  );
}
export default App;

const courseConfig = [
  {
    courseId: "ENG101",
    title: "College English",
    description:
      "This course introduces students to the fundamentals of college-level writing and critical reading. Emphasis is placed on developing effective writing processes, including drafting, revising, and editing. Students will learn to construct well-organized essays with clear theses, coherent arguments, and appropriate use of evidence. Additionally, the course will cover analytical reading skills, focusing on interpreting and critically evaluating various literary genres, such as fiction, poetry, and drama. Through reading and writing assignments, students will explore themes and issues relevant to contemporary society and diverse cultural perspectives.",
  },
  {
    courseId: "MTH101",
    title: "College Math",
    description:
      "This course provides a comprehensive introduction to college-level algebra. It is designed to develop students' algebraic skills and understanding, preparing them for more advanced mathematical studies. Topics include functions and their properties, linear and quadratic equations, systems of equations, polynomial and rational functions, exponential and logarithmic functions, and an introduction to sequences and series. Emphasis is placed on problem-solving, mathematical reasoning, and real-world applications.",
  },
];
