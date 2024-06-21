<template>
  <div class="d-flex vh-100 w-100">
    <MyPageSidebar />
    <div class="titleNcontent w-75 mx-auto">
      <div class="d-flex justify-content-between mb-3 mt-2">
        <h4 class="fw-bold">허위매물 신고</h4>
      </div>
      <hr />
      <table class="table">
        <thead class="text-center">
          <tr>
            <th>#</th>
            <th>제목</th>
            <th>신고일</th>
            <th>처리상태</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <AccordionItem
            v-for="(item, index) in items"
            kindOf="report"
            :key="index"
            :rowData="{
              index,
              item,
              isOpen: isOpen(index),
              toggle: () => {
                toggle(index, item);
              },
            }"
            @edit-inquiry="showReportFalseModal(item.details)" 
            @show-deleteReportModal="showDeleteReportModal" 
          />
          <!-- accordionItem한테 해당 details 받음 -->
        </tbody>
      </table>
    </div>
  </div>
  <ReportFalseModal id="ReportFalseModal" :itemDetails="itemDetails"/> <!-- 전달받은 details를 modal에 보냄 -->
  <DeleteReportModal id="DeleteReportModal" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Modal } from "bootstrap";
import MyPageSidebar from "@/components/MyPageSidebar.vue";
import AccordionItem from "@/components/AccordionItem.vue";
import ReportFalseModal from "@/components/ReportFalseModal.vue";
import DeleteReportModal from "../../../views/Mypage/ReportFalseListing/DeleteReportModal.vue"

let reportFalseModal = null;
let deleteReportModal = null;

onMounted(() => {
  reportFalseModal = new Modal(document.querySelector("#ReportFalseModal"));
  deleteReportModal = new Modal(document.querySelector("#DeleteReportModal"));
});

const itemDetails = ref("");

// 수정 버튼 클릭 시 실행되는 함수
function showReportFalseModal(details) {
  itemDetails.value = details;
  reportFalseModal.show();
  console.log(itemDetails.value);
}

// 삭제 버튼 클릭 시 실행되는 함수
function showDeleteReportModal() {
  deleteReportModal.show();
}

const items = ref([
  {
    id: 1,
    title: "신고 1",
    status: "처리완료",
    date: "2024/06/18",
    details: "신고 1에 대한 상세한 답변 내용입니다.",
  },
  {
    id: 2,
    title: "신고 2",
    status: "처리 중",
    date: "2024/06/18",
    details: "신고 2에 대한 처리 중인 상태입니다.",
  },
  {
    id: 3,
    title: "신고 3",
    status: "처리 중",
    date: "2024/06/18",
    details: "신고 3에 대한 처리 중인 상태입니다.",
  },
  {
    id: 4,
    title: "신고 4",
    status: "처리 중",
    date: "2024/06/18",
    details: "신고 4에 대한 처리 중인 상태입니다.",
  },
]);

const openIndex = ref(null);

function toggle(index, item) {
  openIndex.value = openIndex.value === index ? null : index;
  console.log("detail: ", item.details);
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
