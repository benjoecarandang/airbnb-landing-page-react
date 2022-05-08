import React from "react"
import Star from "../images/star.png"

export default function Card(props) {
    let badgeText
     
    console.log(props);
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {
                badgeText &&
                <div className="card--badge">{badgeText}</div>
            }
            <img 
                src={`../images/${props.item.coverImg}`} 
                className="card--image" 
            />
            <div className="card--stats">
                <img src={Star} className="card--star" alt="" />
                <span>{props.item.stats.rating.toFixed(1)}</span>
                <span className="text-gray">({props.item.stats.reviewCount}) •</span>
                <span className="text-gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="font-weight-bold">${props.item.price}</span> / person</p>
        </div>
    )
}