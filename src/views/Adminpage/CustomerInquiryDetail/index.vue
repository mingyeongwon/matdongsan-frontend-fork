<template>
  <div>
    <h2 style="text-align: center; margin-top: 70px; margin-bottom: 50px; font-weight: bold">고객 문의</h2>
  <div class="w-50 container">
    <div class="row me-2">
      <div class="col text-end">게시일 : {{ customerInquiry.date }}</div>
    </div>
    <hr>
    <div class="row me-5">
      <span class="col-2 text-center">제목</span>
      <div class="col-10">{{ customerInquiry.title }}</div>
    </div>
    <hr>
    <div class="row me-5">
      <span class="col-2 mb-3 text-center mt-5" >공지 내용</span>
      <div class="col-10 w-75 mt-5 mb-5">{{ customerInquiry.content }}</div>
    </div>
    
    <hr>
    <!-- <div class="row d-flex me-4" style=" justify-content: end; align-items: center; ">
      <button type="button btn-sm" @click="goBack">뒤로 가기</button>
    </div> -->
    <form @submit.prevent="hanndleSubmit">
      <div class="row me-5">
        <span class="col-2 mb-3 text-center mt-3" >답변</span>
        <div class="col-10">
        <VueQuillEditor class=" " v-model="answer" />
      </div>
      </div>
      
      
      <div class="row d-flex me-4" style=" justify-content: center; align-items: end; ">
        <button class="mt-3" type="submit">답변 완료</button>
      </div>
      <div class="row me-5">
        <span class="mt-3 ms-2 text-center" >{{errorMessage}}</span>
      </div>
    </form>
    </div>
    <!-- 컴포넌트 삽입 -->
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import VueQuillEditor from "@/components/VueQuillEditor.vue";

const router = useRouter();

const customerInquiry = ref({
title:"고객문의 제목 test",
content:"고객문의 내용 test 고객문의 내용 test 고객문의 내용 test 고객문의 내용 test 고객문의 내용 test 고객문의 내용 test 고객문의 내용 test 고객문의 내용 test 고객문의 내용 test ",
date : "2024-04-23",
});

const answer = ref("");

function goBack(){
router.back();
}

const checkForm = computed(() => {
var result = answer.value !== ""
return result;
});

const errorMessage = ref("");

function hanndleSubmit(){
if(checkForm.value){
  // 통신 코드...

  // 완료 하면 뒤로가기
  goBack();

} else {
  errorMessage.value = "답변을 입력하세요"
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
