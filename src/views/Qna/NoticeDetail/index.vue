<template>
    <div>
      <h2 style="text-align: center; margin-top: 70px; margin-bottom: 50px; font-weight: bold">공지사항</h2>
    <div class="w-50 container">
      <div class="row me-2">
        <div class="col text-end">게시일 : {{ notice.ndate }}</div>
      </div>
      <hr>
      <div class="row me-5">
        <span class="col-2 text-center">제목</span>
        <div class="col-10">{{ notice.ntitle }}</div>
      </div>
      <hr>
      <div class="row me-5">
        <span class="col-2 mb-3 text-center mt-5" >공지 내용</span>
        <div class="col-10 w-75 mt-5 mb-5">{{ notice.ncontent }}</div>
      </div>
      
      <hr>
      <div class="row d-flex me-4" style=" justify-content: end; align-items: center; ">
        <button v-if="$store.state.userRole == 'ADMIN'" type="button btn-sm" @click="updateNotice">수정</button>
        <button v-if="$store.state.userRole == 'ADMIN'" type="button btn-sm" @click="deleteNotice">삭제</button>
        <button type="button btn-sm" @click="goBack">뒤로 가기</button>
      </div>
      </div>
      <!-- 컴포넌트 삽입 -->
    </div>
    <DeleteNoticeModal id="DeleteNoticeModal" @close="realdelete"/>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Modal } from "bootstrap";
import { useRouter, useRoute } from "vue-router";
import DeleteNoticeModal from "./DeleteNoticeModal.vue"
import qnaAPI from "@/apis/qnaAPI";
import axios from "axios";
const router = useRouter();
const route = useRoute();

// 쿼리에서 nnumber가져오기
const nnumber = route.query.nnumber;

const notice = ref({});

// 공지 디테일 가져오는 메소드 정의
async function getterNotice(nnumber){
  try {
    const response = await qnaAPI.getNotice(nnumber);
    notice.value = response.data
    console.log("공지 가져옴",notice.value);
  } catch (error) {
    console.log("공지 안 가져와짐",error);
  }
}

getterNotice(nnumber);

// 뒤로가기 버튼
function goBack(){
  router.back();
}

// 수정하기 버튼
function updateNotice(){
  router.push({
    path:"/QNA/Noticeform",
    query:{nnumber: notice.value.nnumber}
  });
}

let deleteNoticeModal = null;

onMounted(() => {
  deleteNoticeModal = new Modal(document.querySelector("#DeleteNoticeModal"));
});

// 삭제 버튼 클릭 시 확인하는 모달 켜짐
function deleteNotice() {
  deleteNoticeModal.show();
}

// 모달에서도 최종적으로 삭제버튼을 누를 경우
function realdelete(){
  // 삭제 하는 axios 작성
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
  margin-right: 10px;
}
</style>
