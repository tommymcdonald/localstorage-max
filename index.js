"use strict";

module.exports = {
  set: (key, value) => {localStorage.setItem(key, JSON.stringify(value));},
  get: (key) => JSON.parse(window.localStorage.getItem(key)),
  remove: (key) => {localStorage.removeItem(key)},
};
