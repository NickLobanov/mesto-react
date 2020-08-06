import React from 'react';
import api from '../utils/Api.js';
import Card from './Card';
import { TranslationContext } from '../contexts/CurrentUserContext.js';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

    const [cards, setCards] = React.useState([]);
    const currentUser = React.useContext(TranslationContext);
    
    //обработчик постановки/снятия лайка
    function handleCardLike(card) {
            // Снова проверяем, есть ли уже лайк на этой карточке
            const isLiked = card.likes.some(i => i._id === currentUser._id);
            
            // Отправляем запрос в API и получаем обновлённые данные карточки
            (!isLiked ? api.put(`cards/likes/${card.id}`) : api.delete(`cards/likes/${card.id}`))
            .then((newCard) => {
            // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
            const newCards = cards.map((current) => current._id === card.id ? newCard : current);
            // Обновляем стейт
          setCards(newCards);
        });
    }
    //обработчик удаления карточки
    function handleCardDelete(cardId) {
            api.delete(`cards/${cardId}`)
            .then((newCard) => {
            // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
            const newCards = cards.filter((current) => current._id === newCard._id );
            // Обновляем стейт
        setCards(newCards);
        });
    }

    React.useEffect(() => {
       api.get('cards').then(cardsData => {
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
                <Card id={data._id}
                    key={data._id}
                    name={data.name}
                    link={data.link} 
                    likes={data.likes}
                    owner={data.owner._id}
                    cardClick={onCardClick}
                    cardLikeClick={handleCardLike}
                    cardBasketClick={handleCardDelete}/>
            ))}
        </section>
        
        </>
    );
}
export default Main;