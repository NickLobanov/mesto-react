import React from 'react'

function Card({_id, name, link, likes, cardClick}) {

    function handleClick() {
        cardClick({name: name, link: link});
      }

    return(
        <div className="article" key={_id}>
            <button className="article__basket" type="button"></button>
            <img className="article__foto"  alt={name} src={link} onClick={handleClick}/>
            <div className="article__description">
            <p className="article__name">{name}</p>
                <div className="article__like-container">
                    <button className="article__like" type="button"></button>
                    <span className="article__like-amount">{likes}</span>
                </div>
            </div>
        </div>
    );
}
export default Card;