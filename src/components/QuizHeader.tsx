import { QuizHeaderProps } from '../types.ts';
import logo from '../assets/logo.png';

const QuizHeader = ({ dataToUse, name, score, handleQuit }: QuizHeaderProps) => {
  return (
    <div className="flex h-1/6 mx-96 bg-black items-center justify-center space-x-36 text-white text-3xl">
      <div className="flex flex-col p-8">
        <img className="w-28 h-28" src={logo}></img>
      </div>
      <div className="flex flex-col p-8 font-extrabold">
        <p>PLAYER</p>
        <p className="text-green-600">{name}</p>
      </div>
      <div className="flex flex-col p-8 font-extrabold">
        <p>SCORE</p>
        <p className="text-green-600">{score} / {dataToUse.length * 10}</p>
      </div>
      <button className="w-auto rounded-md text-xl text-white font-extrabold shadow-lg bg-red-500 hover:bg-red-400 mt-4 p-4 px-8 mr-4" onClick={handleQuit}>QUIT</button>
    </div>
  );
};

export default QuizHeader;