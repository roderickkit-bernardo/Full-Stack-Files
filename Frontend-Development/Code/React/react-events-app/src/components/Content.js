// Developer: Roderick Bernardo
// Purpose: React events demo

import ClickEvent from "./ClickEvent";
import ChangeEvent from "./ChangeEvent";

const appConfigs = [
  { label: "Click Event", component: <ClickEvent></ClickEvent> },
  { label: "Change Event", component: <ChangeEvent></ChangeEvent> },
];

function Content() {
  return (
    <>
      <section className="section">
        <div className="container">
          {appConfigs.map((appConfig) => (
            <>
              <h1 className="is-size-1 has-text-centered">{appConfig.label}</h1>
              <div className="box">{appConfig.component}</div>
            </>
          ))}
        </div>
      </section>
    </>
  );
}

export default Content;
