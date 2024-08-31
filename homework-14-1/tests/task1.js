const axios = require("axios");
const BaseController = require('../src/BaseController.js');


//task 1, checking that the error is handled correctly

    

test ('checking a non-existent page', async () => {

    let response = null;
    let controller = new BaseController;

    try{
        response = await controller.axiosInstance.get('/ua');
        
    } catch (err) {
        expect(err.response.status).toEqual(404);
    }

});
