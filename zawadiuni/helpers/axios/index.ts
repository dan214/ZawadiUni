import axios from "axios";
import DataCard from "@/components/Charts/DataCard";

class Axios {
  public async getData(
    apiSuffix: string,
    configurations?: { [key: string]: any }
  ) {
    console.log("enetede");
    const https = require("https");
    const fs = require("fs");
    const agent = new https.Agent({
      cert: fs.readFileSync("./certificates/localhost.pem"),
      key: fs.readFileSync("./certificates/localhost-key.pem"),
    });
    const apiUrl: string = "https://localhost:7250/" + apiSuffix;
    const { data, status } = await axios.get(apiUrl, agent);
    return { data, status };
  }
}

const axiosApi: Axios = new Axios();
export default axiosApi;
