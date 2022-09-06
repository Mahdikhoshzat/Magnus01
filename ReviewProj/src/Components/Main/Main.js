import React,{useState} from "react";
import "./Main.css";
import Head from "../Head/Head";
import Card from "../Card/Card";
import img1 from "../../assets/Susan.jpg"
import img2 from "../../assets/Anna.jpg"
import img3 from "../../assets/Peter.jpg"
import img4 from "../../assets/Bill.jpg"

export default function Main(){

    const cards = [
        {
            person:
            <Card 
                num={1}
                image={<img src={img1} alt="Susan Photo"></img>}
                name="Susan Smith"
                job="WEB DEVELOPER"
                explanation="I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
                Back={BackCardHandler}
                Next={NextCardHandler}
                random={RandomCardHandler}
            />,
            id: 1
        },
        {
            person:
            <Card
                num={2} 
                image={<img src={img2} alt="Anna Photo"></img>}
                name="Anna Johnson"
                job="WEB DESIGNER"
                explanation="Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
                Back={BackCardHandler}
                Next={NextCardHandler}
                random={RandomCardHandler}
            />,
            id: 2
        },
        {
            person:
            <Card
                num={3}
                image={<img src={img3} alt="Peter Photo"></img>}
                name="Peter Jones"
                job="INTERN"
                explanation="Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
                Back={BackCardHandler}
                Next={NextCardHandler}
                random={RandomCardHandler}
            />,
            id: 3
        },
        {
            person:
            <Card 
                num={4}
                image={<img src={img4} alt="Bill Photo"></img>}
                name="Bill Anderson"
                job="THE BOSS"
                explanation="Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
                Back={BackCardHandler}
                Next={NextCardHandler}
                random={RandomCardHandler}
            />,
            id: 4
        }
    ]

    const [shownCard,setShownCard] = useState(cards[0])




    function BackCardHandler(number){
        if(number===1){
            setShownCard(cards[cards.length-1])
        }
        else{
            setShownCard(cards[number-2])
        }
            
    }
    function NextCardHandler(number){
        if(number===cards.length){
            setShownCard(cards[0])
        }
        else{
            setShownCard(cards[number])
        }
    }
    function RandomCardHandler(number){
        let surp = Math.floor(Math.random()*4)
        if(surp===number-1){
            RandomCardHandler(number)
        }
        else{
            setShownCard(cards[surp])
        }
    }


    return(
        <div className="main">
            <Head />
            {shownCard.person}
        </div>
    )
}