const axios = require('axios');
const BaseController = require('../src/BaseController.js');

//task 2, Testing Request Headers and Params

test('Testing Request Headers and Params', async () => {
	let controller = new BaseController();

	try {
		response = await controller.axiosInstance.get();
		expect(response.config.headers).toHaveProperty('Content-Type', 'kitty');
		expect(response.config.params).toHaveProperty('lolkek', 'chebureck');
	} catch (err) {
		console.log(err);
	}
});
