import { QuizCompletedProps } from '../types.ts';

const QuizCompleted = ({ handleRestart }: QuizCompletedProps) => {
  return (
    <div className="flex flex-col mx-96 h-5/6 justify-center items-center text-center bg-gray-950 text-green-600 font-bold">
      <h1 className="text-8xl mt-4 mx-56">CONGRATULATIONS!</h1>
      <h1 className="text-7xl mt-4 mx-56">You have completed the quiz.</h1>
      <button className="w-auto p-6 bg-amber-600 text-xl text-white rounded-md shadow-lg hover:bg-amber-500 mt-20" onClick={handleRestart}>Back to start</button>
    </div>
  );
};

export default QuizCompleted;