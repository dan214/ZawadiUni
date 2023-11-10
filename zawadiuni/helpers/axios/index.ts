import axios from "axios";
import DataCard from "@/components/Charts/DataCard";

class Axios {
  public async getData(
    apiSuffix: string,
    configurations?: { [key: string]: any }
  ) {
    console.log("enetede");
    const apiUrl: string = "https://localhost:7250/" + apiSuffix;
    const { data, status } = await axios.get(apiUrl);
    return { data, status };
  }
}

const axiosApi: Axios = new Axios();
export default axiosApi;
