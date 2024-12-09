import ClickEvent from "./ClickEvent";
import ChangeEvent from "./ChangeEvent";

function Content() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="is-size-1 has-text-centered">Using arrow functions</h1>
          <div className="box">
            <ClickEvent></ClickEvent>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h1 className="is-size-1 has-text-centered">Using handler name</h1>
          <div className="box">
            <ChangeEvent></ChangeEvent>
          </div>
        </div>
      </section>
    </>
  );
}

export default Content;
