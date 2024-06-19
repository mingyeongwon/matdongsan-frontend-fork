<template>
  <div class="d-flex vh-100 w-100">
    <MyPageSidebar />
    <div class="titleNcontent w-75 mx-auto">
      <div class="d-flex justify-content-between mb-3 mt-2">
        <h4 class="fw-bold">허위매물 신고</h4>
      </div>
      <hr>
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
          <AccordionRow
            v-for="(item, index) in items"
            :key="index"
            :rowData="{ index, item, isOpen: isOpen(index), toggle: () => toggle(index) }"
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
    title: "신고 1",
    status: "처리완료",
    date: "2024/06/18",
    details: "신고 1에 대한 상세한 답변 내용입니다.",
  },
  {
    title: "신고 2",
    status: "처리 중",
    date: "2024/06/18",
    details: "신고 2에 대한 처리 중인 상태입니다.",
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
