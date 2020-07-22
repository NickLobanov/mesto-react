import React from 'react';

function PopupWithForm({name, title, buttonTitle, children, isOpen, onClose}) {
    return(
    <div className={isOpen ? `popup popup__${name} popup_opened` : `popup popup__${name}`}>
        <form className="popup__container">
            <h2 className="popup__title">{title}</h2>
            {children}
            <button className="popup__button" type="button">{buttonTitle}</button>
            <button className="popup__close-icon" type="button" onClick={onClose}></button>
        </form>
    </div>
    );
  
}

export default PopupWithForm;