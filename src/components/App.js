import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api.js';
import {TranslationContext} from '../contexts/CurrentUserContext';


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

  return (
    <div className="page">
        <TranslationContext.Provider value={currentUser}>
            <div className="wrapper">
            <Header />
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
            <Footer />

            <PopupWithForm name={'edit'} title={'Редактировать профиль'} buttonTitle={'Сохранить'} isOpen={isEditProfilePopupOpen} onClose={closeAllPopup}>
                <input id="form__title" type="text" name="name" className="popup__input popup__input_type_title"  required maxLength="40" minLength="2" pattern="[A-Za-zа-яА-Я -]{1,40}" />
                <span id="form__title-error" className="popup__input-error"></span>
                <input type="text" id="form__description" name="description" className="popup__input popup__input_type_description"  required maxLength="200" minLength="2" />
                <span id="form__description-error" className="popup__input-error"></span>
            </PopupWithForm>

            <PopupWithForm name={'add'} title={'Новое место'} buttonTitle={'Создать'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopup}>
                <input id="form__title" type="text" name="title" className="popup__input popup__input_type_title"  placeholder="Название" required maxLength="30" minLength="1" />
                <span id="form__title-error" className="popup__input-error"></span>
                <input type="url" id="form__description" name="url" className="popup__input popup__input_type_description"  placeholder="Ссылка на картинку" required />
                <span id="form__description-error" className="popup__input-error"></span>
            </PopupWithForm>

            <PopupWithForm name={'confirm'} title={'Вы уверены?'} buttonTitle={'Да'} />

            <PopupWithForm name={'avatar'} title={'Обновить аватар'} buttonTitle={'Сохранить'} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopup}>
                <input id="form__title" type="url" name="link" className="popup__input popup__input_type_title"  placeholder="Название" required minLength="1" />
                <span id="form__title-error" className="popup__input-error"></span>
            </PopupWithForm>

            <ImagePopup card={selectedCard} onClose={closeAllPopup}/>

            </div>
        </TranslationContext.Provider>
        
    </div>
  );
}

export default App;
