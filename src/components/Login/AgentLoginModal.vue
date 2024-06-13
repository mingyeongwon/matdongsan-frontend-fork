<template>
  <!--  -->
  <div class="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="d-flex" style="justify-content: end">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="$emit('close')">
            </button>
          </div>
          <div style="text-align: center;">
            <div style="margin-bottom: 30px;">
              <h1 style="color: #FEC83F;"><strong>Matdongsan</strong></h1>
              <span style="font-size: 0.7rem;">부동산 맛집</span>
            </div>
            <div>
              <h4>아이디</h4>
              <input type="text" name="email" placeholder="이메일 주소 입력">
            </div>
            <div class="d-flex" >
              <h4>비밀번호</h4>
              <input type="text" name="email" placeholder="비밀번호 입력">
            </div>
            <div class="d-flex flex-column" style="align-items: center">
              
              <button style="width: 70%; height: 50px; border: none; background-color: lightgray; border-radius: 10px;">업체 회원 가입</button>
            </div>
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

}
</style>
