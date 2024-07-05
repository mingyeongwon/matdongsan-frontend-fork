<template>
  <div class="d-flex vh-100 w-100 mx-auto">
    <MyPageSidebar />
    <div class="titleNcontent w-75 mx-auto">
      <div class="d-flex justify-content-between mt-2 mb-3">
        <h4 class="fw-bold">1:1 문의</h4><span style="font-size: small; text-align: start;">답변이 있는 문의는 수정 및 삭제가 불가능 합니다.</span>
        <div>
          <router-link to="/Qna/CustomerInquiryForm">
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
            <th>#</th>
            <th>항목</th>
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
      :currentPage="currentPage"
      :totalPages="totalPages"
      page="myCustomerInquiry"
      @update:currentPage="handlePageChange"
    />
    </div>
  </div>
  <DeleteQnaModal id="DeleteQnaModal" @delete="deleteQuestion"/>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { Modal } from "bootstrap";
import MyPageSidebar from "@/components/MyPageSidebar.vue";
import AccordionRow from "@/components/AccordionItem.vue";
import DeleteQnaModal from "../../../views/Mypage/CustomerInquiry/DeleteQnaModal.vue"
import qnaAPI from "@/apis/qnaAPI";
import Pagination from "@/components/Pagination";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

let deleteQnaModal = null;

let currentPage = ref(1);
let totalPages = ref();

// DB에서 가져온 리스트
const page = ref({
  question : [],
  pager : {},
});

onMounted(() => {
  deleteQnaModal = new Modal(document.querySelector("#DeleteQnaModal"));
});

// 삭제 버튼 클릭 시 실행되는 함수
function showDeleteQnaModal(qnumber,qunumber) {
  deleteQnaModal.show();
}

function handlePageChange(page){
    currentPage.value = page;
    router.push(`/Mypage/CustomerInquiry?page=${currentPage.value}`);
  }

// 고객의 문의 리스트 가져오기 함수 정의
async function getList(){
  console.log("되냐");
  try {
    const response = await qnaAPI.getQuestionListForUser(currentPage.value);
    page.value.question = response.data.question;
    page.value.pager = response.data.pager;
    totalPages.value = page.value.pager.totalPageNo
    console.log("리스트 갯수", page.value.question.length);
    console.log("문의 객체",page.value.question[0]);
  } catch (error) {
    console.log(error);
  }
}

// 리스트 가져오기
getList();

// 페이지가 변하면 게시물 가져오는 메소드 실행하기
watch(currentPage, () => {
  console.log("와치와치");
  getList();
})

// 게시물 삭제
function deleteQuestion(){
  
}


const openIndex = ref(null);

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index;
}

function isOpen(index) {
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
