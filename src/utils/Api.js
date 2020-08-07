class Api {
    constructor(baseUrl, token) {
        this._baseUrl = baseUrl;
        this._token = token;
    }

    get(url) {
        return fetch(this._baseUrl + url, {
            method: 'GET',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                if(res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
            
    }

    patch(url, values) {
        return fetch(this._baseUrl + url, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: values.name,
                about: values.about
            })
        })
            .then(res => {
                if(res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
    }

    patchAvatar(url, values) {
        return fetch(this._baseUrl + url, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: values.avatar
            })
        })
            .then(res => {
                if(res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
    }

    post(url, values) {
        return fetch(this._baseUrl + url, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: values.title,
                link: values.url
            })
        })
            .then(res => {
                if(res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
    }

    delete(url) {
        return fetch(this._baseUrl + url, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if(res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
    }

    put(url) {
        return fetch(this._baseUrl + url, {
            method: 'PUT',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if(res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
    }

}
const indentifier = 'cohort-12'
const api = new Api(`https://mesto.nomoreparties.co/v1/${indentifier}/`, '226a3b48-5e66-4b0b-a28d-c1cfea729696')
export default api;