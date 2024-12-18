// Developer: Roderick Bernardo
// Purpose: React events demo

function ClickEvent() {
  return (
    <div class="is-flex is-justify-content-center buttons">
      <button onClick={(event) => clickHandler(event)} class="button is-info">
        Info
      </button>
      <button
        onClick={(event) => clickHandler(event)}
        class="button is-success"
      >
        Success
      </button>
      <button
        onClick={(event) => clickHandler(event)}
        class="button is-warning"
      >
        Warning
      </button>
      <button onClick={(event) => clickHandler(event)} class="button is-danger">
        Danger
      </button>
    </div>
  );
}

function clickHandler(event) {
  alert(`Button: ${event.target.innerText} was clicked!`);
}

export default ClickEvent;
