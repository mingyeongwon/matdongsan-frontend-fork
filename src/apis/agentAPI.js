import axios from "axios";
import qs from "qs";

//게시물 쓰기
function signup(formData) {
  return axios.post("/Signup/AgentSignup", formData);
}

export default {
  signup,
};
