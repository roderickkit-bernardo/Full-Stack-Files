// Developer: Roderick Bernardo
// Purpose: React events demo

function ChangeEvent() {
  return (
    <>
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input
            onChange={(event) => changeHandler(event)}
            class="input"
            type="text"
            placeholder="Text input"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">GBC Campus</label>
        <div class="select">
          <select onChange={(event) => changeHandler(event)}>
            <option>Casaloma</option>
            <option>Downtown</option>
            <option>Waterfront</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Status</label>
        <div class="control">
          <label class="radio">
            <input
              onChange={(event) => changeHandler(event)}
              type="radio"
              name="status"
            />
            &nbsp;&nbsp;Fulltime
          </label>
          <label class="radio">
            <input
              onChange={(event) => changeHandler(event)}
              type="radio"
              name="status"
            />
            &nbsp;&nbsp;Parttime
          </label>
        </div>
      </div>
    </>
  );
}

function changeHandler(event) {
  alert(event.target.value);
}

export default ChangeEvent;
