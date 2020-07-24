import React from 'react';

function ImagePopup({card, onClose}) {
    return(
        <div className={`popup popup__image ${card.link && 'popup_opened'}`}>
            <div className="open-popup"> 
                <img  alt="" className="open-popup__image" src={card.link} />
                <p className="open-popup__text">{card.name}</p>
                <button className="popup__close-icon" type="button" onClick={onClose}></button>
            </div>  
        </div>
    );
}

export default ImagePopup;