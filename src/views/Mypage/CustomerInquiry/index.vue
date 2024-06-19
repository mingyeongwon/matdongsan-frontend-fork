<template>
  <div class="d-flex vh-100 w-100 mx-auto">
    <MyPageSidebar />
    <div class="titleNcontent w-75 mx-auto">
      <div class="d-flex justify-content-between mt-2 mb-3">
        <h4 class="fw-bold">1:1 문의</h4>
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
            <th>답변상태</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <AccordionRow
            v-for="(item, index) in items"
            :key="index"
            :rowData="{
              index,
              item,
              isOpen: isOpen(index),
              toggle: () => toggle(index),
            }"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MyPageSidebar from "@/components/MyPageSidebar.vue";
import AccordionRow from "@/components/AccordionItem.vue";
const items = ref([
  {
    title: "문의 1",
    status: "답변 완료",
    date: "2024/06/18",
    details: "문의 1에 대한 상세한 답변 내용입니다.",
  },
  {
    title: "문의 2",
    status: "처리 중",
    date: "2024/06/18",
    details: "문의 2에 대한 처리 중인 상태입니다.",
  },
]);

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
