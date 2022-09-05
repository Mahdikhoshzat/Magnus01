import React,{useState} from "react";
import "./Main.css"
import Tour from "../tour/tour"
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpeg"
import img3 from "../../assets/img3.jpeg"
import img4 from "../../assets/img4.jpeg"
import img5 from "../../assets/img5.jpeg"

export default function Main(props){

    const myTours = [
        {
            body: <Tour
            myId={1}
            image={<img src={img1} alt="img1"></img>}
            subject="Best Of Paris In 7 Days Tour"
            price="$1,995"
            shortText="Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ..."

            longText = "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!"
            remove = {removeTourHandler}
        />,
        id: 1},
        {
            body: <Tour
            myId={2}
            image={<img src={img2} alt="img2"></img>}
            subject="Best Of Ireland In 14 Days Tour"
            price="$3,895"
            shortText="Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the D..."

            longText = "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!"
            remove = {removeTourHandler}
        />,
        id: 2
    },
        {body: <Tour
            myId={3}
            image={<img src={img3} alt="img3"></img>}
            subject="Best Of Salzburg & Vienna In 8 Days Tour"
            price="$2,695"
            shortText="Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring th..."

            longText = "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!"
            remove = {removeTourHandler}
            
        />,id: 3},
        {body: <Tour
            myId={4}
            image={<img src={img4} alt="img4"></img>}
            subject="Best Of Rome In 7 Days Tour"
            price="$2,095"
            shortText="Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient ..."

            longText = "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!"
            remove = {removeTourHandler}
        />,
        id: 4},
        {body: <Tour
            myId={5}
            image={<img src={img5} alt="img5"></img>}
            subject="Best Of Poland In 10 Days Tour"
            price="$2,595"
            shortText="Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, y..."

            longText = "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!"
            remove = {removeTourHandler}
            
        />,id: 5}
        
    ]

    const [tours,setTours] = useState(myTours)

    function removeTourHandler(speId){
        setTours( (newTours)  => newTours.filter((test) => test.id != speId))
    }
function handleRefresh(){
    window.location.reload()
}

    let exist = ""
    let view = null
    let showTours = null
    if(tours.length!==0){
        exist = "Our Tours"
        showTours =  tours.map((item) => (
            <li key={item.id}>{item.body}</li>
        ))

        view = <>
        <h1>{exist}</h1>
            <hr></hr>
            <ul>
                {showTours}
            </ul> 
        </>
    }
    else if(tours.length === 0){
        exist = "No Tours Left"
        view = <>
        <h1>{exist}</h1>
        <button onClick={handleRefresh} className="ref-btn">Refresh</button>
        </>
    }
    
    return(
        <div className="main">
            {view}
        </div>
    )
}