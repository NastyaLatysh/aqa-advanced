const axios = require('axios');
const PostsController = require('../src/PostsController');
const MockAdapter = require('axios-mock-adapter');

//task 3, Mocking Axios in Jest

describe('Check ID', () => {
	test('positive test, return the correct id', async () => {
		controller = PostsController;
		const mock = new MockAdapter(controller.axiosInstance);
		const mockResponse = { id: 1 };

		mock.onGet('/posts/1').reply(200, mockResponse);
		const id = await controller.getId(1);
		expect(id).toBe(1);
	});

	test('negative test, getId is called with a non-existing id', async () => {
		controller = PostsController;
		const mock = new MockAdapter(controller.axiosInstance);
		const mockResponse = { id: 1 };

		try {
			mock.onGet('/posts/1').reply(404, mockResponse);
			const id = await controller.getId(1);
		} catch (err) {
			expect(err.response.status).toEqual(404);
		}
	});
});
