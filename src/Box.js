import React from 'react'

const Box = (props) => {
    let result = ''
    if(props.result){
        result = props.title === 'You'
        ? props.result
        : props.result === 'Tie'
        ? 'Tie'
        : props.result === 'Win'
        ? 'Lose'
        : "Win"
    }
    console.log(result)
  return (
    <div className={`box ${result}`}>
        <div>{props.title}</div>
        <img src={props.title === "You" ? props?.youChoice.img : props?.computerChoice.img}/>
        <div>{result}</div>
    </div>
  )
}

export default Box
