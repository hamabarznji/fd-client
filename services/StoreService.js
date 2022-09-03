import axios from "axios";
import { url } from "../url";
class StoreService {
    async getStores() {
        const res = await axios.get(url + "/stores");
        return res.data;
    }
}

export default new StoreService();
