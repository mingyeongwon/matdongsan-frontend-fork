<template>
  <div>
    <div class="agentSignup-title">
      <h2 class="fw-bold text-center">중개인 회원가입</h2>
    </div>
    <div class="agentSignup-box border-top">
      <form v-on:submit.prevent="handleSubmit">
        <!-- 이메일 입력 -->
        <div class="d-flex mb-4">
          <div class="d-flex col-2 pt-1 mt-1">
            <span class="agentInputTitle">이메일</span>
            <span class="text-danger fs-5 fw-bold">*</span>
          </div>
          <div class="agentEmail-box">
            <input
              class="ps-2 me-3 border border-dark rounded mb-2 w-100"
              type="text"
              placeholder="영대소문자, 숫자, 언더바(_) 혼용 4~12자 가능합니다."
              v-model.trim="agentSignup.agentEmail"
            />
            <span :style="emailValidStyle ? 'color:green' : 'color:red'">{{
              errorMessage.emailValid
            }}</span>
          </div>
          <button
            type="button"
            class="ms-2 btn btn-sm agentSignupPassword-btn text-light"
            @click="uniqueCheck"
          >
            중복확인
          </button>
        </div>

        <!-- 비밀번호 입력 -->
        <div class="d-flex mb-4">
          <div class="d-flex col-2 pt-1 mt-1">
            <span class="agentInputTitle">비밀번호</span>
            <span class="text-danger fs-5 fw-bold">*</span>
          </div>
          <div class="agentPassword-box d-flex flex-column">
            <input
              class="mb-2 ps-2 border border-dark rounded"
              type="password"
              placeholder="영문, 숫자, 특수문자 혼합 4~20자 가능합니다."
              v-model.trim="agentSignup.agentPassword1"
            />
            <input
              class="ps-2 border border-dark rounded"
              type="password"
              placeholder="비밀번호를 재입력하세요."
              v-model.trim="agentSignup.agentPassword2"
            />
            <span :style="passwordValidStyle ? 'color:green' : 'color:red'">{{
              errorMessage.passwordValid
            }}</span>
          </div>
        </div>

        <!-- 이름 입력 -->
        <div class="d-flex mb-4 agentName-box">
          <div class="d-flex col-2 pt-1 mt-1">
            <span class="agentInputTitle">이름</span>
            <span class="text-danger fs-5 fw-bold">*</span>
          </div>
          <div class="agentPassword-box d-flex flex-column">
            <input
              class="ps-2 border border-dark rounded"
              type="text"
              placeholder="본명을 작성하세요."
              v-model.trim="agentSignup.agentName"
            />
            <span :style="nameValidStyle ? 'color:green' : 'color:red'">{{
              errorMessage.nameValid
            }}</span>
          </div>
        </div>

        <!-- 핸드폰번호 입력 -->
        <div class="d-flex mb-4 agentPhone-box">
          <div class="d-flex col-2 pt-1">
            <span class="agentInputTitle mt-1">핸드폰번호</span>
            <span class="text-danger fs-5 fw-bold">*</span>
          </div>
          <div class="agentPassword-box d-flex flex-column">
            <input
              class="ps-2 border border-dark rounded"
              type="text"
              placeholder="하이픈을 포함하여 작성하세요."
              v-model.trim="agentSignup.agentPhone"
            />
            <span :style="phoneValidStyle ? 'color:green' : 'color:red'">{{
              errorMessage.phoneValid
            }}</span>
          </div>
        </div>

        <!-- 중개사무소 명칭 입력 -->
        <div class="d-flex mb-4 agentBrandName-box">
          <div class="d-flex col-2 pt-1 mt-1">
            <span class="agentInputTitle">중개사무소 명칭</span>
            <span class="text-danger fs-5 fw-bold">*</span>
          </div>
          <div>
            <input
              class="ps-2 border border-dark rounded"
              type="text"
              v-model.trim="agentSignup.agentBrandName"
            />
          </div>
        </div>

        <!-- 사업자 번호 입력 -->
        <div class="d-flex mb-4 agentBrandName-box">
          <div class="d-flex col-2 pt-1 mt-1">
            <span class="agentInputTitle">사업자 번호</span>
            <span class="text-danger fs-5 fw-bold">*</span>
          </div>
          <div class="agentPassword-box d-flex flex-column">
            <input
              class="ps-2 border border-dark rounded"
              type="text"
              placeholder="하이픈을 포함하여 작성하세요."
              v-model.trim="agentSignup.agentBrandNum"
            />
            <span :style="brandNumValidStyle ? 'color:green' : 'color:red'">{{
              errorMessage.brandNumValid
            }}</span>
          </div>
        </div>

        <!-- 대표 사진 업로드 -->
        <div class="d-flex mb-4 agentProfile-box">
          <span class="col-2 agentInputTitle mt-4">대표 사진</span>
          <ImagePreview
            imagePurpose="single"
            @update:image="handleProfileImageUpdate"
            class="mt-3 w-100"
          />
        </div>

        <!-- 주소 입력 -->
        <div class="d-flex mb-4 agentAddress-box">
          <div class="d-flex col-2 pt-1 mt-1">
            <span class="agentInputTitle">주소</span>
            <span class="text-danger fs-5 fw-bold">*</span>
          </div>
          <div class="agentPassword-box d-flex flex-column">
            <div>
              <input
                type="text"
                name="address1"
                class="address me-2 p-1 ps-2 rounded border border-dark"
                placeholder="예) 서울시 강남구 봉은사로 1길 12,1층"
                size="40"
                v-model="agentSignup.address"
                readonly
              />
              <div
                type="button"
                class="address-search-btn btn btn-dark btn-sm p-2 mb-1"
                @click="openPostSearch"
              >
                검색
              </div>
            </div>
            <input
              type="text"
              class="row ms-0 mt-3 postcode p-1 ps-2 rounded border border-dark"
              placeholder="우편번호"
              size="20"
              v-model="agentSignup.postcode"
              readonly
            />
            <input
              type="text"
              class="row ms-0 mt-3 rounded p-1 ps-2 border border-dark"
              placeholder="상세주소 입력"
              v-model="agentSignup.addressDetail"
              size="20"
              @input="emitUpdate"
            />
          </div>
        </div>

        <!-- 서류 첨부 -->
        <div class="d-flex mb-5 agentProfile-box">
          <div class="d-flex col-2 pt-1 mt-4">
            <span class="agentInputTitle">서류 첨부</span>
            <span class="text-danger fs-5 fw-bold">*</span>
          </div>
          <ImagePreview
            imagePurpose="single"
            @update:image="handleDocumentImageUpdate"
            class="mt-3 w-100"
          />
        </div>

        <!-- 회원 가입 버튼 -->
        <div class="text-center agentSignupBtn-box">
          <button
            class="btn btn-warning fw-bold h-100"
            type="submit"
            :disabled="!checkAgentSignupData"
          >
            회원 가입
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import ImagePreview from "@/components/ImagePreview.vue"; // ImagePreview 컴포넌트 가져오기
import agentAPI from "@/apis/agentAPI";
const router = useRouter();

// 회원가입 데이터와 에러 메시지 초기화
let agentSignup = ref({
  agentEmail: "",
  agentPassword1: "",
  agentPassword2: "",
  agentPhone: "",
  agentBrandName: "",
  agentBrandNum: "",
  agentName: "",
  address: "",
  postcode: "",
  addressDetail: "",
  profileImage: [], // 프로필 이미지를 저장할 배열
  documentImage: [], // 서류 이미지를 저장할 배열
});

let errorMessage = ref({
  emailValid: "",
  passwordValid: "",
  phoneValid: "",
  brandNumValid: "",
  nameValid: "",
  // addressValid: "",
});

// 이메일, 비밀번호, 전화번호 등 유효성 검사 패턴 정의
let tempEmail = "user@gmail.com";
var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var passwordPattern =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{4,20}$/;
var phonePattern = /^(01[016789])-(\d{3,4})-(\d{4})$/;
var brandNumPattern = /^\d{3}-\d{2}-\d{5}$/;
var namePattern = /^[가-힣]{2,17}$/;

// 비어있는 필수 값이 있다면 제출 버튼을 비활성화
const checkAgentSignupData = computed(() => {
  return (
    agentSignup.value.agentEmail !== "" &&
    agentSignup.value.agentPassword1 !== "" &&
    agentSignup.value.agentPassword2 !== "" &&
    agentSignup.value.agentPhone !== "" &&
    agentSignup.value.agentBrandName !== "" &&
    agentSignup.value.agentBrandNum !== "" &&
    agentSignup.value.agentName !== "" &&
    agentSignup.value.address !== "" &&
    agentSignup.value.postcode !== "" &&
    agentSignup.value.addressDetail !== "" &&
    agentSignup.value.profileImage.length > 0 && // 프로필 이미지가 업로드되었는지 확인
    agentSignup.value.documentImage.length > 0
  ); // 서류 이미지가 업로드되었는지 확인
});

var emailValidStyle = ref(false);
var phoneValidStyle = ref(false);
var passwordValidStyle = ref(false);
var brandNumValidStyle = ref(false);
var nameValidStyle = ref(false);

var emailResult = ref(false);
var phoneResult = ref(false);
var brandNumResult = ref(false);
var passwordResult = ref(false);
var nameResult = ref(false);

// 이메일 중복 확인 함수
function uniqueCheck() {
  // 중복 확인을 하면서 전체적인 이메일 유효성 검사도 실행
  emailResult.value = emailPattern.test(agentSignup.value.agentEmail);
  if (!emailResult.value) {
    errorMessage.value.emailValid = "유효하지 않은 이메일 입니다.";
    emailValidStyle.value = false;
  } else if (agentSignup.value.agentEmail === tempEmail) {
    errorMessage.value.emailValid = "이미 사용중인 이메일 입니다.";
    emailValidStyle.value = false;
  } else {
    errorMessage.value.emailValid = "사용 가능한 이메일 입니다.";
    emailValidStyle.value = true;
  }
}

// 중복 확인을 아예 하지 않았을 경우와, 비밀번호와 휴대폰 번호, 사업자 번호, 이름 정규식 검사
async function handleSubmit() {
  const formData = new FormData();
  formData.append("userEmail.uemail", agentSignup.value.agentEmail);
  formData.append("userEmail.upassword", agentSignup.value.agentPassword1);
  formData.append("userEmail.urole", "AGENT");
  formData.append("userEmail.uremoved", false);
  
  formData.append("agent.abrand", agentSignup.value.agentBrandName);
  formData.append("agent.aname", agentSignup.value.agentName);
  formData.append("agent.aphone", agentSignup.value.agentPhone);
  formData.append("agent.aaddress", agentSignup.value.address);
  formData.append("agent.aaddressdetail", agentSignup.value.addressDetail);
  formData.append("agent.apostcode", agentSignup.value.postcode);
  formData.append("agent.alatitude", "37.3952969470752");
  formData.append("agent.alongitude", "127.110449292622");
  formData.append("agent.aprofile", agentSignup.value.profileImage[0]);
  
  formData.append("agentDetail.adattach", agentSignup.value.documentImage[0]);

  formData.append("agentDetail.adbrandnumber", agentSignup.value.agentBrandNum);
  for (let pair of formData.entries()) {
    console.log(pair[0] + ": " + pair[1]);
  }

  try {
    const response = await agentAPI.signup(formData);

    console.log(response);
    router.push("/");
  } catch (error) {
    console.log(error.response ? error.response.data : error.message);
  }
}

//}

// 다음 주소 검색 API 사용
function openPostSearch() {
  new window.daum.Postcode({
    oncomplete: (data) => {
      agentSignup.value.postcode = data.zonecode;
      agentSignup.value.address = data.address;
    },
  }).open();
}

// 프로필 이미지 업데이트 핸들러
function handleProfileImageUpdate(files) {
  agentSignup.value.profileImage = files;
}

// 서류 이미지 업데이트 핸들러
function handleDocumentImageUpdate(files) {
  agentSignup.value.documentImage = files;
}
</script>

<style scoped>
.agentInputTitle {
  font-size: 14px;
}

.agentSignup-title {
  margin: 50px 0;
}

.agentSignup-box {
  max-width: 900px;
  margin: 50px auto 0;
  padding: 40px 40px;
}

.agentSignupPassword-btn {
  background: rgb(21, 42, 105);
  font-size: 14px;
}

.agentPassword-box,
.agentEmail-box,
.agentPhone-box input,
.agentBrandName-box input,
.agentProfile-box input,
.agentName-box input {
  width: 438px;
}

.agentPassword-box input,
.agentEmail-box input,
.agentPhone-box input,
.agentBrandName-box input,
.agentProfile-box input,
.agentName-box input {
  height: 40px;
  font-size: 14px;
  border: 1px solid rgb(233, 236, 239);
}

.agentEmail-box input {
  width: 312px;
}

.agentSignup-box button {
  height: 40px;
}

#agentProfile {
  display: none;
}

.agentProfile-label {
  width: 125px;
  height: 125px;
  cursor: pointer;
  display: block;
  border: 1px solid rgb(233, 236, 239);
  position: relative;
}

.agentProfile-label .x,
.agentProfile-label .y {
  border: 1px solid rgb(222, 226, 230);
  position: absolute;
  top: 50%;
  left: 50%;
}

.agentProfile-label .x {
  transform: translateX(-50%);
  width: 44px;
}

.agentProfile-label .y {
  transform: translateY(-50%);
  height: 44px;
}

.agentSignupBtn-box {
  height: 40px;
}

.agentSignupBtn-box button {
  width: 400px;
  font-size: 17px;
}

.postcode,
.address {
  background-color: #dfdfdf;
  cursor: default;
}
</style>
