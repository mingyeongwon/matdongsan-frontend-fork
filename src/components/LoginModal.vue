<template>
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
          <!-- 로그인 영역 -->
          <div v-if="checkStatus == null">
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
                <div>
                  <h4 class="fs-6 fw-bold">중개업자 여부</h4>
                </div>
                <div class="loginInputBox ">
                  <select v-model="user.type">
                    <option value="" disabled hidden selected>회원 타입을 선택해 주세요</option>
                    <option value="Agent">중개업자 회원</option>
                    <option value="Member">일반 회원</option>
                  </select>
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
              <span class="find-email-btn" @click="checkUserEmail"
                >아이디 찾기</span
              >
              <span class="find-password-btn" @click="checkUserPassword">비밀번호 찾기</span>
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
          <!-- 이메일 찾기 영역 -->
          <div v-if="checkStatus === 'email'">
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
                  <h4 class="fs-6 fw-bold">이름</h4>
                </div>
                <div class="loginInputBox">
                  <input
                    class="h-100 w-100 p-3"
                    type="text"
                    name="email"
                    placeholder="이름 입력"
                    v-model="user.name"
                  />
                </div>
              </div>
              <div class="mt-3">
                <div>
                  <h4 class="fs-6 fw-bold">전화번호</h4>
                </div>
                <div class="loginInputBox">
                  <input
                    class="h-100 w-100 p-3"
                    type="text"
                    name="email"
                    placeholder="전화번호 입력"
                    v-model="user.phone"
                  />
                </div>
              </div>
              <div class="mt-3">
                <div>
                  <h4 class="fs-6 fw-bold">중개업자 여부</h4>
                </div>
                <div class="loginInputBox ">
                  <select v-model="user.type">
                    <option value="" disabled hidden selected>회원 타입을 선택해 주세요</option>
                    <option value="Agent">중개업자 회원</option>
                    <option value="Member">일반 회원</option>
                  </select>
                </div>
              </div>
              <div class="mt-3">
                <button
                  type="submit"
                  class="w-100 btn btn-warning"
                  :disabled="!checkFindEmailData"
                >
                  아이디 찾기
                </button>
                <button
                  type="button"
                  class="w-100 mt-2 btn btn-outline-dark"
                  @click="cancelUserData"
                >
                  취소
                </button>
              </div>
            </form>
          </div>
          <!-- 비밀번호 찾기 영역 -->
          <div v-if="checkStatus === 'password'">
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
                  <h4 class="fs-6 fw-bold">이름</h4>
                </div>
                <div class="loginInputBox">
                  <input
                    class="h-100 w-100 p-3"
                    type="text"
                    name="name"
                    placeholder="이름 입력"
                    v-model="user.name"
                  />
                </div>
              </div>
              <div class="mt-3">
                <div>
                  <h4 class="fs-6 fw-bold">전화번호</h4>
                </div>
                <div class="loginInputBox">
                  <input
                    class="h-100 w-100 p-3"
                    type="text"
                    name="phone"
                    placeholder="전화번호 입력"
                    v-model="user.phone"
                  />
                </div>
              </div>
              <div class="mt-3">
                <div>
                  <h4 class="fs-6 fw-bold">아이디(이메일)</h4>
                </div>
                <div class="loginInputBox">
                  <input
                    class="h-100 w-100 p-3"
                    type="text"
                    name="email"
                    placeholder="이메일 입력"
                    v-model="user.email"
                  />
                </div>
              </div>
              <div class="mt-3">
                <div>
                  <h4 class="fs-6 fw-bold">중개업자 여부</h4>
                </div>
                <div class="loginInputBox ">
                  <select v-model="user.type">
                    <option value="" disabled hidden selected>회원 타입을 선택해 주세요</option>
                    <option value="Agent">중개업자 회원</option>
                    <option value="Member">일반 회원</option>
                  </select>
                </div>
              </div>
              <div class="mt-3">
                <button
                  type="submit"
                  class="w-100 btn btn-warning"
                  :disabled="!checkUpdatePasswordData"
                >
                  비밀번호 변경하기
                </button>
                <button
                  type="button"
                  class="w-100 mt-2 btn btn-outline-dark"
                  @click="cancelUserData"
                >
                  취소
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
let checkStatus = ref(null);

let user = ref({
  name: "",
  email: "",
  password: "",
  phone: "",
  type: "",
});
function handleSubmit() {
  console.log(JSON.parse(JSON.stringify(user.value)));
}
const checkData = computed(() => {
  var result = user.value.email !== "" && user.value.password !== "" && user.value.type !== "";
  return result;
});
const checkFindEmailData = computed(() => {
  var result = user.value.name !== "" && user.value.phone !== "" && user.value.type !== "";
  return result;
});
const checkUpdatePasswordData = computed(() => {
  var result = user.value.name !== "" && user.value.phone !== "" && user.value.email !== "" && user.value.type !== "";
  return result;
});
function checkUserEmail() {
  checkStatus.value = "email";
}
function checkUserPassword(){
  checkStatus.value = "password";
}
function cancelUserData() {
  checkStatus.value = null;
}
</script>

<style scoped>
input {
  border: 1px solid rgb(237, 237, 237);
}
.find-email-btn, .find-password-btn {
  cursor: pointer;
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

select  {
  border: 1px solid rgb(237, 237, 237);
  width: 100%;
  height: 100%;
  padding-left: 13px;
  color: grey;
}
</style>
