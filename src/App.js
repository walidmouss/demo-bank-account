import "./App.css";
import { useReducer } from "react";

// knowing that we are in strict mode i made sure to divide the values by 2 because its rendered twice

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "Activate":
      return { ...state, isActive: true };
    case "Deposite":
      return { ...state, balance: (state.balance += action.payload / 2) };
    case "Withdraw":
      return { ...state, balance: (state.balance -= action.payload / 2) };
    case "RequestLoan":
      return {
        ...state,
        balance: state.balance + action.payload,
        loan: state.loan + action.payload,
      };
    case "PayLoan":
      if (state.balance > state.loan) {
        return {
          ...state,
          balance: state.balance - state.loan,
          loan: 0,
        };
      } else if (state.balance < state.loan) {
        return { ...state, balance: 0, loan: state.loan - state.balance };
      } else {
        return { ...state, balance: 0, loan: 0 };
      }
    case "DeActivate":
      return { ...state, isActive: false, balance: 0, loan: 0 };

    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {state.balance}</p>
      <p>Loan: {state.loan}</p>

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
        <button
          onClick={() => {
            dispatch({ type: "Deposite", payload: 150 });
          }}
          disabled={!state.isActive}
        >
          Deposit 150
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "Withdraw", payload: 50 });
          }}
          disabled={!state.isActive}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "RequestLoan", payload: 5000 });
          }}
          disabled={!state.isActive}
        >
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "PayLoan" });
          }}
          disabled={!state.isActive}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "DeActivate" });
          }}
          disabled={!state.isActive}
        >
          Close account
        </button>
      </p>
    </div>
  );
}
