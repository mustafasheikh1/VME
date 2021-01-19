import axios from "axios";
import { API_ROUTES } from './apiURL';
import { parseJwt } from '../../utils/token';

class API {
    login(username, password){
        return axios.post(API_ROUTES.LOGIN, { username, password })
    }

    async getProfile() {
        let token = localStorage.getItem('current_usr');
        let usr = parseJwt(token);
        let userData = await axios.get(`${API_ROUTES.GET_USER}/${usr.user_id}`);
        if(userData.status === 200 && userData.data?.user_profile){
            let profile = await axios.get(`${API_ROUTES.GET_PROFILE}/${userData.data.user_profile}`);
            if(profile.status === 200 && profile.data){
                return profile.data
            }
        }
    }

    async getAds(){
        let ads = await axios.get(`${API_ROUTES.ADS}`);
        if(ads.status === 200 && ads.data){
            console.log(ads.data)
        }
    }

        
}

export default API;