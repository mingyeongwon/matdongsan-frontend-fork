<template>
    <!--  -->
    <div class="modal">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content ">
          <div class="modal-body">
            <div class="d-flex mx-auto flex-row-reverse">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                @click="$emit('close')">
              </button>
            </div>
            <div class=" ms-5 me-5">
                <form>
                    <h2 style="font-weight: bold; text-align: center" >허위매물 신고하기</h2>
                    <div class="row">
                        <div class="col-2">신고내용</div>
                        <textarea placeholder="정확한 확인을 위해 신고내용을 구체적으로 기재해 주세요. (20자 이상) 본 신고 내용은 해당 중개업소에게 전달되므로, 개인정보(연락처, 이름 등)는 기재하지 말아주세요." 
                        class="col-10" style="height: 200px;" />
                    </div>
                    <hr>
                    <p style="font-size: 1.5rem; font-weight: bold; text-align: center;">신고하기전에 확인해주세요!!</p>
                    <div class="row">
                        <input class="col-1" type="checkbox" id="checkbox1" width="10px" height="10px">
                        <label class="col-11" for="checkbox1">2020년 2월 21일부터 시행되는 공인중개사업 제 33조 제 2항에 따라 정당한 사유없이 시세에 부당한 영향을 줄 목적으로 개인공인중개사 등의 중개 대상물에 대한 정당한 표시 . 광고 행위를 방해한 자는 3년 이하의 징역 또는 3,000만원 이하의 벌금에 처해질 수 있으니, 명확한 사실을 기반으로 신고해 주시기 바랍니다.</label>
                    </div>
                    <div class="row mt-5">
                        <button class="col btn btn-md me-5" style="background-color: grey; color: white"> 취소</button>
                        <button class="col btn btn-md btn-warning">신고하기</button>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const emit = defineEmits(["close"]);
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
  
  </style>
  