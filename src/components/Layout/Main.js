import React from "react"
import classes from "./Main.module.css"

const renderStars = (numberOfFilledStars) => {
    const totalStars = 5
    const stars = []
    for(var i = 1; i<=numberOfFilledStars; i++){
        stars.push(<span className={`fa fa-star checked ${classes.checked}`}></span>)
    }
    const numberOfEmptyStars = totalStars - numberOfFilledStars
    for(i = 1; i<=numberOfEmptyStars; i++){
        stars.push(<span className={`fa fa-star`}></span>)
    }
    return stars
}

const successAlertPopUp = () => {
    alert("Product added to cart")
}

const Main = ({total, items, className}) => {
    return (
        <div className={className}>
            <div>
                <p>Number of items displayed {items.length} out of {total}</p>
            </div>
            <div className={classes.flexbox}>
                {items.map((item) => (<div key={item.id}>
                <div className={classes.flex_item}>
        <img src="http://placehold.it/100x100" alt="" />
        <p className={classes.p}>{item.name}</p>
        <p className={classes.p}>{item.description}</p>
        <p className={classes.p}>{item.prize}$</p>
        {renderStars(item.stars)}
        <button onClick={successAlertPopUp}>Add to cart</button>
    </div>
    </div>))}
    
            </div>
        </div>
    )
}

export default Main