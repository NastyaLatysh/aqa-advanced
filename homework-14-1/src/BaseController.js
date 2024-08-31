const axios = require('axios');

class BaseController {
    constructor () {
        console.log('create axios');
        this.axiosInstance = axios.create({
            baseURL: 'https://jsonplaceholder.typicode.com',
            headers: {
                'Content-Type': 'kitty'
            },
            params: {
                "lolkek": "chebureck" 
              },
        });
    }
}



module.exports = BaseController;