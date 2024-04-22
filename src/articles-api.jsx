import axios from "axios";

axios.defaults.baseURL ="https://api.unsplash.com/v1";
const API_KEY = '09-KZ0TrDu9rq02gIycucM3aIx66EKbFja3BLyK0f1k';
axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
    per_page: 10,
    orientation: 'landscape'
}


export const fetchPhotos = async (searchQuery, currentPage) => {
    const {data} = await axios.get(`/search/photos?query=${searchQuery}&page=${currentPage}`)
    return data

}