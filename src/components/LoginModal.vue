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
              v-on:submit.prevent="loginHandleSubmit"
            >
              <div class="">
                <div>
                  <h4 class="fs-6 fw-bold">아이디</h4>
                </div>
                <div class="loginInputBox">
                  <input
                    class="h-100 w-100 p-3"
                    type="text"
                    name="uemail"
                    placeholder="이메일 주소 입력"
                    v-model.trim="loginUser.uemail"
                  />
                </div>
                <div>
                  <span
                    :style="emailValidStyle ? 'color:green' : 'color:red'"
                    >{{ checkValid.emailValid }}</span
                  >
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
                    name="upassword"
                    placeholder="비밀번호 입력"
                    v-model.trim="loginUser.upassword"
                  />
                </div>
                <div>
                  <span
                    :style="passwordValidStyle ? 'color:green' : 'color:red'"
                    >{{ checkValid.passwordValid }}</span
                  >
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
              <span class="find-password-btn" @click="checkUserPassword"
                >비밀번호 찾기</span
              >
            </div>
            <div class="text-center">
              <!-- 로그인 모달 내용 -->

              <!-- 일반 회원 가입 버튼 -->
              <router-link
                :to="{
                  name: 'SignupAgreement',
                  params: { signupType: 'member' },
                }"
              >
                <button
                  class="btn btn-secondary w-75 mb-3 mt-4"
                  data-bs-dismiss="modal"
                >
                  일반 회원 가입하기
                </button>
              </router-link>

              <!-- 업체 회원 가입 버튼 -->
              <router-link
                :to="{
                  name: 'SignupAgreement',
                  params: { signupType: 'agent' },
                }"
              >
                <button
                  class="btn btn-secondary w-75 mb-3"
                  data-bs-dismiss="modal"
                >
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
              v-on:submit.prevent="findEmailHandleSubmit"
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
                    v-model.trim="findEmail.name"
                  />
                </div>
                <div></div>
              </div>
              <div class="mt-3">
                <div>
                  <h4 class="fs-6 fw-bold">전화번호</h4>
                </div>
                <div class="loginInputBox">
                  <input
                    class="h-100 w-100 p-3"
                    type="text"
                    name="text"
                    placeholder="전화번호 입력"
                    v-model.trim="findEmail.phone"
                  />
                </div>
              </div>
              <div class="mt-3">
                <div>
                  <h4 class="fs-6 fw-bold">중개업자 여부</h4>
                </div>
                <div class="loginInputBox">
                  <select v-model="findEmail.type">
                    <option value="" disabled hidden selected>
                      회원 타입을 선택해 주세요
                    </option>
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
              v-on:submit.prevent="findPasswordHandleSubmit"
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
                    v-model.trim="findPassword.name"
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
                    v-model.trim="findPassword.phone"
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
                    v-model.trim="findPassword.email"
                  />
                </div>
              </div>
              <div class="mt-3">
                <div>
                  <h4 class="fs-6 fw-bold">중개업자 여부</h4>
                </div>
                <div class="loginInputBox">
                  <select v-model="findPassword.type">
                    <option value="" disabled hidden selected>
                      회원 타입을 선택해 주세요
                    </option>
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
          <!-- 이메일 찾기 성공 결과 영역 -->
          <div v-if="checkStatus === 'findEmail'">
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
            <form class="d-flex flex-column w-75 mx-auto mt-4">
              <div class="">
                <div>
                  <h4 class="fs-6 fw-bold">당신의 이메일은</h4>
                </div>
                <div class="loginInputBox">
                  <input
                    class="h-100 w-100 p-3"
                    type="text"
                    name="name"
                    :value="tempUser.email"
                    readonly
                  />
                </div>
              </div>
              <div class="mt-3">
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
          <!-- 이메일 찾기 실패 결과 영역 -->
          <div v-if="checkStatus === 'missEmail'">
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
            <form class="d-flex flex-column w-75 mx-auto mt-4">
              <div class="">
                <div>
                  <h4 class="fs-5 fw-bold text-center mt-5 mb-5">
                    가입한 회원이 아닙니다.
                  </h4>
                </div>
              </div>
              <div class="mt-3">
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
          <!-- 비밀번호 찾기 성공 결과 영역 -->
          <div v-if="checkStatus === 'updatePassword'">
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
              @submit.prevent="changePasswordHandleSubmit"
            >
              <div>
                <h2 class="fs-3 fw-bold text-center mb-3">비밀번호 변경</h2>
              </div>
              <div class="">
                <div>
                  <h4 class="fs-6 fw-bold">변경할 비밀번호</h4>
                </div>
                <div class="loginInputBox">
                  <input
                    class="h-100 w-100 p-3"
                    type="password"
                    name="name"
                    v-model="changePassword.newPassword1"
                  />
                </div>
                <div>
                  <span
                    :style="passwordValidStyle ? 'color:green' : 'color:red'"
                    >{{ errorMessage.newPassword1 }}</span
                  >
                </div>
              </div>
              <div class="mt-3">
                <div>
                  <h4 class="fs-6 fw-bold">비밀번호 확인</h4>
                </div>
                <div class="loginInputBox">
                  <input
                    class="h-100 w-100 p-3"
                    type="password"
                    name="name"
                    v-model="changePassword.newPassword2"
                  />
                </div>
                <div>
                  <span
                    :style="passwordValidStyle ? 'color:green' : 'color:red'"
                    >{{ errorMessage.newPassword2 }}</span
                  >
                </div>
              </div>
              <div class="mt-3">
                <button type="submit" class="w-100 btn btn-warning">
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
          <!-- 이메일 찾기 실패 결과 영역 -->
          <div v-if="checkStatus === 'missPassword'">
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
            <form class="d-flex flex-column w-75 mx-auto mt-4">
              <div class="">
                <div>
                  <h4 class="fs-5 fw-bold text-center mt-5 mb-5">
                    해당하는 회원을 찾을 수 없습니다.
                  </h4>
                </div>
              </div>
              <div class="mt-3">
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
import { useRouter } from "vue-router";
import memberAPI from "@/apis/memberAPI";
import { useStore } from "vuex";
const router = useRouter();
const emit = defineEmits(["moveToMemberSignup", "moveToAgentSignup", "close"]);
const props = defineProps(["modalStatus"]);
let checkStatus = ref(null);
const store = useStore();
const emailValidStyle = ref(false);
const passwordValidStyle = ref(false);

let checkValid = ref({
  emailValid: "",
  passwordValid: "",
});

// 로그인 폼
let loginUser = ref({
  uemail: "",
  upassword: "",
});

// 이메일 찾기 폼
let findEmail = ref({
  uname: "",
  uphone: "",
});

// 비밀번호 찾기 폼
let findPassword = ref({
  uemail: "",
  uname: "",
  uphone: "",
});

// 비밀번호 변경하기 폼
let changePassword = ref({
  newPassword1: "",
  newPassword2: "",
});

// 사용자용 오류 메시지
let errorMessage = ref({
  newPassword1: "",
  newPassword2: "",
});

// 로그인 폼 제출하면 실행하는 함수
async function loginHandleSubmit() {
  console.log("제출 함수 실행");
  // // 아이디 확인
  // if (loginUser.value.email !== tempUser.email) {
  //   checkValid.value.emailValid = "가입한 회원이 아닙니다.";
  //   emailValidStyle.value = false;
  // } else {
  //   checkValid.value.emailValid = "";
  //   emailValidStyle.value = true;
  //   // 이메일이 맞으면 비밀번호와 유저타입이 맞는지 확인

  //   // 비밀번호 확인
  //   if (loginUser.value.password !== tempUser.password) {
  //     checkValid.value.passwordValid = "비밀번호가 틀렸습니다.";
  //     passwordValidStyle.value = false;
  //   } else {
  //     checkValid.value.passwordValid = "";
  //     passwordValidStyle.value = true;
  //   }
  //   // 유저 타입 확인
  //   if (loginUser.value.type !== tempUser.type) {
  //     checkValid.value.typeValid = "해당 회원이 아닙니다.";
  //   } else {
  //     checkValid.value.typeValid = "";
  //   }
  // }

  // 로그인 정보가 맞으면 실행
  // if (emailValidStyle.value && passwordValidStyle.value) {
  //   router.push("/"); // 유효성 검사를 통과하면 홈으로 가기 -> 모달이 안 없어지는 문제 발생
  // }
  try {
    const data = JSON.parse(JSON.stringify(loginUser.value));
    const response = await memberAPI.login(data);
    if (response.data.result === "success") {
      const payload = {
        uemail: response.data.uemail,
        accessToken: response.data.accessToken,
        userRole: response.data.userRole,
        userRoleNumber: response.data.userRoleNumber,
      };

      store.dispatch("saveAuth", payload);

      emit("close"); // 모달 닫기
      router.push("/"); // 유효성 검사를 통과하면 홈으로 가기 -> 모달이 안 없어지는 문제 발생
    }
  } catch (error) {
    console.log("에러 발생");
  }
}
// 비밀번호 찾기 폼 제출하면 실행하는 함수
// function findPasswordHandleSubmit() {
//   if (
//     tempUser.name === findPassword.value.uname &&
//     tempUser.phone === findPassword.value.uphone &&
//     tempUser.email === findPassword.value.uemail
//   ) {
//     checkStatus.value = "updatePassword";
//   } else {
//     checkStatus.value = "missPassword";
//   }
// }

var passwordPattern =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{4,20}$/;
var passwordResult = ref(null);

// 비밀번호 변경 폼 제출하면 실행하는 함수
function changePasswordHandleSubmit() {
  passwordResult.value = passwordPattern.test(
    changePassword.value.newPassword1
  );
  // 바꿀 비밀번호 유효성 검사
  if (!passwordResult.value) {
    errorMessage.value.newPassword1 = "유효하지 않은 비밀번호 입니다.";
    passwordValidStyle.value = false;
    console.log("비밀번호 패턴 틀림 여부", passwordValidStyle.value);
    console.log("비밀번호 패턴 틀림 여부", !passwordResult.value);
  } else if (
    changePassword.value.newPassword1 !== changePassword.value.newPassword2
  ) {
    errorMessage.value.newPassword2 = "비밀번호와 비밀번호 확인이 다릅니다.";
    errorMessage.value.newPassword1 = "";
    passwordValidStyle.value = false;
    console.log("비밀번호 다름 여부", passwordValidStyle.value);
  } else {
    errorMessage.value.newPassword2 = "알맞은 비밀번호 입니다.";
    passwordValidStyle.value = true;
    console.log("비밀번호 맞음", passwordValidStyle.value);
  }
}

// // 이메일 찾기 폼 제출하면 실행하는 함수
// function findEmailHandleSubmit() {
//   if (
//     tempUser.name === findEmail.value.name &&
//     tempUser.phone === findEmail.value.phone
//   ) {
//     checkStatus.value = "findEmail";
//   } else {
//     checkStatus.value = "missEmail";
//   }
// }

// 로그인 할때 빈 값이 있으면 제출 버튼 비활성화
const checkData = computed(() => {
  var result = loginUser.value.email !== "" && loginUser.value.password !== "";
  return result;
});
const checkFindEmailData = computed(() => {
  var result = findEmail.value.name !== "" && findEmail.value.phone !== "";
  return result;
});
const checkUpdatePasswordData = computed(() => {
  var result =
    findPassword.value.name !== "" &&
    findPassword.value.phone !== "" &&
    findPassword.value.email !== "";
  return result;
});

// v-if 사용을 위한 설정 함수
function checkUserEmail() {
  checkStatus.value = "email";
}
function checkUserPassword() {
  checkStatus.value = "password";
}

// 모달 닫으면 v-if 사용을 위한 설정 초기화
function cancelUserData() {
  checkStatus.value = null;
}
</script>

<style scoped>
input {
  border: 1px solid rgb(237, 237, 237);
}
.find-email-btn,
.find-password-btn {
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

select {
  border: 1px solid rgb(237, 237, 237);
  width: 100%;
  height: 100%;
  padding-left: 13px;
  color: grey;
}
</style>
