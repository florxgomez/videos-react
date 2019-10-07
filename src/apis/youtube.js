import axios from 'axios';

const KEY = 'AIzaSyBTUSVTQB6_pkvSNOtu9r_P7ImLQwM4cMw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})