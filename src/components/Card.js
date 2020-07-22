import React from 'react'

function Card(props) {

    function handleClick() {
        props.onCardClick(props.link)
    }
    return(
        <div className="article" key={props._id}>
            <button className="article__basket" type="button"></button>
            <img className="article__foto"  alt={props.name} src={props.link} onClick={handleClick}/>
            <div className="article__description">
            <p className="article__name">{props.name}</p>
                <div className="article__like-container">
                    <button className="article__like" type="button"></button>
                    <span className="article__like-amount">{props.likes}</span>
                </div>
            </div>
        </div>
    );
}
export default Card;