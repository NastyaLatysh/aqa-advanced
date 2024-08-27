const axios = require("axios");

const axiosInstance = axios.create({
    baseURL: 'https://aqa.advanced.test'
});

test ('check ', async () => {
    const request = await axiosInstance.get()

    console.log('request ', request)
});

