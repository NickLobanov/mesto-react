import React from 'react'
import {CurrentUserContext} from '../contexts/CurrentUserContext.js'

function Card({id, name, link, likes, owner, cardClick, cardLikeClick, cardBasketClick}) {
    const currentUser = React.useContext(CurrentUserContext);
    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = owner === currentUser._id;
    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        isOwn ? 'article__basket article__basket_active' : 'article__basket'
      );
    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = likes.some(i => i._id === currentUser._id);
    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = (
        isLiked ? 'article__like article__like_active' : 'article__like'
    );
    function handleClick() {
        cardClick({name: name, link: link});
      }

    function handleLikeClick() {
        cardLikeClick({likes: likes, id: id})
    }

    function handleBasketClick() {
        cardBasketClick(id)
    }

    return(
        <div className="article" key={id}>
            <button className={cardDeleteButtonClassName} type="button" onClick={handleBasketClick}></button>
            <img className="article__foto"  alt={name} src={link} onClick={handleClick}/>
            <div className="article__description">
            <p className="article__name">{name}</p>
                <div className="article__like-container">
                    <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
                    <span className="article__like-amount">{likes.length}</span>
                </div>
            </div>
        </div>
    );
}
export default Card;