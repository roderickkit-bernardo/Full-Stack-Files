import { useState } from "react";

function UseState() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
  });
  const fullName = `${formValues.firstName} ${formValues.lastName}`;

  const submitHandler = (event) => {
    event.preventDefault();
    alert(
      `Form Values:\nFirst name: ${formValues.firstName}\nLast name: ${formValues.lastName}`
    );
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="container my-0 mx-auto p-4">
      <div className="bg-gray-100 p-4 rounded shadow-md w-full">
        <h1 className="text-center text-4xl font-bold">Use State</h1>
      </div>
      <div className="bg-gray-100 p-4 rounded shadow-md w-full mt-4">
        <h2 className="text-center text-3xl font-bold">
          Service Later Ticket System
        </h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label
              htmlFor="input"
              className="block text-gray-700 text-lg font-bold mb-2"
            >
              First name:
            </label>
            <input
              type="text"
              id="firstNameInput"
              name="firstName"
              value={formValues.firstName}
              onChange={changeHandler}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="input"
              className="block text-gray-700 text-lg font-bold mb-2"
            >
              Last Name:
            </label>
            <input
              type="text"
              id="lastNameInput"
              name="lastName"
              value={formValues.lastName}
              onChange={changeHandler}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {formValues.firstName.length > 0 &&
            formValues.lastName.length > 0 && (
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Assign service ticket to: {fullName}
                </button>
              </div>
            )}
        </form>
      </div>
    </div>
  );
}

export default UseState;
