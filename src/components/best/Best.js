import React from "react";
import Apt1 from "../../assets/apt1.jpeg";
import Apt2 from "../../assets/apt2.jpeg";
import Apt3 from "../../assets/apt3.jpeg";
import './Best.css';

const Best = ()=>{   
    return(
        <div className="best">
            <h1>Find Best Rated Propertits</h1>
            <div>
                <p><span className="bold">All</span></p>
                <p><span className="bold">Commercial</span></p>
                <p><span className="bold">Residential</span></p>
                <p><span className="bold">Agricultural</span></p>
            </div>
            <div className="container">
                <img src={Apt1}/>
                <img src={Apt2}/>
                <img src={Apt3}/>
            </div>
            <button className="btn">View All</button>
        </div>
    );
}

export default Best;