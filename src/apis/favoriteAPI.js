import axios from "axios";
import qs from "qs";
const getFavoriteList = (pageNo = 1) => {
  //GET: http://localhost/board/list?pageNo=1

  return axios.get("/board/list", { params: { pageNo } });
};
export default {
  getFavoriteList,
};
