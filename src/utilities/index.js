import axios from "axios";


const serverURL = axios.create({
    baseURL: "http://localhost:5000/api",
});

export default serverURL;