<template>
    <div>
      <h2 style="text-align: center; margin-top: 70px; margin-bottom: 50px; font-weight: bold">공지사항</h2>
    <div class="w-50 container">
      <div class="row me-2">
        <div class="col text-end">게시일 : {{ notice.date }}</div>
      </div>
      <hr>
      <div class="row me-5">
        <span class="col-2 text-center">제목</span>
        <div class="col-10">{{ notice.title }}</div>
      </div>
      <hr>
      <div class="row me-5">
        <span class="col-2 mb-3 text-center mt-5" >공지 내용</span>
        <div class="col-10 w-75 mt-5 mb-5">{{ notice.content }}</div>
      </div>
      
      <hr>
      <div class="row d-flex me-4" style=" justify-content: end; align-items: center; ">
        <button type="button btn-sm" @click="goBack">뒤로 가기</button>
      </div>
      </div>
      <!-- 컴포넌트 삽입 -->
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const notice = ref({
  title:"공지사항 제목 test",
  content:"공지사항 내용 test 공지사항 내용 test 공지사항 내용 test 공지사항 내용 test 공지사항 내용 test 공지사항 내용 test 공지사항 내용 test 공지사항 내용 test 공지사항 내용 test ",
  date : "2024-04-23",
});

function goBack(){
  router.back();
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

button, input, textarea{
  border: transparent;
  border-radius: 10px;
  padding: 5px;
  width: 10%;
  height: 40px;
  font-size: small
}

button {
  background-color: #2F4858;
  color: white;
}
</style>
