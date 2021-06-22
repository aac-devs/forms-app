import { useRef } from "react";

const SimpleInputRef = (props) => {
  const nameInputRef = useRef();

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    const enteredValue = nameInputRef.current.value;
    nameInputRef.current.value = ""; // NOT IDEAL, DON'T MANIPULATE THE DOM
    console.log(enteredValue);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInputRef;
