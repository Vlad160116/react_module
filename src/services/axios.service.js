import axios from "axios";

import baseURL from "../configs/urls";

expost const axiosService = axios.create({
    baseURL:baseURL
});