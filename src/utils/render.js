import AbstractView from "../view/abstract-view.js";

export const RenderPosition = {
    AFTERBEGIN: `afterbegin`,
    BEFOREEND: `beforeend`,
    AFTEREND: `afterend`,
    BEFOREBEGIN: `beforebegin`
};

export const render = (container, element, place = RenderPosition.AFTERBEGIN) => {
    if (container instanceof AbstractView) {
        container = container.getElement();
    }

    if (element instanceof AbstractView) {
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

export const renderTemplate = (container, template, place = `beforeend`) => {
    if (container instanceof AbstractView) {
        container = container.getElement();
    }

    container.insertAdjacentHTML(place, template);
};

export const createElement = (template) => {
    const newElement = document.createElement(`tr`);
    newElement.innerHTML = template;

    return newElement;
};