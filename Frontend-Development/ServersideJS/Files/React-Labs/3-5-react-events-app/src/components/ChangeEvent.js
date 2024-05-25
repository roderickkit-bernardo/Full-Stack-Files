// Developer: Roderick Bernardo
// Purpose: React events demo

function ChangeEvent() {
  return (
    <>
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input
            onChange={changeHandler}
            class="input"
            type="text"
            placeholder="Text input"
            id="textInput"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">GBC Campus</label>
        <div class="select">
          <select id="dropDownList" onChange={changeHandler}>
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
              id="fullTimeStatus"
              onChange={changeHandler}
              type="radio"
              name="status"
            />
            &nbsp;&nbsp;Fulltime
          </label>
          <label class="radio">
            <input
              id="partTimeStatus"
              onChange={changeHandler}
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
  alert(`${event.target.id}: ${event.target.value}`);
}

export default ChangeEvent;
