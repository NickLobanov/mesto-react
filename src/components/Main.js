import React from 'react';
import api from '../utils/Api.js';
import Card from './Card';
import { TranslationContext } from '../contexts/CurrentUserContext.js';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

    const [cards, setCards] = React.useState([]);
    const currentUser = React.useContext(TranslationContext);
    
    React.useEffect(() => {
       api.get('cards').then(cardsData => {
                console.log(cardsData)
                setCards(cardsData);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    
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
                <Card key={data._id} name={data.name} link={data.link} likes={data.likes} owner={data.owner._id} cardClick={onCardClick}/>
            ))}
        </section>
        
        </>
    );
}
export default Main;