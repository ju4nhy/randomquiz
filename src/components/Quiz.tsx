
import React, { useState } from 'react';
import QuizHeader from './QuizHeader.tsx';
import QuizView from './QuizView.tsx';
import QuizCompleted from './QuizCompleted.tsx';
import { QuizProps, DataProps } from '../types.ts';

const Quiz = ({ dataToUse, name, setName, setReady }: QuizProps) => {
  const [counter, setCounter] = useState<number>(1);
  const [score, setScore] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [correct, setCorrect] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);

  const findQuestionAnswerPair = (): DataProps | undefined => {
    return dataToUse.find((item: DataProps) => item.id === counter);
  };

  const QA = findQuestionAnswerPair();
  const handleClick = () => checkIfCorrect(inputValue);
  const resetInput = () => setInputValue('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInputValue(event.target.value);
    setError('');
  };

  const handleRestart = () => {
    setCounter(0);
    setScore(0);
    setReady(false);
  };

  const handleQuit = () => {
    setName('');
    setCounter(0);
    setScore(0);
    setReady(false);
  };

  const checkIfCorrect = (inputValue: string) => {
    const userAnswer = inputValue.trim().toLowerCase().replace(/^a\s+/, "").replace(/[^a-z0-9]/g, "");

    const correctAnswer = QA?.answer
      ? (QA.answer.trim())
        .toLowerCase()
        .replace(/^a\s+/, "")
        .replace(/[^a-z0-9]/g, "")
      : null;

    if (userAnswer === correctAnswer) {
      setCorrect(true);
      setTimeout(() => {
        setCounter(counter + 1);
        setScore(score + 10);
        setCorrect(false);
      }, 1700);

      if (showHint) {
        setShowHint(false);
      }
    } else {
      setError('Incorrect. Back to beginning.');
      setTimeout(() => {
        setError('');
        setCorrect(false);
        setCounter(1);
        setScore(0);
      }, 1700);

      if (showHint) {
        setShowHint(false);
      }
    }

    resetInput();
  };

  return (
    <>	
      <QuizHeader 
        dataToUse={dataToUse}
        name={name}
        score={score}
        handleQuit={handleQuit}
      />
      {counter && counter > dataToUse.length 
        ? <QuizCompleted 
          handleRestart={handleRestart}
        />
        : <QuizView 
          QA={QA} 
          inputValue={inputValue} 
          counter={counter} 
          correct={correct} 
          error={error} 
          showHint={showHint}
          setShowHint={setShowHint}
          handleChange={handleChange} 
          handleClick={handleClick}
          handleRestart={handleRestart}
        />
      }
    </>
  );
};

export default Quiz;