<template>
  <!--  -->
  <div class="modal" tabindex="-1">
    <div class="modal-dialog modal-md">
      <div class="modal-content">
        <div class="modal-body">
          <div class="d-flex" style="justify-content: end">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="$emit('closeModal')"
            ></button>
          </div>
          <div style="text-align: center;">
            <div style="margin-bottom: 30px;">
              <h1 style="color: #FEC83F;"><strong>ZIP Easy</strong></h1>
              <span style="font-size: 0.7rem;">쉽게 구하는 당신의 공간</span>
            </div>
            <p style="margin-bottom: 30px;">
              간편하게 로그인하고<br />
              <strong>다양한 서비스를 이용하세요</strong>
            </p>
            <div class="d-flex flex-column" style="align-items: center">
              <button style="width: 70%; height: 50px; border: none; margin-bottom: 20px; border-radius: 10px; background-color: #FEE500"><img src="../../public/kakao.svg" style="height: 90%; margin-right: 20px"/>카카오톡으로 시작</button>
              <button style="width: 70%; height: 50px; border: none; background-color: lightgray; border-radius: 10px;">업체 회원 가입</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["closeModal"]);
</script>

<style scoped></style>
