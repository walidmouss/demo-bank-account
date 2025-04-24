import "./App.css";
import { useReducer } from "react";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "Activate":
      return { ...state, isActive: true };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: X</p>
      <p>Loan: X</p>

      <p>
        <button
          onClick={() => {
            dispatch({ type: "Activate" });
          }}
          disabled={false}
        >
          Open account
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={!state.isActive}>
          Deposit 150
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={!state.isActive}>
          Withdraw 50
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={!state.isActive}>
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={!state.isActive}>
          Pay loan
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={!state.isActive}>
          Close account
        </button>
      </p>
    </div>
  );
}
