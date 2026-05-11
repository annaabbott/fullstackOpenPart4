import { test, describe } from "node:test";
import assert from "node:assert/strict";
import listHelper from "../utils/list-helper.js";
import e from "express";

describe("dummy", () => {
  test("dummy returns one", () => {
    const blogs = [];
    const result = listHelper.dummy(blogs);
    assert.strictEqual(result, 1);
  });
});

describe("total likes", () => {
  const listWithOneBlog = [
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright-violation.html",
      likes: 5,
    },
  ];

  test("when list has only one blog, equals the likes of that", () => {
    const result = listHelper.totalLikes(listWithOneBlog);
    assert.strictEqual(result, 5);
  });
});

describe("likes", () => {
  const blogs = [
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright-violation.html",
      likes: 5,
    },
    {
      _id: "5a422aa71b54a676234d17f9",
      title: "Python for Beginners",
      author: "John Doe",
      url: "http://www.example.com/python-for-beginners",
      likes: 10,
    },
  ];

  test("sum of likes of all blogs is calculated correctly", () => {
    const result = listHelper.totalLikes(blogs);
    assert.strictEqual(result, 15);
  });
});
describe("favorite blog", () => {
  const blogs = [
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright-violation.html",
      likes: 5,
    },
    {
      _id: "5a422aa71b54a676234d17f9",
      title: "Python for Beginners",
      author: "John Doe",
      url: "http://www.example.com/python-for-beginners",
      likes: 10,
    },
  ];

  test("return the most liked blog", () => {
    const result = listHelper.favoriteBlog(blogs);
    assert.strictEqual(result, blogs[1]);
  });
});
