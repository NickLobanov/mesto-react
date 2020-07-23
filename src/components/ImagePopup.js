import React from 'react';

function ImagePopup({card, onClose}) {
    return(
        <div className={card !== '' ? 'popup popup__image popup_opened' : 'popup popup__image'}>
            <div className="open-popup"> 
                <img  alt="" className="open-popup__image" src={card} />
                <p className="open-popup__text"></p>
                <button className="popup__close-icon" type="button" onClick={onClose}></button>
            </div>  
        </div>
    );
}

export default ImagePopup;