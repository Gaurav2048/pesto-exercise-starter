import React, {useState} from 'react';
import Snake from './components/Snake'
import './App.css';

function App() {
  const [score, setScore] = useState(0)
  const [speed, setSpeed] = useState(1000)


  const onScoreIncrease = () =>{
    setScore(score+1)
    if(score >= 5){
      const factor = Math.floor(score/5+1)
      setSpeed(1000/factor)
    }
  }
  
  return (
    <div className="App">
      <h1>Score {score}</h1>
        <div className="play_ground" >
          <Snake score = {()=>onScoreIncrease()} speed = {speed} />
        </div>
        <h3 style={{marginTop: '85vh'}}>Press Space to start.</h3>
    </div>
  );
}

export default App;
