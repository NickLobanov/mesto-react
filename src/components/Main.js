import React from 'react';


function Main({onEditProfile, onAddPlace, onEditAvatar}) {

    return(
        <>
        <section className="profile">
            <div className="profile__wrap">
                <img src="./images/avatar.jpg" alt="Фото" className="profile__foto" onClick={onEditAvatar}/>
                <div className="profile__pen"></div>
            </div>
            <div className="profile__info">
                <h2 className="profile__name"></h2>
                <p className="profile__description"></p>
                <button className="profile__edit" type="button" onClick={onEditProfile}></button>
            </div>
            
            <button className="profile__button" type="button" onClick={onAddPlace}></button>
        </section>

        <section className="elements">

        </section>
        
        </>
    );
}
export default Main;