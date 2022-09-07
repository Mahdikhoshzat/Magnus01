import React, { useState } from "react";
import "./Main.css";
import Question from "../Question/Question";

export default function Main(){

    const cards = [
        {
            body: <Question
            number = {1}
            remove = {removeHandler}
            text = "Do I have to allow the use of cookes?"
            answer = "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."
            />,
            id: 1
        },
        {
            body: <Question
            number = {2}
            remove = {removeHandler}
            text = "How do I change my My Page password?"
            answer = "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse."
            />,
            id: 2
        },
        {
            body: <Question
            number = {3}
            remove = {removeHandler}
            text = "What is BankID?"
            answer = "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial."
            />,
            id: 3
        },
        {
            body: <Question
            number = {4}
            remove = {removeHandler}
            text = "Whose birth number can I use?"
            answer = "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify."
            />,
            id: 4
        },
        {
            body: <Question
            number = {5}
            remove = {removeHandler}
            text = "When do I recieve a password ordered by letter?"
            answer = "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan"
            />,
            id: 5
        },
    ]



    const [Questions,setQuestions] = useState(cards)

    function removeHandler(Id){
        setQuestions((prevState) => (
            prevState.filter((item) => Id!== item.id)
        ))
    }

    return(
        <div className="main">
            <div className="head">
                <h1>Questions And Answers About Login</h1>
                <h2>Num of questions: {Questions.length}</h2>
            </div>
            <div className="questions">
                <ul>
                    {
                        Questions.map((item) => {
                            return(
                                <li key={item.id}>{item.body}</li>
                            )    
                        }
                        )
                    }
                </ul>
            </div>
        </div>
    )
}