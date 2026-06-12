import { useReducer } from "react";

const initialState = {
  count: 0
};

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1
      };

    case "decrement":
      return {
        count: state.count - 1
      };

    case "reset":
      return {
        count: 0
      };

    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h1>useReducer</h1>

      <h2>Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: "increment" })}>
        +
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        -
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>
        reset
      </button>
    </div>
  );
}
