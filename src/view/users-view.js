import AbstractView from "./abstract-view.js";
import { LOADER_TEMPLATE } from "../const.js";

const createUserRow = (user, post) => {
    return `
      <td>${user.name}</td>
      <td>${post.title}</td>
      <td class="number">${post.comments.length}</td>
      <td></td>
    `;
};

export default class UserView extends AbstractView {
    constructor(user, post, isLoader) {
        super();
        this._user = user;
        this._post = post;
        this._isLoader = isLoader;

        this._loaderTemplate = LOADER_TEMPLATE;

        this._rowElement = this.getElement();
        this._numberCell = this._rowElement.querySelector(`.number`);
        this._clickHandler = this._clickHandler.bind(this);
    }

    getTemplate() {
        return createUserRow(this._user, this._post);
    }

    _setLoaderTempate() {
        this._numberCell.innerHTML = this._loaderTemplate;
    }

    _clickHandler(evt) {
        evt.preventDefault();
        this._setLoaderTempate();
        this._click();
    }

    setClickHandler(callback) {
        this._click = callback;
        this._rowElement.addEventListener(`click`, this._clickHandler);
    }
}
