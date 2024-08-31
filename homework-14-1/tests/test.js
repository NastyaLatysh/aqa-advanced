const axios = require('axios');
const PostsController = require('../src/PostsController');
const MockAdapter = require('axios-mock-adapter');


describe('Check ID', () => {
    let mock;

    // beforeAll(() => {
    //     console.log('create mock');
        
    // });

    beforeAll(() => {
        console.log('create mock');
        return mock = new MockAdapter(axios.create());
    })

    // afterEach(() => {

    //     // mock.reset();
    // });

    // afterAll(() => {
       
    //     // mock.restore();
    // });

    

    

    it('positive test, return the correct id', async () => {

        

        // const controller = PostsController;

        // axios.create = jest.fn(() => axios);

       
        
        
        controller = new PostsController;



        const mockResponse = { id: 999 };
        mock.onGet('/posts/1').reply(200, mockResponse);

        
        const id = await controller.getId(1);
        
        
        // axios.get('/posts/1').then(function (response) {
        //     console.log(response);
        //   });

        // const id = await PostsController.getId(1);
        

        
        // expect(id).rejects.toBe(1);
    });

    // it('negative test, getId is called with a non-existing id', async () => {
    //     const mockResponse = { id: 1 };
    //     mock.onGet('/posts/1').reply(404, mockResponse);


    //     try{
    //         response = await PostsController.getId(1);
            
    //         console.log('asdasdas 1 ', response);
    //     } catch (err) {
    //         console.log('asdasdas 2');
    //         expect(err.response.status).toEqual(404);
    //     }


        
    // });
});
