import { useState } from 'react';
import './App.css';
import Box from './Box';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHandBackFist, faHand, faHandScissors} from '@fortawesome/free-solid-svg-icons'

const choice = {
  rock:{
    name:"Rock",
    img:"free-icon-fist-1527445.png"
  },
  paper:{
    name:"Paper",
    img:"free-icon-hand-2717362.png"
  },
  scissors:{
    name:"Scissors",
    img:"free-icon-scissors-4151780.png"
  }
}

function App() {
  const [youChoice, setYouChoice] = useState('')
  const [computerChoice, setComputerChoice] = useState('')
  const [result, setResult] = useState('')

  const change = ((event) => {
    const randomChoice = random()
    setYouChoice(choice[event])
    setComputerChoice(choice[randomChoice])
    setResult(mathResult(choice[event].name, choice[randomChoice].name))
  })

  const random = (() => {
    const randomNum = Math.floor(Math.random() * 3)
    const choiceArray = Object.keys(choice)
    return choiceArray[randomNum]
  })

  const mathResult = ((you, computer) => {
    if(you === computer){
      return "Tie"
    }else if(you === 'Rock'){
      return computer === "Paper"
      ? "Lose"
      : "Win"
    }else if(you === 'Paper'){
      return computer === "Scissors"
      ? "Lose"
      : "Win"
    }else{
      return computer === "Rock"
      ? "Lose"
      : "Win"
    }
  })
  return (
    <div className="container">
      <h3 className="black-han-sans-regular">RockPaperScissors</h3>
      <div className="main">
        <Box title="You" youChoice={youChoice} result={result}/>
        <Box title="computer" computerChoice={computerChoice} result={result}/>
      </div>
      <div className="buttonBox">
        <button onClick={() => change("rock")}><FontAwesomeIcon icon={faHandBackFist} /></button>
        <button onClick={() => change("paper")}><FontAwesomeIcon icon={faHand} /></button>
        <button onClick={() => change("scissors")}><FontAwesomeIcon icon={faHandScissors} /></button>
      </div>
    </div>
  );
}

export default App;
