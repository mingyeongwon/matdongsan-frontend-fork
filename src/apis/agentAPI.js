import axios from "axios";
import qs from "qs";

//중개인 회원가입
function signup(formData) {
  return axios.post("/Signup/AgentSignup", formData);
}

//중개인 리스트
const getAgentList = (pageNo, size) => {
  //GET: http://localhost/agent?pageNo=1&size=10

  return axios.get("/Agent", { params: { pageNo, size } });
};

//중개인 데이터
const getAgentDataByNumber = (anumber) => {
  return axios.get("/Agent/" + anumber);
};
//중개인 프로필 사진 다운로드
const agentAttachDownload = (anumber) =>
  //PathVariable로 데이터 전송
  axios.get("/aattach/" + anumber, { responseType: "blob" });

//중개인 리뷰 작성
const postAgentReview = (reviewData) => {
  return axios.post("/Agent/" + reviewData.arAnumber, qs.stringify(reviewData));
};

//중개인 리뷰 삭제
const deleteAgentReview = (anumber, arnumber) => {
  return axios.delete(`/Agent/${anumber}/${arnumber}`);
};

export default {
  signup,
  getAgentList,
  agentAttachDownload,
  getAgentDataByNumber,
  postAgentReview,
  deleteAgentReview,
};
