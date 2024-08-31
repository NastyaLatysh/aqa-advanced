const BaseController = require('../src/BaseController.js');

class PostsController extends BaseController {
    constructor () {
        super();
    }

    async getId(id) {
        console.log(`/posts/${id}`);
        const response = await this.axiosInstance.get(`/posts/${id}`)

        console.log('data ', response.data);
        return await response.data.id;
    }
}

module.exports = PostsController;
