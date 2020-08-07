import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api.js';
import {TranslationContext} from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';


function App() {

    const [isEditProfilePopupOpen, setEditProfileClick] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlaceClick] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarClick] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({name: null, link: null});
    const [currentUser, setCurrentUser] = React.useState({})

    React.useEffect(() => {
        api.get('users/me').then(userData => {
            setCurrentUser(userData);
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const [cards, setCards] = React.useState([]);
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
                .then(() => {
                // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
                const newCards = cards.filter((current) => current._id !== cardId );
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


    function handleEditAvatarClick() {
        setEditAvatarClick(true); 
    }

    function handleEditProfileClick() { 
        setEditProfileClick(true);    
    }

    function handleAddPlaceClick() {
        setAddPlaceClick(true);  
    }

    function closeAllPopup(){
        setEditAvatarClick(false);
        setEditProfileClick(false);
        setAddPlaceClick(false);
        setSelectedCard({name: null, link: null});
    }

    function handleCardClick(imageData) {
        setSelectedCard({name: imageData.name, link: imageData.link});
    }

    function handleUpdateUser(userData) {
        api.patch('users/me', userData).then(newUserInfo => {
            setCurrentUser(newUserInfo);
            closeAllPopup();
        })
        .catch((err) => {
            console.log(err)
        })
    }

    function handleUpdateAvatar(userAvatar) {
        api.patchAvatar('users/me/avatar', userAvatar).then(newUserAvatar => {
            setCurrentUser(newUserAvatar);
            closeAllPopup();
        })
        .catch((err) => {
            console.log(err)
        })
    }

    function handleAddPlace(cardData) {
        api.post('cards', cardData).then(newCard => {
            console.log(newCard)
            setCards([newCard, ...cards]);
            closeAllPopup();
        })
        .catch((err) => {
            console.log(err)
        })
    }

  return (
    <div className="page">
        <TranslationContext.Provider value={currentUser}>
            <div className="wrapper">
            <Header />
            <Main onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
                cards={cards}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}/>
            <Footer />

            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopup} onUpdateUser={handleUpdateUser}/>
            <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopup} onUpdateAvatar={handleUpdateAvatar}/>
            <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopup} onAddPlace={handleAddPlace}/>
            
            <PopupWithForm name={'confirm'} title={'Вы уверены?'} buttonTitle={'Да'} />

            <ImagePopup card={selectedCard} onClose={closeAllPopup}/>

            </div>
        </TranslationContext.Provider>
        
    </div>
  );
}

export default App;
