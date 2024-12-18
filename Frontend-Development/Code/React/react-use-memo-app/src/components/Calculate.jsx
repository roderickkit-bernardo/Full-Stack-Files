import { useState, useMemo } from "react";

const Calculate = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Expensive calculation
  const factorial = (n) => {
    console.log("Calculating factorial...");
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  };

  // Memoize the factorial calculation
  const factorialMemo = useMemo(() => {
    return factorial(count);
  }, [count]); // Only rerun the function when the value of count changes

  return (
    <section class="hero is-light is-fullheight">
      <div class="hero-body">
        <div>
          <p className="title">Count: {count}</p>
          <button
            className="button is-warning"
            onClick={() => setCount((prev) => prev - 1)}
          >
            -
          </button>{" "}
          <button
            className="button is-success"
            onClick={() => setCount((prev) => prev + 1)}
          >
            +
          </button>
          <br />
          <br />
          <p className="title">
            Factorial of {count} is: {factorialMemo}
          </p>
          <p className="title">Unrelated Input:</p>
          <input
            className="input"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something..."
          />
          <br />
          <br />
          <p className="title">Typed Text: {text}</p>
        </div>
      </div>
    </section>
  );
};

export default Calculate;
