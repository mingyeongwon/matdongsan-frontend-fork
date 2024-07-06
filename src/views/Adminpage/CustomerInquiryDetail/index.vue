<template>
  <div>
    <h2 style="text-align: center; margin-top: 70px; margin-bottom: 50px; font-weight: bold">고객 문의</h2>
  <div class="w-50 container pb-5">
    <div class="row me-2">
      <div class="col text-end">게시일 : {{ formatDate(customerInquiry.qdate) }}</div>
    </div>
    <div class="row me-2">
      <div class="col text-end">작성자 : {{ qWriter }}</div>
    </div>
    <hr>
    <div class="row me-5">
      <span class="col-2 text-center">제목</span>
      <div class="col-10">{{ customerInquiry.qtitle }}</div>
    </div>
    <hr>
    <div class="row me-5">
      <span class="col-2 mb-3 text-center mt-5" >문의 내용</span>
      <div class="col-10 w-75 mt-5 mb-5">{{ customerInquiry.qcontent }}</div>
    </div>
    <hr>
    <div class="row me-5">
      <span class="col-2 mb-3 text-center mt-5" >첨부파일</span>
      <div class="col-10 w-75 mt-5 mb-5"><img v-if="qAttach != null" width="150" :src="qAttach"/><div v-else> *첨부 파일 없음</div></div>
    </div>
    
    <hr>
    <!-- 관리자로 로그인 했을 때만 보이게 하기 -->
    <div v-if="$store.state.userRole == 'ADMIN'">
      <!-- <answerForm /> -->
      <form @submit.prevent="hanndleSubmit">
      <div class="row me-5">
        <span class="col-2 mb-3 text-center mt-3" >답변</span>
        <div class="col-10">
        <VueQuillEditor  v-model="answer" />
      </div>
      </div>
      
      
      <div class="row d-flex me-4" style=" justify-content: center; align-items: end; ">
        <button class="mt-3" type="submit" :disabled="checkForm">완료</button>
      </div>
      
    </form>
    </div>
    </div>
    <!-- 컴포넌트 삽입 -->
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import qnaAPI from "@/apis/qnaAPI";
import VueQuillEditor from "@/components/VueQuillEditor.vue";

const router = useRouter();
const route = useRoute();

// 쿼리에서 가져온 qnumber, qunumber
const qnumber = route.query.qnumber;
const qunumber = route.query.qunumber;

const customerInquiry = ref({});
const qWriter = ref();
const qAttach = ref();

// 문의 내용 가져오기
async function getQuestion(){
  try {
    const response = await qnaAPI.readQuestion(qnumber,qunumber);  
    customerInquiry.value = response.data;
    console.log("문의 객체: ",customerInquiry.value);
  } catch (error) {
    console.log(error);
  }
  
}
// 작성자 가져오기
async function getWriter(){
  try {
    const responseWriter = await qnaAPI.getWriter(qunumber);
    qWriter.value = responseWriter.data;
    console.log("작성자: ", qWriter.value);
  } catch (error) {
    console.log(error);
  }
  
}

// 첨부파일 가져오기
async function getAttach(){
  try {
    console.log("실행 첨부");
    const responseAttach = await qnaAPI.getAttach(qnumber);
    const blob = responseAttach.data;
    qAttach.value = URL.createObjectURL(blob);
    console.log("첨부파일: ", qAttach.value);
  } catch (error) {
    console.log("실행 첨부 실패");

    console.log(error);
  } 
}

// 날짜 형식 맞추기
function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 필요
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// 문의 정보 불러오기
getWriter()
getQuestion()
getAttach()

// 답변 제출하기
const answer = ref("");

// 답변이 비어있으면 제출 버튼 비활성화
const checkForm = computed(() => {
var result = answer.value !== ""
return result;
});

async function hanndleSubmit(){
  try {
    const formData = new FormData();
    formData.append("acontent",answer.value);
    formData.append("aQnumber",qnumber);
    await qnaAPI.createAnswer(formData);
    console.log("답변 생성 성공");
    router.back();
  } catch (error) {
    console.log("답변 생성 실패",error);
  }

}

</script>

<style scoped>
.askMenu{
background-color: transparent;
color: black;
border: none;
}

.askMenu:hover{
background-color: #2F4858;
color: white;
border: 2px solid black;
}

.askMenuBtn:hover{
color: white;
}

button {
background-color: #2F4858;
color: white;
border: transparent;
border-radius: 10px;
padding: 5px;
width: 10%;
/* margin-right: 100px; */
height: 40px;
font-size: small
}

input {
border: 1px solid lightgray;
height: 120px;
border-radius: 10px;
}


</style>
