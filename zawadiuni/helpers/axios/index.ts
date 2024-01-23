import axios from "axios";


class Axios {

  public async getData(itemId: string, apiCall: string) {
    const apiUrl: string = "https://localhost:7250/" + apiCall + "/" + itemId;
    const response = await axios.get(apiUrl);
    const { data, status } = response;
    return { data, status };
  }

  public async getAllData(apiCall: string) {
    const apiUrl: string = "https://localhost:7250/" + apiCall;
    const response = await axios.get(apiUrl);
    const { data, status } = response;
    return { data, status };
  }

  public async deleteData(itemId: string, apiCall: string) {
    const apiUrl: string = "https://localhost:7250/" + apiCall + "/" + itemId;
    const response = await axios.delete(apiUrl);
    const { data, status } = response;
    return { data, status };
  }

  public async postData(apiSuffix: string, postData: object) {
    const apiUrl: string = "https://localhost:7250/" + apiSuffix;
    const { data, status } = await axios.post(apiUrl, postData);
    return { data, status };
  }

}

const axiosApi: Axios = new Axios();
export default axiosApi;
