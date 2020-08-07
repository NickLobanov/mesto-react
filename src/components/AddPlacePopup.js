import React from 'react'
import PopupWithForm from './PopupWithForm';
import { TranslationContext } from '../contexts/CurrentUserContext.js';

function AddPlacePopup({isOpen, onClose, onAddPlace}) {

    const [title, setTitle] = React.useState('');
    const [url, setUrl] = React.useState('');
    const currentUser = React.useContext(TranslationContext);

    function handleChangeTitle(evt) {
        setTitle(evt.target.value)
    }
    function handleChangeUrl(evt) {
        setUrl(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        onAddPlace({
            title: title,
            url: url
        });
      }
    return(
        <PopupWithForm name={'add'} title={'Новое место'} buttonTitle={'Создать'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <input id="form__title"
                type="text"
                name="title"
                className="popup__input popup__input_type_title"
                placeholder="Название"
                required maxLength="30"
                minLength="1"
                onChange={handleChangeTitle} />
            <span id="form__title-error" className="popup__input-error"></span>
            <input type="url"
                id="form__description"
                name="url"
                className="popup__input popup__input_type_description"
                placeholder="Ссылка на картинку"
                required
                onChange={handleChangeUrl}/>
            <span id="form__description-error" className="popup__input-error"></span>
        </PopupWithForm>
    );
}

export default AddPlacePopup;