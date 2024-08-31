const axios = require("axios");

test("first GET", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  expect(response.status).toEqual(200);
  expect(response.data).toHaveLength(100);

  let data = response.data;

  data.map(function (item) {
    expect(typeof item.id === "number").toEqual(true);
    expect(typeof item.userId === "number").toEqual(true);
    expect(typeof item.title === "string").toEqual(true);
    expect(typeof item.body === "string").toEqual(true);
  });
});

test("second GET", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  expect(response.status).toEqual(200);
  expect(response.data.userId).toBe(1);
  expect(response.data.id).toBe(1);
  expect(response.data.title).toBe(
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
  );
});

test("third GET", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1/comments"
  );
  expect(response.status).toEqual(200);

  let data = response.data;

  data.map(function (item) {
    expect(item).toHaveProperty("postId");
    expect(item).toHaveProperty("id");
    expect(item).toHaveProperty("name");
    expect(item).toHaveProperty("email");
    expect(item).toHaveProperty("body");
  });
});

test("fourth GET", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/comments?postId=1"
  );
  expect(response.status).toEqual(200);

  let data = response.data;

  data.map(function (item) {
    expect(item).toHaveProperty("postId", 1);
    expect(item).toHaveProperty("id");
    expect(item).toHaveProperty("name");
    expect(item).toHaveProperty("email");
    expect(item).toHaveProperty("body");
  });
});

test("first POST", async () => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      userId: 101,
      id: 101,
      title: "for test",
      body: "for test 2",
    }
  );
  expect(response.status).toEqual(201);
  expect(response.data.id).toEqual(101);
  expect(response.data.userId).toEqual(101);
});

axios.interceptors.request.use(
  function (request) {
    console.log(`Request to ${request.method.toUpperCase()}: ${request.url}`);
    return request;
  },
  function (error) {
    console.log("Request error ", error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    console.log(`Response status ${response.status}`);
    return response;
  },
  function (error) {
    console.log("Response error ", error);
  }
);
