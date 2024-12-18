import { useRef } from "react";

function Form() {
  const inputUseRef = useRef(null);

  const accessUseRef = () => {
    inputUseRef.current.focus();
    console.log(inputUseRef.current.id);
    console.log(inputUseRef.current.placeholder);
    console.log(inputUseRef.current.value);
    inputUseRef.current.value = new Date().toISOString();
  };

  return (
    <section className="hero is-light is-fullheight">
      <div className="hero-body">
        <div>
          <p>
            <input
              className="input"
              type="text"
              id="userInput"
              placeholder="Enter your user name"
              ref={inputUseRef}
            />
          </p>
          <br />
          <button className="button is-info" onClick={accessUseRef}>
            Click to access inputUseRef
          </button>
        </div>
      </div>
    </section>
  );
}

export default Form;
