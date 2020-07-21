import React from 'react';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function Main() {
    const editForms = (
            <>
                <input id="form__title" type="text" name="name" className="popup__input popup__input_type_title" value="" required maxlength="40" minlength="2" pattern="[A-Za-zа-яА-Я -]{1,40}" />
                <span id="form__title-error" className="popup__input-error"></span>
                <input type="text" id="form__description" name="description" className="popup__input popup__input_type_description" value="" required maxlength="200" minlength="2" />
                <span id="form__description-error" className="popup__input-error"></span>
            </>
        )
    
    const addForms = (
            <>
                <input id="form__title" type="text" name="title" className="popup__input popup__input_type_title" value="" placeholder="Название" required maxlength="30" minlength="1" />
                <span id="form__title-error" className="popup__input-error"></span>
                <input type="url" id="form__description" name="url" className="popup__input popup__input_type_description" value="" placeholder="Ссылка на картинку" required />
                <span id="form__description-error" className="popup__input-error"></span>
            </>
        );

    const AvatarForms = (
            <>
                <input id="form__title" type="url" name="link" className="popup__input popup__input_type_title" value="" placeholder="Название" required minlength="1" />
                <span id="form__title-error" className="popup__input-error"></span>
            </>
        );
    function handleEditAvatarClick() {
        document.querySelector('.popup__avatar').classList.add('popup_opened')
    }
    function handleEditProfileClick() {
        document.querySelector('.popup__edit').classList.add('popup_opened')
    }
    function handleAddPlaceClick() {
        document.querySelector('.popup__add').classList.add('popup_opened')
    }

    return(
        <>
        <section className="profile">
            <div className="profile__wrap">
                <img src="./images/avatar.jpg" alt="Фото" className="profile__foto" onClick={handleEditAvatarClick}/>
                <div className="profile__pen"></div>
            </div>
            <div className="profile__info">
                <h2 className="profile__name"></h2>
                <p className="profile__description"></p>
                <button className="profile__edit" type="button" onClick={handleEditProfileClick}></button>
            </div>
            
            <button className="profile__button" type="button" onClick={handleAddPlaceClick}></button>
        </section>

        <section className="elements">

        </section>

        <PopupWithForm name={'edit'} title={'Редактировать профиль'} buttonTitle={'Сохранить'} children={editForms}/>
        <PopupWithForm name={'add'} title={'Новое место'} buttonTitle={'Создать'} children={addForms}/>
        <PopupWithForm name={'confirm'} title={'Вы уверены?'} buttonTitle={'Да'}/>
        <PopupWithForm name={'avatar'} title={'Обновить аватар'} buttonTitle={'Сохранить'} children={AvatarForms}/>
        <ImagePopup />
        
        </>
    );
}
export default Main;