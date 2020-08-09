import {createMenuTemplate} from "./view/site-menu.js";
import {createFiltersTemplate} from "./view/filters.js";
import {createSortTemplate} from "./view/sort.js";
import {createEditPointTemplate} from "./view/edit-form.js";
import {createDaysTemplate} from "./view/days-list.js";
import {createDayTemplate} from "./view/days-item.js";
import {createPointsListTemplate} from "./view/points-list.js";
import {createPointTemplate} from "./view/points-item.js";
import {createTripInfoTemplate} from "./view/trip-info.js";

import {render} from "./utils.js";


const POINTS_COUNT = 3;

const mainControlsElement = document.querySelector(`.trip-main__trip-controls`);
const contentContainer = document.querySelector(`.trip-events`);

render(mainControlsElement, createMenuTemplate(), `afterbegin`);
render(mainControlsElement, createFiltersTemplate(), `beforeend`);
render(contentContainer, createSortTemplate(), `afterbegin`);
render(contentContainer, createEditPointTemplate(), `beforeend`);
render(contentContainer, createDaysTemplate(), `beforeend`);

const daysList = document.querySelector(`.trip-days`);
render(daysList, createDayTemplate(), `afterbegin`);

const dayItem = document.querySelector(`.trip-days__item`);
render(dayItem, createPointsListTemplate(), `beforeend`);

const pointsList = document.querySelector(`.trip-events__list`);

const createPoints = () => {
  for (let i = 0; i < POINTS_COUNT; i++) {
    render(pointsList, createPointTemplate(), `afterbegin`);
  }
};

createPoints();

const tripMain = document.querySelector(`.trip-main`);
render(tripMain, createTripInfoTemplate(), `afterbegin`);
