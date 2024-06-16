<template>
  <div class="d-flex">
    <MyPageSideBar />
    <div class="w-75 mx-auto">
      <div class="d-flex justify-content-betwwen">
        <h4 class="col h4 mt-5 fw-bold">매물관리</h4>
        <div class="mt-5">
          <select class="form-select" name="filter" id="">
            <option value="날짜순" selected>최신순</option>
            <option value="날짜순">오래된순</option>
            <option value="날짜순">거래완료</option>
            <option value="날짜순">거래중</option>
          </select>
        </div>
      </div>
      <hr />
      <table class="table mt-5">
        <thead>
          <tr>
            <th scope="col" class="text-center">매물번호</th>
            <th scope="col" class="text-center">대표사진</th>
            <th scope="col" class="text-center">제목 / 내용</th>
            <th scope="col" class="text-center">매물 상태</th>
            <th scope="col" class="text-center">등록한 날짜</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="property in properties" :key="property.id">
            <th scope="row" class="text-center align-middle">
              {{ property.id }}
            </th>
            <td class="align-middle text-center">
              <img src="@/assets/test.png" width="150" alt="매물 사진" />
            </td>
            <td class="align-middle text-muted">
              <small class="text-muted"> 원룸 </small>
              <div class="fw-bold">전세 7400</div>
              <small
                >반지층,20m<sup>2</sup>,관리비 5만, 전세대출가능
                보증보험가입가능</small
              >
            </td>
            <td class="fw-bold align-middle text-center">2024/06/12</td>
            <td class="fw-bold align-middle">
              <div class="d-flex flex-column">
                <button class="btn btn-warning btn-sm fw-bold mb-3">
                  수정
                </button>
                <button
                  class="soldOutBtn btn btn-sm fw-bold mb-3"
                  @click="showTransactionModal"
                >
                  거래완료
                </button>
                <button
                  :class="[
                    'btn btn-sm fw-bold',
                    property.isActive ? 'btn-danger' : 'btn-success',
                  ]"
                  @click="toggleActive(property)"
                >
                  {{ property.isActive ? "비활성화" : "활성화" }}
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <TransactionModal id="TransactionModal" @close="hideTransactionModal" />
  </div>
</template>

<script setup>
import MyPageSideBar from "@/components/MyPageSidebar.vue";
import TransactionModal from "./TransactionCompleted.vue";
import { onMounted, ref } from "vue";
import { Modal } from "bootstrap";

let transactionModal = null;

onMounted(() => {
  transactionModal = new Modal(document.querySelector("#TransactionModal"));
});
function toggleActive(property) {
  property.isActive = !property.isActive;
}
const properties = ref([
  { id: 1, isActive: true },
  { id: 2, isActive: false },
  // 추가 매물 데이터
]);
function showTransactionModal() {
  transactionModal.show();
}
function showDeactivateModal() {
  transactionModal.show();
}
function hideLoginModal() {
  transactionModal.hide();
}
</script>

<style scoped>
.soldOutBtn {
  background-color: #2f4858;
  color: #fff;
}
</style>