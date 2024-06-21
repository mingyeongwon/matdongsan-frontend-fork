<template>
    <!--  -->
    <div class="modal">
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
                <form v-on:submit.prevent="handleSubmit">
                    <h5 style="font-weight: bold; text-align: center; margin-bottom: 20px;" >허위매물 신고하기</h5>
                    <div class="row">
                      <div class="col-2">신고<br>내용</div>
                      <textarea placeholder="정확한 확인을 위해 신고내용을 구체적으로 기재해 주세요. (20자 이상) 본 신고 내용은 해당 중개업소에게 전달되므로, 개인정보(연락처, 이름 등)는 기재하지 말아주세요." 
                        class="col-10" style="height: 100px; font-size: small;" v-model="editReportDetail">
                      </textarea>
                    </div>
                    <hr>
                    <p style=" font-weight: bold;">신고하기전에 확인해주세요!!</p>
                    <div class="row">
                        <input class="col-1" type="checkbox" id="checkbox1" v-model="reportFalse.checkbox">
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
  import { ref, computed, defineProps, watch } from "vue";

  const prop = defineProps ({
  reportDetail: String,
  });

 

  const editReportDetail = ref(prop.reportDetail);
console.log(editReportDetail.value);
//   watch(() => prop.reportDetail, (newReportDetail) => {
//     editReportDetail.value = newReportDetail;
// });


  let reportFalse = ref({
    content: "",
    checkbox: "",
  });

  const checkReportFalseData = computed(() => {
    var result = editReportDetail.value !== "" && reportFalse.value.checkbox !== "";
    return result;
  });

  function handleSubmit() {
    console.log(JSON.parse(JSON.stringify(reportFalse.value)));
  }

  </script>
  
  <style scoped>
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

  /* .modalDialog{
    width: 70%;
    height: 70%;
    margin: 0;
    padding: 0;
  }

  .modalContent{
    height: auto;
    min-height: 70%;
  } */

  .modal{
    --bs-modal-width:30%;
  }

  input[type=checkbox] {
    transform: scale(0.5);
  }
  
  </style>
  