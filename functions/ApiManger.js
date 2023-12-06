import axios from "axios";


const ApiManager = axios.create({
     baseURL: "https://localhost:5006",
     responseType: 'json',
     withCredentials: true
})

export default ApiManager;