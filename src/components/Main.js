import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete}) {

    const currentUser = React.useContext(CurrentUserContext);
    
    return(
        <>
        <section className="profile">
            <div className="profile__wrap">
                <img src={currentUser.avatar} alt="Фото" className="profile__foto"/>
                <div className="profile__pen" onClick={onEditAvatar}></div>
            </div>
            <div className="profile__info">
                <h2 className="profile__name">{currentUser.name}</h2>
                <p className="profile__description">{currentUser.about}</p>
                <button className="profile__edit" type="button" onClick={onEditProfile}></button>
            </div>
            
            <button className="profile__button" type="button" onClick={onAddPlace}></button>
        </section>

        <section className="elements">
            {cards.map(data => (
                <Card id={data._id}
                    key={data._id}
                    name={data.name}
                    link={data.link} 
                    likes={data.likes}
                    owner={data.owner._id}
                    cardClick={onCardClick}
                    cardLikeClick={onCardLike}
                    cardBasketClick={onCardDelete}/>
            ))}
        </section>
        
        </>
    );
}
export default Main;