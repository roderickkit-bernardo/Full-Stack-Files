// Developer: Roderick Bernardo
// Purpose: React app using bootstrap demo

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const appConfig = {
  title: "GBC - Full Stack Development Program",
  items: [
    {
      id: "collapseOne",
      programName: "Programming Fundamentals",
      programDescription:
        "Our Programming Fundamentals course provides a practical introduction to full stack development for those who have no prior experience in programming or computer science. Study how the World Wide Web works by exploring web standards (such as HTTP protocol), and establish a solid foundation in app building for the web by mastering the essentials of vanilla HTML, CSS, and JavaScript. Also learn the basics of developing server-side apps through the introduction of server-side programming (via NodeJS). Examine the many layers of full stack development by learning about such concepts as back-end development, front-end development, and cloud computing platforms, and use integrated development environment, tools, and source control versioning to practice development tasks.",
    },
    {
      id: "collapseTwo",
      programName: "Front-end Development",
      programDescription:
        "Our Front-end Development course helps you get the knowledge and skills you need to be able to build the front-end of websites and web applications. Explore the components needed to build front-end apps, and learn how to build and deploy apps using vanilla HTML, CSS, JavaScript, web frameworks, and libraries. Also consider the back-end services that are to be used by the front-end app.",
    },
    {
      id: "collapseThree",
      programName: "Backend Development",
      programDescription:
        "Our Back-end Development course focuses on teaching you the back-end development principles and skills you need to create server-side applications that support and power front-end applications. Explore a range of programming languages, frameworks, libraries, and tools that are essential for designing, building, and securing server-side apps. Learn how to create robust and scalable back-end apps and to implement the design pattern in order to improve scalability, flexibility, and maintainability. Also get the skills you need to be able to implement security measures to protect your applications.",
    },
  ],
};

function App() {
  return (
    <div class="container-fluid">
      <h1 className="text-center my-4">GBC - Full Stack Development Program</h1>
      <div class="accordion" id="accordionProgram">
        {appConfig.items.map((item, itemIndex) => (
          <div key={`${item.id}${itemIndex}`} class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${item.id}`}
                aria-expanded="false"
                aria-controls={item.id}
              >
                <h2>{item.programName}</h2>
              </button>
            </h2>
            <div
              id={item.id}
              class="accordion-collapse collapse"
              data-bs-parent="#accordionProgram"
            >
              <div class="accordion-body">{item.programDescription}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
