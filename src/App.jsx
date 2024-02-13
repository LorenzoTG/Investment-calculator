import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initial_investment: 10000,
    annual_investment: 1200,
    expected_return: 6,
    duration: 10,
  });

  const userInputHandler = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  };

  const inputIsValid = userInput.duration >= 1;

  return (
    <main>
      <Header />
      <UserInput onInputChange={userInputHandler} userInput={userInput} />
      {!inputIsValid && <p className="center">Please enter a valid duration</p>}
      {inputIsValid && <Result userInput={userInput} />}
    </main>
  );
}

export default App;
