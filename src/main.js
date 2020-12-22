import UsersPresenter from "./presenter/users-presenter.js";
import UsersModel from "./model/users-model.js";
import Api from "./api/api.js";
import { END_POINT } from "./const.js";
import { denormalizeDataArrays } from "./utils/utils.js";

const api = new Api(END_POINT);

const usersModel = new UsersModel();

const usersPresenter = new UsersPresenter(
    document.querySelector("table"),
    usersModel,
    api
);
usersPresenter.init();
denormalizeDataArrays(api, usersModel);
