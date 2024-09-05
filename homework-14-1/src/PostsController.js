const BaseController = require('../src/BaseController.js');

class PostsController extends BaseController {
    constructor () {
        super();
    }

    async getId(id) {
        const response = await this.axiosInstance.get(`/posts/${id}`)
        return await response.data.id;
    }
}

module.exports = new PostsController;
