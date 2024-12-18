// Developer: Roderick Bernardo
// Purpose: React useState demo

function UseState(props = "Not assigned") {
  return (
    <div className="flex items-center justify-between">
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Assign service ticket to: {props.fullName}
      </button>
    </div>
  );
}

export default UseState;
