import axios from "axios";
import qs from "qs";
const getFavoriteList = (pageNo = 1,size) => {
  //GET: http://localhost/board/list?pageNo=1

  return axios.get(`/Property/favorite`, { params: { pageNo,size } });
};
export default {
  getFavoriteList,
};
