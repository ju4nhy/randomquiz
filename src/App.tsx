import { useState } from 'react'
import FrontPage from './components/FrontPage';
import Quiz from './components/Quiz';
import { DataProps } from './types';
import data from './data';

function App() {
  const [dataToUse, setDataToUse] = useState<DataProps[]>(data.general);
  const [name, setName] = useState<string>('')
  const [ready, setReady] = useState<boolean>(false);

  return (
    <div className="h-screen w-screen bg-gray-900">
      {ready  
        ? <Quiz name={name} setName={setName} setReady={setReady} dataToUse={dataToUse} />
        : <FrontPage name={name} setName={setName} ready={ready} setReady={setReady} dataToUse={dataToUse} setDataToUse={setDataToUse} />
      }
   </div>
  )
}

export default App