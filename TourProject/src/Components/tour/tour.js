import React,{useState} from "react";
import "./tour.css"

export default function Tour(props){

    const [statusText,setStatusText] = useState(true)

    let shortText = props.shortText
    let longText = props.longText
    let text = shortText
    let number = props.myId
    let content = "Read More"
    if(!statusText){
        text = longText
        content = "Show Less"
    }
function show(){
    let newStatus = statusText
    setStatusText(!newStatus)
}

    return(
        <section className="tourPart">
            {props.image}
            <div className="whole">
            <div className="myHead">
            <h3>{props.subject}</h3>
            <h4>{props.price}</h4>
            </div>
            <p>{text}<button className="show-btn" onClick={show}>{content}</button></p>
            <button className="remove-btn" onClick={() => props.remove(number)}>Not Interested</button>
            </div>
        </section>
    )
}