import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


function App() {
  return (
    <div className="page">
        
        <div className="wrapper">
        <Header />
        <Main />
        <Footer />

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
