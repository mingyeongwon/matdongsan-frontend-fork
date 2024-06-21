<template>
  <div>
    <div class="memberSignup-title">
      <h2 class="fw-bold text-center">일반 회원가입</h2>
    </div>
    <div class="memberSignup-box border-top">
      <form v-on:submit.prevent="handleSubmit">
        <div class="d-flex mb-4">
          <div class="d-flex col-2 pt-1">
            <span>이메일</span>
            <span class="text-danger fs-5 fw-bold">*</span>
          </div>
          <div class="memberEmail-box">
            <input
              class="ps-2 me-3 mb-1 border border-1 border-secondary rounded w-100"
              type="text"
              placeholder="이메일 형식으로 입력하세요."
              v-model="memberSignup.memberEmail"
            />
          <span :style="emailValidStyle ? 'color:green': 'color:red'">{{ errorMessage.emailValid }}</span>


          </div>
          <button
            type="button"
            class="btn btn-sm ms-2 memberSignupPassword-btn text-light"
            @click="uniqueCheck"
          >
            중복확인
          </button>
        </div>
       
        <div class="d-flex mb-4">
          <div class="d-flex col-2 pt-1">
            <span>비밀번호</span>
            <span class="text-danger fs-5 fw-bold">*</span>
          </div>
          <div class="memberPassword-box d-flex flex-column">
            <input
              class="mb-2 ps-2 border border-1 border-secondary rounded"
              type="password"
              placeholder="영문, 숫자, 특수문자 혼합 4~20자 가능합니다."
              v-model="memberSignup.memberPassword1"
            />
            <input
              class="ps-2 border border-1 border-secondary rounded"
              type="password"
              placeholder="비밀번호를 재입력하세요."
              v-model="memberSignup.memberPassword2"
            />
          <span :style="passwordValidStyle ? 'color:green': 'color:red'">{{ errorMessage.passwordValid }}</span>
          </div>
        </div>
        <div class="d-flex mb-4 memberPhone-box">
          <div class="d-flex col-2 pt-1">
            <span>핸드폰번호</span>
            <span class="text-danger fs-5 fw-bold">*</span>
          </div>

          <div class="memberPhone-box d-flex flex-column">
            <input
              class="ps-2 border border-1 border-secondary rounded"
              type="text"
              placeholder="하이픈을 포함하여 입력하세요."
              v-model="memberSignup.memberPhone"
            />
          <span :style="phoneValidStyle ? 'color:green': 'color:red'">{{ errorMessage.phoneValid }}</span>

          </div>
        </div>
        <div class="d-flex mb-5 memberProfile-box">
          <span class="col-2">프로필 사진</span>
          <div>
            <input type="file" id="memberProfile" />
            <label
              class="memberProfile-label border border-1 border-secondary rounded"
              for="memberProfile"
            >
              <div class="x border border-1 border-secondary"></div>
              <div class="y border border-1 border-secondary"></div>
            </label>
          </div>
        </div>
        <div class="text-center memberSignupBtn-box">
          <button type="submit" class="btn btn-warning fw-bold h-100" :disabled="!checkMemberSignupData">
            회원 가입
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import {ref, computed} from "vue";

let memberSignup = ref({
  memberEmail: "",
  memberPassword1: "",
  memberPassword2: "",
  memberPhone: ""
});

let errorMessage = ref({
  emailValid:"",
  passwordValid:"",
  phoneValid:"",
});

let tempEmail = "user@gmail.com"
var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{4,20}$/;
var phonePattern = /^(01[016789])-(\d{3,4})-(\d{4})$/;

// 회원가입 필수 양식이 빈 값이 아닌 경우에 제출 버튼을 활성화 함
const checkMemberSignupData = computed(() => {
  var result = memberSignup.value.memberEmail !== "" && memberSignup.value.memberPhone !== "" && memberSignup.value.memberPassword1 !== "" 
              && memberSignup.value.memberPassword2 !== "";
  return result;
});

var emailValidStyle = ref(false);
var phoneValidStyle = ref(false);
var passwordValidStyle = ref(false);


function uniqueCheck(){
  // 중복 확인을 하면서 전체적인 이메일 유효성 검사도 실행
  var emailResult = emailPattern.test(memberSignup.value.memberEmail);
  if(!emailResult){
    errorMessage.value.emailValid = "유효하지 않은 이메일 입니다.";
    emailValidStyle.value = false;
  }else if(memberSignup.value.memberEmail === tempEmail){
    errorMessage.value.emailValid = "이미 사용중인 이메일 입니다.";
    emailValidStyle.value = false;
  } else{
    errorMessage.value.emailValid = "사용 가능한 이메일 입니다.";
    emailValidStyle.value = true;
  }
  console.log("출력",emailValidStyle.value);
}

const router = useRouter();

function handleSubmit() {
  // 중복 확인을 아예 하지 않았을 경우와, 비밀번호와 휴대폰 번호의 정규식 검사
  if(errorMessage.value.emailValid===""){
    errorMessage.value.emailValid = "중복 확인을 해주세요";
    emailValidStyle.value = false;
  }

  var phoneResult = phonePattern.test(memberSignup.value.memberPhone);
  if(!phoneResult){
    errorMessage.value.phoneValid = "유효하지 않은 휴대폰 번호 입니다.";
    phoneValidStyle.value = false;
  } else {
    errorMessage.value.phoneValid = "사용 가능한 휴대폰 번호 입니다.";
    phoneValidStyle.value = true;
  }
  var passwordResult = passwordPattern.test(memberSignup.value.memberPassword1);
  if(!passwordResult){
    errorMessage.value.passwordValid = "유효하지 않은 비밀번호 입니다.";
    passwordValidStyle.value = false;
  } else if(memberSignup.value.memberPassword1 !== memberSignup.value.memberPassword2){
    errorMessage.value.passwordValid = "비밀번호와 비밀번호 확인이 같지 않습니다.";
    passwordValidStyle.value = false;
  } else{
    errorMessage.value.passwordValid = "사용 가능한 휴대폰 번호 입니다.";
    passwordValidStyle.value = true;
  }
  console.log(JSON.parse(JSON.stringify(memberSignup.value)));


  // 유효성 검사가 모두 통과되면
  if(emailValidStyle.value && passwordValidStyle.value && phoneValidStyle.value){
    // axios로 통신하여 폼 보내고

    // 홈으로 돌아가기
    router.push("/");
  }
}

</script>

<style scoped>
.memberSignup-box span {
  font-weight: bold;
}
.memberSignupPassword-btn {
  background: rgb(21, 42, 105);
  font-size: 14px;
}

.memberSignupBtn-box {
  height: 40px;
}

.memberSignupBtn-box button {
  width: 400px;
  font-size: 17px;
}

#memberProfile {
  display: none;
}

.memberProfile-label {
  width: 125px;
  height: 125px;
  cursor: pointer;
  display: block;
  border: 1px solid rgb(233, 236, 239);
  position: relative;
}

.memberProfile-label .x,
.memberProfile-label .y {
  border: 1px solid rgb(222, 226, 230);
  position: absolute;
  top: 50%;
  left: 50%;
}

.memberProfile-label .x {
  transform: translateX(-50%);
  width: 44px;
}

.memberProfile-label .y {
  transform: translateY(-50%);
  height: 44px;
}

.memberPassword-box,
.memberEmail-box,
.memberPhone-box input {
  width: 438px;
}

.memberPassword-box input,
.memberEmail-box input,
.memberPhone-box input {
  height: 40px;
  font-size: 14px;
  border: 1px solid rgb(233, 236, 239);
}

.memberEmail-box input {
  width: 312px;
}

.memberSignup-box button {
  height: 40px;
}

.memberSignup-title {
  margin: 50px 0;
}

.memberSignup-box {
  max-width: 900px;
  margin: 50px auto 0;
  padding: 40px 40px;
}
</style>
