import axios from "axios";
import qs from "qs";

const memberJoin = (formData) => {
  //user Data
  // {
  //     mid: "youngzo",
  //     mname: "심기금",
  //     mpassword: "12345",
  //     uemail : "simpson@naver.com"
  // }
  //POST 방식 : raw/JSON 방식으로 데이터 전달
  return axios.post("/member/Signup/MemberSignup", formData);
};
const getUserData = (uemail) => {
  return axios.get("/Mypage/MyInfomation/" + uemail);
};
const agentJoin = (agent) => {
  //user Data
  // {
  //     mid: "youngzo",
  //     mname: "심기금",
  //     mpassword: "12345",
  //     memail : "simpson@naver.com"
  // }
  //POST 방식 : raw/JSON 방식으로 데이터 전달
  return axios.post("/Signup/AgentSignup", agent);
};

//로그인
const login = (member) => {
  /*
        user = {
            mid: "user",
            mpassword: "12345"
        }
    */

  //POST 방식 : QueryString(mid=user&mpassword=12345) 방식으로 데이터 전달
  return axios.post("/login", qs.stringify(member));
};

// 탈퇴
const deleteAccount = (currPw) => {
  return axios.put("/MyPage/DeleteAccount", { currPw: currPw });
};

export default {
  memberJoin,
  agentJoin,
  login,
  getUserData,
  deleteAccount
};
