import axios from "axios";

const apikey = process.env.NEXT_PUBLIC_API_KEY;

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;



