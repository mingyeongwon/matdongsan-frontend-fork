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

// 문의 작성자 이메일 가져오기
function getWriter(qUnumber){
    return axios.get("/Qna/getQuestionWriter", {params:{qUnumber:qUnumber}});
}

// 문의 첨부파일 가져오기
function getAttach(qnumber){
    return axios.get("/Qna/qattach/"+qnumber, {responseType:"blob"});
}

// 문의 수정 하기
function updateQuestion(formData) {
    return axios.put("/Qna/MyCustomerInquiryUpdate", formData);
}

// 문의 삭제 하기
function deleteQuestion(qnumber,qUnumber) {
    return axios.delete("/Qna/MyCustomerInquiryDelete",{params:{qnumber:qnumber, qUnumber:qUnumber}});
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 공지사항 리스트 가져오기
function getNoticeList(pageNo, searchKeyword, sort){
    return axios.get("/Qna/NoticeList",{params:{pageNo:pageNo, searchKeyword:searchKeyword, sort:sort}})
}

// 공지사항 읽기
function getNotice(nnumber){
    return axios.get("/Qna/NoticeDetail", {params:{nnumber:nnumber}})
}

export default {
    createQuestion,
    getAllQuestionList,
    readQuestion,
    getQuestionListForUser,
    getWriter,
    getAttach,
    updateQuestion,
    deleteQuestion,
    getNoticeList,
    getNotice
  };