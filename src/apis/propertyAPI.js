import axios from "axios";
import qs from "qs";

// 전체 매물 리스트
const getPropertyList = (pageNo, size) => {
  //GET: http://localhost/board/list?pageNo=1

  return axios.get("/Property", { params: { pageNo, size } });
};

// 유저 매물 리스트
const getUserPropertyList = () => {
  return axios.get("/Mypage/ManageMyProperty");
};

//매물 사진 다운로드
const propertyAttachDownload = (pnumber) => 
  //PathVariable로 데이터 전송
  axios.get("/pattach/" + pnumber, { responseType: "blob" });


// 매물 삭제
const deleteProperty = (pnumber) => {
  return axios.delete("/deleteProperty/" + pnumber);
}

// 인기 매물 리스트
const getPopularPropertyList = () => {
  return axios.get("/popularProperty");
}

export default {
  getPropertyList,
  getUserPropertyList,
  propertyAttachDownload,
  deleteProperty,
  getPopularPropertyList
};
