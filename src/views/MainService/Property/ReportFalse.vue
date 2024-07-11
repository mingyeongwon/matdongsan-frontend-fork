<template>
  <div>
    <section class="col-7 ps-4 mt-5 mb-3">
      <button class="reportBtn p-3 w-100 text-start fw-bold bg-light" @click="showReportFalseModal">허위매물 신고하기</button>
    </section>
  </div>

  <!-- 모달 -->
  <div class="modal" id="ReportFalseModal">
    <div class="modalDialog modal-dialog modal-fullsize modal-dialog-centered">
      <div class="modalContent modal-content modal-fullsize">
        <div class="modal-body">
          <div class="d-flex mx-auto flex-row-reverse">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close">
            </button>
          </div>
          <div class=" ms-5 me-5">
            <form @submit.prevent="handleReportSubmit">
              <h5 style="font-weight: bold; text-align: center; margin-bottom: 20px;">허위매물 신고하기</h5>
              <div class="row">
                <div class="col-2">신고<br>내용</div>
                <textarea placeholder="정확한 확인을 위해 신고내용을 구체적으로 기재해 주세요. (20자 이상) 본 신고 내용은 해당 중개업소에게 전달되므로, 개인정보(연락처, 이름 등)는 기재하지 말아주세요." 
                  class="col-10" style="height: 100px; font-size: small;" v-model="report.rcontent">
                </textarea>
              </div>
              <hr>
              <p style="font-weight: bold;">신고하기전에 확인해주세요!!</p>
              <div class="row">
                <input class="col-1" type="checkbox" id="checkbox1" v-model="report.checkbox">
                <label class="col-11" for="checkbox1" style="font-size: small;">2020년 2월 21일부터, 정당한 이유 없이 시세에 영향을 주기 위해 공인중개사 등의 광고를 방해하면 3년 이하 징역 또는 3,000만원 이하 벌금에 처해집니다. 신고 시 명확한 사실을 기재해 주세요.</label>
              </div>
              <div class="row mt-5">
                <button class="col btn btn-sm me-5" style="background-color: grey; color: white" data-bs-dismiss="modal"> 취소</button>
                <button type="submit" class="col btn btn-sm btn-warning" :disabled="!checkReportFalseData">신고하기</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { Modal } from "bootstrap";
import { useRoute } from "vue-router";
import propertyAPI from "@/apis/propertyAPI";

const route = useRoute();

const props = defineProps([
  "itemDetails",
  "pnumber"
]);

const editReportDetails = ref(props.itemDetails);

// 매물 데이터
const report = ref({
  rcontent: '',
  rPnumber: props.pnumber,
  checkbox: '',
});

// 모달 열기
function showReportFalseModal() {
  const reportFalseModal = new Modal(document.getElementById("ReportFalseModal"));
  reportFalseModal.show();
}

// pnumber 잘 전달되는지 확인
console.log("report false modal received pnumber : " + props.pnumber);

// 부모 컴포넌트에서 itemDetails 변경될 때마다 해당 변경 사항을 반영
watch(() => props.itemDetails, (newItemDetails) => {
  editReportDetails.value = newItemDetails;
});

const reportFalse = ref({
  content: "",
  checkbox: ""
});

const checkReportFalseData = computed(() => {
  return report.value.checkbox !== "" && report.value.rcontent !== "";
});

// 매물 신고 폼 제출
async function handleReportSubmit() {
  try {
    const data = JSON.parse(JSON.stringify(report.value));
    console.log("test: " + data);
    await propertyAPI.postReportProperty(data);
    // 모달 닫기
    const reportFalseModal = Modal.getInstance(document.getElementById("ReportFalseModal"));
    reportFalseModal.hide();
    report.value.rcontent="";
    report.value.checkbox="";
  } catch (error) {
    console.log(error);
  }
}
</script>

<style scoped>
.reportBtn {
  background-color: rgb(250, 250, 250);
  border: none;
  font-size: 14px;
}

input {
  border: 1px solid rgb(237, 237, 237);
}

.loginInputBox {
  height: 40px;
}

.logo-box h2 {
  font-size: 18px;
}

.logo-box p {
  font-size: 12px;
}

.findIdPassword > span {
  color: rgb(151, 151, 151);
}

.modal {
  --bs-modal-width: 30%;
}

input[type=checkbox] {
  transform: scale(0.5);
}
</style>
