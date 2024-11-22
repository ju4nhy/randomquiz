import { QuizViewProps } from "../types";
import { useEffect, useRef } from 'react';

const QuizView = ({  
  QA, 
  inputValue, 
  counter,
  correct, 
  error, 
  showHint, 
  setShowHint,
  handleChange, 
  handleClick,
  handleRestart
}: QuizViewProps ) => {

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleEnterPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleClick();
      }
    };
    
    if (inputRef.current) {
      inputRef.current.focus();
    }

    document.addEventListener("keydown", handleEnterPress);
    return () => {
      document.removeEventListener("keydown", handleEnterPress);
    };
  });

  const handleHint = () => setShowHint(!showHint);

  return (
    <>
      <div id="task" className="flex flex-col h-5/6 mx-96 items-center bg-gradient-to-t from-slate-950 to-slate-800 text-white pt-20">
        <h1 className="text-9xl mb-10">{counter}</h1>
        <div className="flex flex-col max-w-2xl mx-auto">
          <h1 className="text-4xl mb-10"> {QA ? QA.question : "Loading question..."}</h1>
          <input ref={inputRef} className="p-4 text-black rounded-md shadow-lg" onChange={handleChange} value={inputValue}></input>
          <div className="flex flex-row text-md font-bold justify-between mb-5">
            <button className="w-24 rounded-md shadow-lg bg-green-600 hover:bg-green-500 mt-4 p-2" onClick={handleClick}>Enter</button>
            <button className="w-24 rounded-md shadow-lg bg-amber-600 hover:bg-amber-500 mt-4 p-2" onClick={handleHint}>Hint</button>
          </div>
          {error.length > 1 && <h2 className="text-2xl text-red-600 font-bold mt-4">{error}</h2>}
          {correct && <h2 className="text-2xl text-green-600 font-bold mt-4">Correct. The answer is {QA?.answer}.</h2>}
          {showHint 
            ? <>{QA && QA.answer && QA.answer.length > 1 && ( <p className="mt-4">{QA.answer.slice(0, 2)}...</p>)}</>
            : null
          }
        </div>
        <div className="absolute bottom-8">
          <button className="w-auto rounded-md shadow-lg bg-amber-600 hover:bg-amber-500 mt-4 p-2 px-4" onClick={handleRestart}>Change topic</button>
        </div>	
      </div>
    </>
  );
};

export default QuizView;