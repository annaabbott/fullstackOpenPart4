// import { test, describe } from "node:test";
// import assert from "node:assert/strict";
// import listHelper from "../tests/list-helper.test.js";

const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const reducer = (sum, item) => {
    return sum + item.likes;
  };
  return blogs.reduce(reducer, 0);
};

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return null;
  }

  return blogs.reduce((favorite, current) => {
    return current.likes > favorite.likes ? current : favorite;
  });
};

export default {
  dummy,
  totalLikes,
  favoriteBlog,
};
