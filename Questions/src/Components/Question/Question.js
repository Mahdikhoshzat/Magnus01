import React, { useState } from "react";
import "./Question.css"

export default function Question(props){
    const [showAnswer, setshowAnswer] = useState(false)


function showAnswerHandler(){
    setshowAnswer(!showAnswer)
}

    let num = props.number

    let btnContent = '+'
    let answerContent = ""
    if(showAnswer){
        btnContent = '-'
        answerContent = <div>
            <p>{props.answer}</p>
            <button className="remove-btn" onClick={() =>  props.remove(num)}>remove</button>
        </div>
    }
    return(
        <div className="singleQuestion">
            <div className="textBtn">
            <h3 className="textOfQuestion">{props.text}</h3>
            <button className="btn-question" onClick={showAnswerHandler}>{btnContent}</button>
            </div>
            <p className="answer">{answerContent}</p>
        </div>
    )
}