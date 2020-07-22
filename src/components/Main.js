import React from 'react';
import api from '../utils/Api.js';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.get('cards').then(data => {
            setCards(data)
        }, [])
    })

    React.useEffect(() => {
        api.get('users/me').then(data => {
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar);
        })
    }, []) 
    return(
        <>
        <section className="profile">
            <div className="profile__wrap">
                <img src={userAvatar} alt="Фото" className="profile__foto"/>
                <div className="profile__pen" onClick={onEditAvatar}></div>
            </div>
            <div className="profile__info">
            <h2 className="profile__name">{userName}</h2>
            <p className="profile__description">{userDescription}</p>
                <button className="profile__edit" type="button" onClick={onEditProfile}></button>
            </div>
            
            <button className="profile__button" type="button" onClick={onAddPlace}></button>
        </section>

        <section className="elements">
            {cards.map(data => (
                <Card key={data._id} name={data.name} link={data.link} likes={data.likes.length} onCardClick={onCardClick}/>
            ))}
        </section>
        
        </>
    );
}
export default Main;