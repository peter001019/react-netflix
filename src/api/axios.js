import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "25f0ff387637f27d4d11676ac33f4031",
        language: "ko-KR",
    },
});

export default instance;