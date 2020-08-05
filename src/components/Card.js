import React from 'react'
import {TranslationContext} from '../contexts/CurrentUserContext.js'

function Card({_id, name, link, likes, owner, cardClick}) {

    const currentUser = React.useContext(TranslationContext);
    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = owner === currentUser._id;
    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        `article__basket ${isOwn ? 'article__basket_visible' : 'article__basket_hidden'}`
      );
    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = likes.some(i => i._id === currentUser._id);
    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = (
        `article__like ${isOwn ? 'article__like_active' : 'article__like_inactive'}`
    );
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
                    <span className="article__like-amount">{likes.lenght}</span>
                </div>
            </div>
        </div>
    );
}
export default Card;