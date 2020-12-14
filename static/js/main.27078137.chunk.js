(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(5),c=a.n(r),i=(a(15),a(9)),l=a(1),s=a(6),u=a.n(s);var p=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{src:u.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__image"}))},m=o.a.createContext();var _=function(e){var t=e.id,a=e.name,n=e.link,r=e.likes,c=e.owner,i=e.cardClick,l=e.cardLikeClick,s=e.cardBasketClick,u=o.a.useContext(m),p=c===u._id?"article__basket article__basket_active":"article__basket",_=r.some((function(e){return e._id===u._id}))?"article__like article__like_active":"article__like";return o.a.createElement("div",{className:"article",key:t},o.a.createElement("button",{className:p,type:"button",onClick:function(){s(t)}}),o.a.createElement("img",{className:"article__foto",alt:a,src:n,onClick:function(){i({name:a,link:n})}}),o.a.createElement("div",{className:"article__description"},o.a.createElement("p",{className:"article__name"},a),o.a.createElement("div",{className:"article__like-container"},o.a.createElement("button",{className:_,type:"button",onClick:function(){l({likes:r,id:t})}}),o.a.createElement("span",{className:"article__like-amount"},r.length))))};var d=function(e){var t=e.onEditProfile,a=e.onAddPlace,n=e.onEditAvatar,r=e.onCardClick,c=e.cards,i=e.onCardLike,l=e.onCardDelete,s=o.a.useContext(m);return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__wrap"},o.a.createElement("img",{src:s.avatar,alt:"\u0424\u043e\u0442\u043e",className:"profile__foto"}),o.a.createElement("div",{className:"profile__pen",onClick:n})),o.a.createElement("div",{className:"profile__info"},o.a.createElement("h2",{className:"profile__name"},s.name),o.a.createElement("p",{className:"profile__description"},s.about),o.a.createElement("button",{className:"profile__edit",type:"button",onClick:t})),o.a.createElement("button",{className:"profile__button",type:"button",onClick:a})),o.a.createElement("section",{className:"elements"},c.map((function(e){return o.a.createElement(_,{id:e._id,key:e._id,name:e.name,link:e.link,likes:e.likes,owner:e.owner._id,cardClick:r,cardLikeClick:i,cardBasketClick:l})}))))};var f=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copy"},"\xa9 2020 Mesto Russia"))};var h=function(e){var t=e.name,a=e.title,n=e.buttonTitle,r=e.children,c=e.isOpen,i=e.onClose,l=e.onSubmit;return o.a.createElement("div",{className:"popup popup__".concat(t," ").concat(c&&"popup_opened")},o.a.createElement("form",{className:"popup__container",onSubmit:l},o.a.createElement("h2",{className:"popup__title"},a),r,o.a.createElement("button",{className:"popup__button",type:"submit"},n),o.a.createElement("button",{className:"popup__close-icon",type:"button",onClick:i})))};var k=function(e){var t=e.card,a=e.onClose;return o.a.createElement("div",{className:"popup popup__image ".concat(t.link&&"popup_opened")},o.a.createElement("div",{className:"open-popup"},o.a.createElement("img",{alt:"",className:"open-popup__image",src:t.link}),o.a.createElement("p",{className:"open-popup__text"},t.name),o.a.createElement("button",{className:"popup__close-icon",type:"button",onClick:a})))},v=a(7),E=a(8),b=new(function(){function e(t,a){Object(v.a)(this,e),this._baseUrl=t,this._token=a}return Object(E.a)(e,[{key:"get",value:function(e){return fetch(this._baseUrl+e,{method:"GET",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"patch",value:function(e,t){return fetch(this._baseUrl+e,{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,about:t.about})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"patchAvatar",value:function(e,t){return fetch(this._baseUrl+e,{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t.avatar})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"post",value:function(e,t){return fetch(this._baseUrl+e,{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t.title,link:t.url})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"delete",value:function(e){return fetch(this._baseUrl+e,{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"put",value:function(e){return fetch(this._baseUrl+e,{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())("https://mesto.nomoreparties.co/v1/".concat("cohort-12","/"),"226a3b48-5e66-4b0b-a28d-c1cfea729696");var C=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,r=o.a.useState(""),c=Object(l.a)(r,2),i=c[0],s=c[1],u=o.a.useState(""),p=Object(l.a)(u,2),_=p[0],d=p[1],f=o.a.useContext(m);return o.a.useEffect((function(){s(f.name),d(f.about)}),[f]),o.a.createElement(h,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:i,about:_})}},o.a.createElement("input",{id:"form__title",type:"text",name:"name",className:"popup__input popup__input_type_title",required:!0,maxLength:"40",minLength:"2",pattern:"[A-Za-z\u0430-\u044f\u0410-\u042f -]{1,40}",onChange:function(e){s(e.target.value)},value:i}),o.a.createElement("span",{id:"form__title-error",className:"popup__input-error"}),o.a.createElement("input",{type:"text",id:"form__description",name:"description",className:"popup__input popup__input_type_description",required:!0,maxLength:"200",minLength:"2",onChange:function(e){d(e.target.value)},value:_}),o.a.createElement("span",{id:"form__description-error",className:"popup__input-error"}))};var N=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,r=o.a.useRef();return o.a.createElement(h,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({avatar:r.current.value})}},o.a.createElement("input",{ref:r,id:"form__title",type:"url",name:"link",className:"popup__input popup__input_type_title",placeholder:"\u0410\u0434\u0440\u0435\u0441 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438",required:!0,minLength:"1"}),o.a.createElement("span",{id:"form__title-error",className:"popup__input-error"}))};var g=function(e){var t=e.isOpen,a=e.onClose,n=e.onAddPlace,r=o.a.useState(""),c=Object(l.a)(r,2),i=c[0],s=c[1],u=o.a.useState(""),p=Object(l.a)(u,2),m=p[0],_=p[1];return o.a.createElement(h,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonTitle:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({title:i,url:m})}},o.a.createElement("input",{id:"form__title",type:"text",name:"title",className:"popup__input popup__input_type_title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,maxLength:"30",minLength:"1",onChange:function(e){s(e.target.value)}}),o.a.createElement("span",{id:"form__title-error",className:"popup__input-error"}),o.a.createElement("input",{type:"url",id:"form__description",name:"url",className:"popup__input popup__input_type_description",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,onChange:function(e){_(e.target.value)}}),o.a.createElement("span",{id:"form__description-error",className:"popup__input-error"}))};var y=function(){var e=o.a.useState(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],r=o.a.useState(!1),c=Object(l.a)(r,2),s=c[0],u=c[1],_=o.a.useState(!1),v=Object(l.a)(_,2),E=v[0],y=v[1],j=o.a.useState({name:null,link:null}),O=Object(l.a)(j,2),S=O[0],P=O[1],T=o.a.useState({}),w=Object(l.a)(T,2),U=w[0],x=w[1];o.a.useEffect((function(){Promise.all([b.get("users/me"),b.get("cards")]).then((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];x(a),D(n)})).catch((function(e){console.log(e)}))}),[]);var A=o.a.useState([]),L=Object(l.a)(A,2),z=L[0],D=L[1];function q(){y(!1),n(!1),u(!1),P({name:null,link:null})}return o.a.createElement("div",{className:"page"},o.a.createElement(m.Provider,{value:U},o.a.createElement("div",{className:"wrapper"},o.a.createElement(p,null),o.a.createElement(d,{onEditProfile:function(){n(!0)},onAddPlace:function(){u(!0)},onEditAvatar:function(){y(!0)},onCardClick:function(e){P({name:e.name,link:e.link})},cards:z,onCardLike:function(e){(e.likes.some((function(e){return e._id===U._id}))?b.delete("cards/likes/".concat(e.id)):b.put("cards/likes/".concat(e.id))).then((function(t){var a=z.map((function(a){return a._id===e.id?t:a}));D(a)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){b.delete("cards/".concat(e)).then((function(){var t=z.filter((function(t){return t._id!==e}));D(t)})).catch((function(e){console.log(e)}))}}),o.a.createElement(f,null),o.a.createElement(C,{isOpen:a,onClose:q,onUpdateUser:function(e){b.patch("users/me",e).then((function(e){x(e),q()})).catch((function(e){console.log(e)}))}}),o.a.createElement(N,{isOpen:E,onClose:q,onUpdateAvatar:function(e){b.patchAvatar("users/me/avatar",e).then((function(e){x(e),q()})).catch((function(e){console.log(e)}))}}),o.a.createElement(g,{isOpen:s,onClose:q,onAddPlace:function(e){b.post("cards",e).then((function(e){console.log(e),D([e].concat(Object(i.a)(z))),q()})).catch((function(e){console.log(e)}))}}),o.a.createElement(h,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonTitle:"\u0414\u0430"}),o.a.createElement(k,{card:S,onClose:q}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a.p+"static/media/logo.855a8c98.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.27078137.chunk.js.map