import { useReducer } from "react";
const initialState = {
  email: "",
  form: "",
};
function formReducer(state = initialState, action) {
  switch (action.type) {
    case "SAVE":
      return {
        ...state,
      };

    default:
      return state;
  }
}
export const FormPage = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const complete = (state) => {
    dispatch({ type: "SAVE", state });
  };
  return (
    <form>
      <label>
        Enter email:
        <input type="text" />
      </label>
      <label>
        Enter text:
        <input type="text" />
      </label>
      <button onClick={() => complete}>submit</button>
    </form>
  );
};
