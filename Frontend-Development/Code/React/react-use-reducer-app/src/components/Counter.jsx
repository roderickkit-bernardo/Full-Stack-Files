import { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <section className="hero is-light is-fullheight">
      <div className="hero-body">
        <div>
          <p className="title">Counter: {state.count}</p>
          <button
            className="button is-success"
            onClick={() => dispatch({ type: "increment" })}
          >
            Increment
          </button>{" "}
          <button
            className="button is-warning"
            onClick={() => dispatch({ type: "decrement" })}
          >
            Decrement
          </button>{" "}
          <button
            className="button is-danger"
            onClick={() => dispatch({ type: "reset" })}
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
