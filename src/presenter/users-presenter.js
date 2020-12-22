import { render } from "../utils/render.js";
import UserView from "../view/users-view.js";
import { denormalizeDataArrays } from "../utils/utils.js";

export default class UsersPresenter {
    constructor(container, usersModel, api) {
        this._container = container;
        this._usersModel = usersModel;
        this._isLoading = this._usersModel.isLoading;
        this._api = api;
        this._handleModelEvent = this._handleModelEvent.bind(this);
        this._refresh = false;
        this._handleClick = this._handleClick.bind(this);

        this._usersList = {};
        this._postsList = {};

    }

    init() {
        this._renderUsersTable();
        this._usersModel.addObserver(this._handleModelEvent);
    }

    _handleModelEvent() {
        this._renderUsersTable();
    }

    get users() {
        return this._usersModel.getUsers();
    }

    _renderUsers(users) {
        users.forEach((user) => {
            user.posts.forEach((post) => {
                this._isLoading = this._usersModel.isLoading;

                const newUser = new UserView(user, post, this._isLoading);
                render(this._container, newUser);
                newUser.setClickHandler(this._handleClick, post.id);
                this._usersList[user.id] = newUser;
            });
        });
    }

    _handleClick() {
        this._usersModel.isLoading = true;

        denormalizeDataArrays(this._api, this._usersModel);
    }

    _renderUsersTable() {
        const users = this.users;

        this._renderUsers(users.slice());
    }
}
