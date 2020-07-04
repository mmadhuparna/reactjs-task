import axios from "axios"

//the api is not cors enabled, to enable it adding proxyurl

const proxyurl = "https://cors-anywhere.herokuapp.com/";

const placeurl = 'http://roadtrippers.herokuapp.com/api/v1/places/'
const placeidurl = 'http://roadtrippers.herokuapp.com/api/v1/place/'

const apiUrl = proxyurl + placeurl;
const detailurl= proxyurl + placeidurl;

const placesApi = {
    getcities: () =>{
        return axios.get(apiUrl);
    },

    getcity: id =>{
        return axios.get(detailurl + "/" + id);
    },

    removeTask: id =>{
        return axios.delete(apiUrl +"/"+ id);
    }
}



export default placesApi;