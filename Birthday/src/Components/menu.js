import React, {useState} from "react";
import img1 from "../assets/person1.jpg";
import img2 from "../assets/person2.jpg";
import img3 from "../assets/person3.jpg";
import img4 from "../assets/person4.jpg";
import img5 from "../assets/person5.jpg";
import "./menu.css";

const myPeople = [
    {number: 1,photo: <img src={img1} alt="img1" />,Name: "Bertie Yates",Age: "29 years"},
    {number: 2,photo: <img src={img2} alt="img2" /> ,Name: "Hester Hogan",Age: "32 years"},
    {number: 3,photo: <img src={img3} alt="img3" /> ,Name: "Larry Little",Age: "36 years"},
    {number: 4,photo: <img src={img4} alt="img4" /> ,Name: "Sean Walsh",Age: "34 years"},
    {number: 5,photo: <img src={img5} alt="img5" /> ,Name: "Lola Gardner",Age: "29 years"},
]

export default function Menu(){
const [people,setPeople] = useState(myPeople);


const removeFriend = (item) => {
    setPeople(current => (
        current.filter(targetPerson => {
            return (targetPerson.Name!== item.Name || targetPerson.Age!==item.Age);
        })
    ))
}

function removeAll(){
    setPeople("")
}


let friends = null
if(people.length !== 0){
    friends =  people.map((item) => (
        <li key={item.number} >
            <div className="person">
            {item.photo}
            <div>
                <h4>{item.Name}</h4>
                <p>{item.Age}</p>
            </div>
            <button onClick={() => removeFriend(item)}>Delete</button>
            </div>
        </li>
    ))
}

    return(
        <div className="container">
            <h3>{people.length} birthdays today</h3>
            <ul>
                {friends}
            </ul>
            <button onClick={removeAll}>Clear All</button>
        </div>
    )
}
