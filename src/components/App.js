import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {

    const [isEditProfilePopupOpen, setEditProfileClick] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlaceClick] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarClick] = React.useState(false);

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
        setAddPlaceClick(false)
    }

  return (
    <div className="page">
        
        <div className="wrapper">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
        <Footer />

        <PopupWithForm name={'edit'} title={'Редактировать профиль'} buttonTitle={'Сохранить'} isOpen={isEditProfilePopupOpen} onClose={closeAllPopup}>
            <input id="form__title" type="text" name="name" className="popup__input popup__input_type_title" value="" required maxlength="40" minlength="2" pattern="[A-Za-zа-яА-Я -]{1,40}" />
            <span id="form__title-error" className="popup__input-error"></span>
            <input type="text" id="form__description" name="description" className="popup__input popup__input_type_description" value="" required maxlength="200" minlength="2" />
            <span id="form__description-error" className="popup__input-error"></span>
        </PopupWithForm>

        <PopupWithForm name={'add'} title={'Новое место'} buttonTitle={'Создать'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopup}>
            <input id="form__title" type="text" name="title" className="popup__input popup__input_type_title" value="" placeholder="Название" required maxlength="30" minlength="1" />
            <span id="form__title-error" className="popup__input-error"></span>
            <input type="url" id="form__description" name="url" className="popup__input popup__input_type_description" value="" placeholder="Ссылка на картинку" required />
            <span id="form__description-error" className="popup__input-error"></span>
        </PopupWithForm>

        <PopupWithForm name={'confirm'} title={'Вы уверены?'} buttonTitle={'Да'} />

        <PopupWithForm name={'avatar'} title={'Обновить аватар'} buttonTitle={'Сохранить'} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopup}>
            <input id="form__title" type="url" name="link" className="popup__input popup__input_type_title" value="" placeholder="Название" required minlength="1" />
            <span id="form__title-error" className="popup__input-error"></span>
        </PopupWithForm>

        <ImagePopup />

        <template id="article__template">
            <div className="article">
                <button className="article__basket" type="button"></button>
                <img className="article__foto"  alt="" />
                <div className="article__description">
                    <p className="article__name"></p>
                    <div className="article__like-container">
                        <button className="article__like" type="button"></button>
                        <span className="article__like-amount"></span>
                    </div>
                </div>
            </div>
        </template>
        </div>
        
    </div>
  );
}

export default App;
