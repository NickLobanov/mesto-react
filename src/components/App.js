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
        console.log(userAvatar)
        api.patchAvatar('users/me/avatar', userAvatar).then(newUserAvatar => {
            setCurrentUser(newUserAvatar);
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
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
            <Footer />

            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopup} onUpdateUser={handleUpdateUser}/>
            <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopup} onUpdateAvatar={handleUpdateAvatar}/>

            <PopupWithForm name={'add'} title={'Новое место'} buttonTitle={'Создать'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopup}>
                <input id="form__title" type="text" name="title" className="popup__input popup__input_type_title"  placeholder="Название" required maxLength="30" minLength="1" />
                <span id="form__title-error" className="popup__input-error"></span>
                <input type="url" id="form__description" name="url" className="popup__input popup__input_type_description"  placeholder="Ссылка на картинку" required />
                <span id="form__description-error" className="popup__input-error"></span>
            </PopupWithForm>

            <PopupWithForm name={'confirm'} title={'Вы уверены?'} buttonTitle={'Да'} />

            

            <ImagePopup card={selectedCard} onClose={closeAllPopup}/>

            </div>
        </TranslationContext.Provider>
        
    </div>
  );
}

export default App;
