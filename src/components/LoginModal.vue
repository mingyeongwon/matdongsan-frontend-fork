<template>
  <!--  -->
  <div class="modal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="d-flex mx-auto flex-row-reverse">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div>
            <div
              class="d-flex w-75 mx-auto justify-content-center align-items-center"
            >
              <img
                class="col-3 me-3"
                src="../../public/matdongsan_logo.png"
                width="50"
              />
              <div class="mt-4 logo-box">
                <h2 class="nav-title mb-1 fw-bold text-warning fs-2">
                  Matdongsan
                </h2>
                <p class="sub-title m-0 text-center fw-bold">부동산 맛집</p>
              </div>
            </div>
            <form
              class="d-flex flex-column w-75 mx-auto mt-4"
              v-on:submit.prevent="handleSubmit"
            >
              <div class="">
                <div>
                  <h4 class="fs-6 fw-bold">아이디</h4>
                </div>
                <div class="loginInputBox">
                  <input
                    class="h-100 w-100 p-3"
                    type="text"
                    name="email"
                    placeholder="이메일 주소 입력"
                    v-model="user.email"
                  />
                </div>
              </div>
              <div class="mt-3">
                <div>
                  <h4 class="fs-6 fw-bold">비밀번호</h4>
                </div>
                <div class="loginInputBox">
                  <input
                    class="h-100 w-100 p-3"
                    type="password"
                    name="email"
                    placeholder="비밀번호 입력"
                    v-model="user.password"
                  />
                </div>
              </div>
              <div class="mt-3">
                <button
                  type="submit"
                  class="w-100 btn btn-warning"
                  :disabled="!checkData"
                >
                  로그인
                </button>
              </div>
            </form>
            <div class="d-flex justify-content-evenly mt-2 findIdPassword">
              <span>아이디 찾기</span>
              <span>비밀번호 찾기</span>
            </div>
            <div class="d-grid gap-2 w-75 mx-auto mt-3 joinMemberBtn">
              <p class="mb-0">회원이 아니신가요?</p>
              <router-link to="/Signup/SignupAgreement">
                <button class="btn btn-secondary w-100" data-bs-dismiss="modal">
                  일반 회원 가입하기
                </button>
              </router-link>
              <router-link to="/Signup">
                <button class="btn btn-secondary w-100" data-bs-dismiss="modal">
                  업체 회원 가입하기
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Modal } from "bootstrap";
import { ref, computed } from "vue";

let user = ref({
  email: "",
  password: "",
});
function handleSubmit() {
  console.log(JSON.parse(JSON.stringify(user.value)));
}
const checkData = computed(() => {
  var result = user.value.email !== "" && user.value.password !== "";
  return result;
});
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
