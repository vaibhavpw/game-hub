import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'64af7b569a6c43e0bd10c1b2434c5877'
    }
})