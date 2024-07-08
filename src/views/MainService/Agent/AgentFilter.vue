<template>
  <div class="filter-popup">
    <form @submit.prevent="submitFilter">
      <div class="mt-2">
        <div class="d-flex justify-content-center">
          <div class="border-top border-bottom border-start filter-box">
            <div>날짜</div>
            <ul class="">
              <li>
                <label for="date1">
                  <input
                    type="radio"
                    name="date"
                    id="date1"
                    value="desc"
                    v-model="filters.byDate"
                  />
                  최신순
                </label>
              </li>
              <li>
                <label for="date2">
                  <input
                    type="radio"
                    name="date"
                    id="date2"
                    value="asc"
                    v-model="filters.byDate"
                  />
                  오래된순
                </label>
              </li>
            </ul>
          </div>

          <div class="border-top border-bottom filter-box">
            <div>댓글</div>
            <ul class="">
              <li>
                <label for="comment1">
                  <input
                    type="radio"
                    name="comment"
                    id="comment1"
                    value="many"
                    v-model="filters.byComment"
                  />
                  댓글 많은 순
                </label>
              </li>
              <li>
                <label for="comment2">
                  <input
                    type="radio"
                    name="comment"
                    id="comment2"
                    value="less"
                    v-model="filters.byComment"
                  />
                  댓글 적은 순
                </label>
              </li>
            </ul>
          </div>
          <div class="border-top border-bottom filter-box">
            <div>평점</div>
            <ul class="">
              <li>
                <label for="rate1">
                  <input
                    type="radio"
                    name="rate"
                    id="rate1"
                    value="high"
                    v-model="filters.byRate"
                  />
                  별점 높은 순
                </label>
              </li>
              <li>
                <label for="rate2">
                  <input
                    type="radio"
                    name="rate"
                    id="rate2"
                    value="low"
                    v-model="filters.byRate"
                  />
                  별점 낮은 순
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div class="p-3 d-flex justify-content-end">
          <button type="reset" class="btn btn-outline-secondary">초기화</button>
          <button
            class="btn btn-warning ms-2"
            type="button"
            @click="submitFilter"
          >
            조건 검색
          </button>
        </div>
      </div>
    </form>

    <!-- 경고 모달 -->
    <div
      class="modal fade"
      id="warningModal"
      tabindex="-1"
      aria-labelledby="warningModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="warningModalLabel">경고</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">하나 이상의 필터를 선택해 주세요.</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { Modal } from "bootstrap";

const emits = defineEmits(["update:filterData"]);

const filters = ref({
  byRate: "",
  byComment: "",
  byDate: "",
});

watch(
  () => filters.value.byRate,
  (newValue) => {
    console.log("byRate changed:", newValue);
  }
);

watch(
  () => filters.value.byComment,
  (newValue) => {
    console.log("byComment changed:", newValue);
  }
);

watch(
  () => filters.value.byDate,
  (newValue) => {
    console.log("byDate changed:", newValue);
  }
);

function submitFilter() {
  if (
    !filters.value.byRate &&
    !filters.value.byComment &&
    !filters.value.byDate
  ) {
    console.log("No filters selected");
    const warningModal = new Modal(document.getElementById("warningModal"));
    warningModal.show();
  } else {
    emits("update:filterData", filters.value);
    //filters.value = { byRate: "", byComment: "", byDate: "" };
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  padding-top: 10px;
}

.filter-box {
  padding: 24px 10px 7px 17px;
  width: 20%;
  border-right: 1px solid #e0e0e0;
}
</style>
