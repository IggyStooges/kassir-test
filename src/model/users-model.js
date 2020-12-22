import Observer from "../utils/observer.js";

export default class UsersModel extends Observer {
    constructor() {
        super();
        this._users = [];
        this.isLoading = true;
    }

    setUsers(users) {
        this._users = users.slice();

        this._notify();
    }

    getUsers() {
        this.isLoading = false;

        return this._users;
    }
}