import { useState } from 'react'
import Timer from './components/Timer'
import ScrollDetector from './components/ScrollDetector';

function App() {
  const [flag, setFlag] = useState(true);
  
  return (
    <>
      <button onClick={()=>{setFlag(!flag)}}>{flag?'unMount Timer':'Mount timer'}</button>
      {flag?<Timer />:null}
      <ScrollDetector />
    </>
  )
}

export default App
