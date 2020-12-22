import UsersModel from "../model/users-model.js";
export default class Api {
    constructor(endPoint) {
        this._endPoint = endPoint;
    }

    getComments() {
        return this._load({ url: `comments` }).then(Api.toJSON);
    }

    getPosts() {
        return this._load({ url: `posts` }).then(Api.toJSON);
    }

    getUsers() {
        return this._load({ url: `users` })
            .then(Api.toJSON)
    }

    _load({ url, method = `GET`, body = null }) {
        return fetch(`${this._endPoint}/${url}`, { method, body })
            .then(Api.checkStatus)
            .catch(Api.catchError);
    }

    static toJSON(response) {
        return response.json();
    }

    static catchError(err) {
        throw err;
    }
}
