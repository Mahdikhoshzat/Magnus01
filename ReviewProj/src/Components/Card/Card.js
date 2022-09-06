import React from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import "./Card.css"

export default function Card(props){
    let number = props.num
    return(
        <div className="Card">
            <div className="img-prop">
            {props.image}
            <span className="icon">
                <FaQuoteRight />
            </span>
            </div>
            <footer className="nameJob">
                <h3>{props.name}</h3>
                <p>{props.job}</p>
            </footer>
            <p>{props.explanation}</p>
            <span className="backNext">
                <button className="back" onClick={() => props.Back(number)}><FaChevronLeft /></button>
                <button className="next" onClick={() => props.Next(number)}><FaChevronRight /></button>
            </span>
            <button className="surprise" onClick={() => props.random(number)}>Surprise Me</button>
        </div>
    )
}