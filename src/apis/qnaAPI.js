import axios from "axios";
import qs from "qs";

// 고객 문의 생성
function createQuestion(formData){
    return axios.post("/Qna/CustomerInquiryForm",formData);
}

// 고객 문의 리스트 전체 가져오기(관리자 페이지)
function getAllQuestionList(pageNo){
    return axios.get("/Qna/CustomerInquiryList",{params:{pageNo:pageNo}});
}

// 고객 문의 리스트 해당 고객문의만 가져오기(마이 페이지)
function getQuestionListForUser(pageNo){
    return axios.get("/Qna/MyCustomerInquiryList",{params:{pageNo:pageNo}});
}

// 고객 문의 읽기
function readQuestion(qnumber,qUnumber){
    return axios.get("/Qna/ReadCustomerInquiry",{params:{qnumber:qnumber, qUnumber:qUnumber}});
}


export default {
    createQuestion,
    getAllQuestionList,
    readQuestion,
    getQuestionListForUser,
  };