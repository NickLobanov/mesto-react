import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

    function handleSubmit(evt) {
        evt.preventDefault();
        onUpdateAvatar({
          avatar: avatarRef.current.value,
        });
      }

    const avatarRef = React.useRef();
    return(
        <PopupWithForm name={'avatar'} title={'Обновить аватар'} buttonTitle={'Сохранить'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <input ref={avatarRef} id="form__title" type="url" name="link" className="popup__input popup__input_type_title"  placeholder="Название" required minLength="1" />
            <span id="form__title-error" className="popup__input-error"></span>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;