import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about)
    }, [currentUser])

    function handleChangeName(evt) {
        setName(evt.target.value)
    }

    function handleChangeDescription(evt) {
        setDescription(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        onUpdateUser({
            name: name,
            about: description,
          });
    }
    return(
        <PopupWithForm name={'edit'} title={'Редактировать профиль'}
            buttonTitle={'Сохранить'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <input id="form__title"
                type="text"
                name="name"
                className="popup__input popup__input_type_title"
                required maxLength="40"
                minLength="2"
                pattern="[A-Za-zа-яА-Я -]{1,40}"
                onChange={handleChangeName}
                value={name} />
            <span id="form__title-error" className="popup__input-error"></span>
            <input type="text"
                id="form__description"
                name="description"
                className="popup__input popup__input_type_description"
                required maxLength="200"
                minLength="2"
                onChange={handleChangeDescription}
                value={description} />
            <span id="form__description-error" className="popup__input-error"></span>
        </PopupWithForm>
    );
}

export default EditProfilePopup;