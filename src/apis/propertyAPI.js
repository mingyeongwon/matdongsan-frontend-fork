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

// 매물 썸네일 사진 다운로드
const propertyAttachDownload = (pnumber) =>
  //PathVariable로 데이터 전송
  axios.get("/pattach/" + pnumber, { responseType: "blob" });

// 매물 디테일 사진 다운로드
const detailPropertyAttachDownload = (ppnumber) =>
  axios.get("/detailPattach/" + ppnumber, { responseType: "blob" });

// 매물 삭제
const deleteProperty = (pnumber) => {
  return axios.delete("/deleteProperty/" + pnumber);
};

// 인기 매물 리스트
const getPopularPropertyList = () => {
  return axios.get("/popularProperty");
};

// 매물 데이터
const getPropertyData = (pnumber, date) => {
  return axios.get("/Property/" + pnumber, { params: { date } });
};

// 댓글 작성
const postPropertyComment = (userComment) => {
  console.log("userComment.ucPnumber : " + userComment.ucPnumber);
  return axios.post("/Property/" + userComment.ucPnumber, qs.stringify(userComment));
};

// 댓글 수정
const editPropertyComment = (editingComment) => {
  return axios.put(`/Property/${editingComment.ucUnumber}/${editingComment.ucnumber}`, qs.stringify(editingComment));
};

// 댓글 삭제
const deletePropertyComment = (pnumber, ucnumber) => {
  return axios.delete(`/Property/${pnumber}/${ucnumber}`);
};

// 매물 신고
const postReportProperty = (report) => {
  console.log("report : " + report.rcontent);
  console.log("report : " + report.rPnumber);
  return axios.post(
    "/createPropertyReport/" + report.rPnumber,
    qs.stringify(report)
  );
};

// 매물 신고 리스트
const getReportList = () => {
  return axios.get("/Mypage/ReportFalseListing");
};

// 매물 신고 삭제
const deletePropertyReport = (pnumber) => {
  console.log("pnumber : " + pnumber);
  return axios.delete("/deletePropertyReport/" + pnumber);
};

//매물 등록권 소유 여부 체크
const checkPropertyListing = () => {
  return axios.get("/paymentHistory");
};

//매물 등록권 구매
const purchasePropertyListing =(product) => {
  return axios.post("/Payment/PaymentResult/"+product);
}

// 매물 등록
const postProperty = (formData) => {
  return axios.post("/PropertyForm", formData);
}

// 좋아요
const likeProperty =  (pnumber) => {
  return axios.post("/likeProperty/" + pnumber);
}

// 좋아요 취소
const cancelLikeProperty =  (pnumber) => {
  return axios.delete("/cancelLikeProperty/" + pnumber);
}

// 좋아요 확인 
const isPropertyLiked =  (pnumber) => {
  return axios.get("/isPropertyLiked/" + pnumber);
}


export default {
  getPropertyList,
  getUserPropertyList,
  propertyAttachDownload,
  deleteProperty,
  getPopularPropertyList,
  detailPropertyAttachDownload,
  getPropertyData,
  postReportProperty,
  getReportList,
  deletePropertyReport,
  checkPropertyListing,
  purchasePropertyListing,
  postProperty,
  postPropertyComment,
  deletePropertyComment,
  editPropertyComment,
  likeProperty,
  cancelLikeProperty,
  isPropertyLiked
};
