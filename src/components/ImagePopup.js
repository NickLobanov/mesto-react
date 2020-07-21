import React from 'react';

function ImagePopup() {
    return(
        <div className="popup popup__image">
            <div className="open-popup"> 
                <img  alt="" className="open-popup__image" />
                <p className="open-popup__text"></p>
                <button className="popup__close-icon test" type="button"></button>
            </div>  
        </div>
    );
}

export default ImagePopup;