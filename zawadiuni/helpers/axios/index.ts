import axios from "axios";


class Axios {

  public async getData(courseId: string, apiCall: string) {
    const apiUrl: string = "https://localhost:7250/" + apiCall + "/" + courseId;
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
}

const axiosApi: Axios = new Axios();
export default axiosApi;
