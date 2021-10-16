import axios from "axios";

const instance = axios.create({
    baseURL : "https://vue-axios-blog-example-default-rtdb.europe-west1.firebasedatabase.app"
})

// instance.defaults.headers.common

export default instance;