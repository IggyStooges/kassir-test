/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/api.js":
/*!************************!*\
  !*** ./src/api/api.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Api; });
/* harmony import */ var _model_users_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/users-model.js */ "./src/model/users-model.js");

class Api {
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


/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: END_POINT, LOADER_TEMPLATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END_POINT", function() { return END_POINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADER_TEMPLATE", function() { return LOADER_TEMPLATE; });
const END_POINT = `https://jsonplaceholder.typicode.com`;

const LOADER_TEMPLATE = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:#fff;display:block;" width="30px" height="30px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<circle cx="50" cy="50" r="32" stroke-width="8" stroke="#fe718d" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round">
  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
</circle>
</svg>`


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _presenter_users_presenter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presenter/users-presenter.js */ "./src/presenter/users-presenter.js");
/* harmony import */ var _model_users_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/users-model.js */ "./src/model/users-model.js");
/* harmony import */ var _api_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/api.js */ "./src/api/api.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./const.js */ "./src/const.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/utils.js */ "./src/utils/utils.js");






const api = new _api_api_js__WEBPACK_IMPORTED_MODULE_2__["default"](_const_js__WEBPACK_IMPORTED_MODULE_3__["END_POINT"]);

const usersModel = new _model_users_model_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

const usersPresenter = new _presenter_users_presenter_js__WEBPACK_IMPORTED_MODULE_0__["default"](
    document.querySelector("table"),
    usersModel,
    api
);
usersPresenter.init();
Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__["denormalizeDataArrays"])(api, usersModel);


/***/ }),

/***/ "./src/model/users-model.js":
/*!**********************************!*\
  !*** ./src/model/users-model.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UsersModel; });
/* harmony import */ var _utils_observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/observer.js */ "./src/utils/observer.js");


class UsersModel extends _utils_observer_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ }),

/***/ "./src/presenter/users-presenter.js":
/*!******************************************!*\
  !*** ./src/presenter/users-presenter.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UsersPresenter; });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _view_users_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/users-view.js */ "./src/view/users-view.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");




class UsersPresenter {
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

                const newUser = new _view_users_view_js__WEBPACK_IMPORTED_MODULE_1__["default"](user, post, this._isLoading);
                Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["render"])(this._container, newUser);
                newUser.setClickHandler(this._handleClick, post.id);
                this._usersList[user.id] = newUser;
            });
        });
    }

    _handleClick() {
        this._usersModel.isLoading = true;

        Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__["denormalizeDataArrays"])(this._api, this._usersModel);
    }

    _renderUsersTable() {
        const users = this.users;

        this._renderUsers(users.slice());
    }
}


/***/ }),

/***/ "./src/utils/observer.js":
/*!*******************************!*\
  !*** ./src/utils/observer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Observer; });
class Observer {
    constructor() {
        this._observers = [];
    }

    addObserver(observer) {
        this._observers.push(observer);
    }

    removeObserver(observer) {
        this._observers = this._observers.filter((existedObserver) => existedObserver !== observer);
    }

    _notify(payload) {
        this._observers.forEach((observer) => {
            observer(payload);
        });
    }
}

/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/*! exports provided: RenderPosition, render, renderTemplate, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return renderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony import */ var _view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract-view.js */ "./src/view/abstract-view.js");


const RenderPosition = {
    AFTERBEGIN: `afterbegin`,
    BEFOREEND: `beforeend`,
    AFTEREND: `afterend`,
    BEFOREBEGIN: `beforebegin`
};

const render = (container, element, place = RenderPosition.AFTERBEGIN) => {
    if (container instanceof _view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        container = container.getElement();
    }

    if (element instanceof _view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        element = element.getElement();
    }

    switch (place) {
        case RenderPosition.AFTERBEGIN:
            container.prepend(element);
            break;
        case RenderPosition.BEFOREEND:
            container.append(element);
            break;
        case RenderPosition.AFTEREND:
            container.after(element);
            break;
        default:
            container.before(element);
            break;
    }
};

const renderTemplate = (container, template, place = `beforeend`) => {
    if (container instanceof _view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        container = container.getElement();
    }

    container.insertAdjacentHTML(place, template);
};

const createElement = (template) => {
    const newElement = document.createElement(`tr`);
    newElement.innerHTML = template;

    return newElement;
};

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: denormalizeDataArrays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "denormalizeDataArrays", function() { return denormalizeDataArrays; });
const denormalizeDataArrays = (api, usersModel) => {
    api.getUsers().then((users) => {
        api.getPosts().then((posts) => {
            api.getComments().then((comments) => {
                posts.forEach((post) => {
                    const postComments = comments.filter(
                        (comment) => comment.postId === post.id
                    );
                    post.comments = postComments;
                });

                users.forEach((user) => {
                    const userPosts = posts.filter((post) => post.userId === user.id);
                    user.posts = userPosts;
                });

                usersModel.setUsers(users);
            });
        });
    });
}


/***/ }),

/***/ "./src/view/abstract-view.js":
/*!***********************************!*\
  !*** ./src/view/abstract-view.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractView; });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");


class AbstractView {
    constructor() {
        if (new.target === AbstractView) {
            throw new Error(`Can't instantiate Abstract, only concrete one.`);
        }

        this._element = null;
        this._callback = null;
    }

    getTemplate() {
        throw new Error(`AbstractView method not implemented: getTemplate`);
    }

    getElement() {
        if (!this._element) {
            this._element = Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
        }

        return this._element;
    }

    removeElement() {
        this._element = null;
    }
}

/***/ }),

/***/ "./src/view/users-view.js":
/*!********************************!*\
  !*** ./src/view/users-view.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserView; });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./src/const.js");



const createUserRow = (user, post) => {
    return `
      <td>${user.name}</td>
      <td>${post.title}</td>
      <td class="number">${post.comments.length}</td>
      <td></td>
    `;
};

class UserView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(user, post, isLoader) {
        super();
        this._user = user;
        this._post = post;
        this._isLoader = isLoader;

        this._loaderTemplate = _const_js__WEBPACK_IMPORTED_MODULE_1__["LOADER_TEMPLATE"];

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


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map