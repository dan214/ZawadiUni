import axios from "axios";


class Axios {

  public async getCourseData(courseId: string) {
    const apiUrl: string = "https://localhost:7250/course/" + courseId;
    const response = await axios.get(apiUrl);
    const { data, status } = response;
    return { data, status };
  }
}

const axiosApi: Axios = new Axios();
export default axiosApi;
