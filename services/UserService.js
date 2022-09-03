import axios from "axios";
import { url } from "../url";
class UserService {
    async login(phone) {
        const res = await axios.post(url + "/users/login", { phone: phone });
        return res.data;
    }
}

export default new UserService();
