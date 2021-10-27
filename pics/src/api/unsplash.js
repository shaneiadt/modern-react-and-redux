import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID tw9QXKnDfli2JMKwguRSXBWaNvymA9rESKHzoIqfvVo'
    }
});