<template>
  <div class="d-flex vh-100 w-100 mx-auto">
    <MyPageSidebar />
    <div class="titleNcontent w-75 mx-auto">
      <div class="d-flex justify-content-between mt-2 mb-3">
        <h4 class="fw-bold">1:1 문의</h4><span style="font-size: small; text-align: start;">답변이 있는 문의는 수정 및 삭제가 불가능 합니다.</span>
        <div>
          <router-link to="/QNA/CustomerInquiryForm">
            <button type="button" class="btn btn-warning me-1">
              1:1 문의하기
            </button>
          </router-link>
        </div>
      </div>
      <hr>
      <table class="table">
        <thead class="text-center">
          <tr>
            <th>번호</th>
            <th>문의 유형</th>
            <th>제목</th>
            <th>등록일</th>
            <th>상세</th>
            <th>답변상태</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <AccordionRow
            v-for="(item, index) in page.question"
            kindOf="qna"
            :key="item.qnumber"
            :rowData="{
              index,
              item,
              isOpen: isOpen(index),
              toggle: () => toggle(index),
            }"
            @show-deleteQnaModal="showDeleteQnaModal" 
          />
        </tbody>
      </table>
      <Pagination
      v-if="page.pager.totalPageNo != 0"
      :currentPage="currentPage"
      :totalPages="totalPages"
      page="myCustomerInquiry"
      @update:currentPage="handlePageChange"
    />
    <div v-else class="w-75 container">
      <div class="text-center mt-5 mb-5">
        문의가 없습니다.
      </div>
    </div>
    </div>
  </div>
  <AgreeDeleteModal id="DeleteQuestionModal" @delete="agreeDeleteQuestion" @close="hideModal">
    <template v-slot:body>
        <div class="modal-body">
          <p class="fw-bold p-4 h-4 text-center">
            해당 문의사항을 삭제 하시겠습니까? <br />
            삭제 후에 수정 불가합니다.
          </p>
        </div>
      </template>
  </AgreeDeleteModal>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { Modal } from "bootstrap";
import MyPageSidebar from "@/components/MyPageSidebar.vue";
import AccordionRow from "@/components/AccordionItem.vue";
import AgreeDeleteModal from "@/components/AgreeDeleteModal.vue"
import qnaAPI from "@/apis/qnaAPI";
import Pagination from "@/components/Pagination";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

let deleteQnaModal = null;

let currentPage = ref(1);
let totalPages = ref();

const deleteQnumber = ref();
const deleteQunumber = ref();
const deleteIndex = ref();

// DB에서 가져온 리스트
const page = ref({
  question : [],
  pager : {},
});

onMounted(() => {
  deleteQnaModal = new Modal(document.querySelector("#DeleteQuestionModal"));
});

// 삭제 버튼 클릭 시 실행되는 함수
function showDeleteQnaModal(qnumber,qunumber,index) {
  deleteQnaModal.show();
  // 아코디언에서 해당하는 게시물의 qnumber와 qunumber를 가져옴
  deleteQnumber.value = qnumber;
  deleteQunumber.value = qunumber;
  deleteIndex.value = index;

  console.log("삭제 버튼 클릭 시 실행되는 함수", deleteQnumber.value, deleteQunumber.value);

}

function hideModal() {
  deleteQnaModal.hide();
}


// 게시물 삭제
async function agreeDeleteQuestion(){

  console.log("삭제 실행");
  try {
    await qnaAPI.deleteQuestion(deleteQnumber.value, deleteQunumber.value);
    console.log("삭제 완료");  
    hideModal();
    getList()
    isOpen();
  } catch (error) {
    console.log("삭제 실패",error);
    hideModal()
  }
}

function handlePageChange(page){
    currentPage.value = page;
    router.push(`/Mypage/CustomerInquiry?page=${currentPage.value}`);
  }

// 고객의 문의 리스트 가져오기 함수 정의
async function getList(){
  console.log("고객의 문의 리스트 가져오기 실행");
  try {
    const response = await qnaAPI.getQuestionListForUser(currentPage.value);
    page.value.question = response.data.question;
    page.value.pager = response.data.pager;
    totalPages.value = page.value.pager.totalPageNo
    console.log("가져온 첫번째 문의 객체", page.value.question[0]);
  } catch (error) {
    console.log(error);
  }
}

// 리스트 가져오기
getList();

// 페이지가 변하면 게시물 가져오는 메소드 실행하기
watch(currentPage, () => {
  console.log("페이지 변함 감지");
  getList();
})

const openIndex = ref(null);

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index;
  console.log("아코디언 닫기",openIndex.value);
}

function isOpen(index) {
  console.log("아코디언 열기",openIndex.value);

  return openIndex.value === index;
}
</script>

<style scoped>
.titleNcontent {
  width: 80%;
  padding: 20px;
}
table {
  width: 100%;
  margin-top: 20px;
}
</style>
