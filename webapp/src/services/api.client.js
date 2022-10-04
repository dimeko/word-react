import axios from "axios"

class Client {
    static api_url = process.env.REACT_APP_API_URL
    static api_url_prefix = "/index.php/wp-json/wp/v2/"
    
    static async get(path, params) {
        let query_string = Object.entries(params).map(e => e.join('=')).join('&');
        return await axios.get(api_url + api_url_prefix + path + query_string)
    }

    static async post(path, payload) {
        return await axios.post(api_url + api_url_prefix + path, payload)
    }

    static async put(path, payload) {
        return await axios.put(api_url + api_url_prefix + path, payload)
    }
}

export default Client