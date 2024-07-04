<template>
  <div class="d-flex h-auto w-100 mx-auto">
    <MyPageSidebar />
    <div class="titleNcontent w-75 mx-auto">
      <div class="d-flex justify-content-between mb-3">
        <h4 class="fw-bold mt-2">내 정보</h4>
      </div>
      <hr />
      <form action="" class="w-75 mx-auto" v-on:submit.prevent="handleSubmit">
        <div class="d-flex justify-content-between w-75">
          <h6 class="text-muted fw-bold align-self-center me-5">프로필 사진</h6>
          <label class="profile-input" for="profile-input">
            <div type="button" class="btn position-relative">
              <img
                v-if="imageFilesProfile !== null"
                :src="imageFilesProfile.src"
                width="100"
                height="100"
                class="rounded-circle"
                alt=""
              />
              <img
                v-else
                :src="memberProfile"
                width="100"
                height="100"
                class="rounded-circle"
                alt=""
              />
              <span
                class="position-absolute badge rounded-circle bg-warning p-2"
                ><img src="@/assets/stylus.png" width="15" alt="" /><span
                  class="visually-hidden"
                  >unread messages</span
                ></span
              >
            </div>
          </label>
          <input
            type="file"
            name="profile-input"
            id="profile-input"
            ref="fileInputProfile"
            @change="previewImagesProfile"
            accept="image/*"
            style="display: none"
          />

          <h6 class="align-self-center ms-5 me-5 fw-bold text-muted">
            남은 개수
          </h6>
          <div class="align-self-center mt-4">
            <img
              src="@/assets/house-img.png"
              alt="집 이미지"
              width="60"
              height="60"
              class="bg-warning rounded align-self-center p-2"
            />
            <h6 class="text-center">{{ user.hasQuantity }}개 남음</h6>
          </div>
        </div>
        <hr />
        <div>
          이름
          <input class="ms-5" type="text" v-model="agentData.aname" readonly />
        </div>
        <hr class="mb-4" />
        전화번호
        <input
          type="text"
          class="me-2 ms-4 ps-2"
          v-model="arrPhone[0]"
          readonly
          size="1"
        />-
        <input
          type="text"
          class="ms-2 me-2 ps-2"
          v-model="arrPhone[1]"
          size="2"
          readonly
        />-
        <input
          type="text"
          class="ms-2 ps-2"
          v-model="arrPhone[2]"
          size="2"
          readonly
        />
        <hr class="mb-4" />
        이메일 주소
        <input type="email" v-model="userData.uemail" readonly />
        <div
          v-if="userRole === 'AGENT'"
          class="need-to-add-type-variable-here"
        >
          <hr />
          <div>
            중개소 이름
            <input
              class="ms-5"
              type="text"
              v-model="agentData.abrand"
              readonly
            />
          </div>
          <hr class="mb-4" />
          사업자 등록 번호
          <input
            type="text"
            class="me-2 ms-4 ps-2"
            v-model="agentDetailData.adbrandnumber"
            readonly
            size="30"
          />

          <hr />
          <div class="row">
            <div class="row">
              <div class="col-2">주소</div>
              <div>
                <input
                  class="col-10"
                  type="text"
                  style="margin-right: 70px; width: 60%"
                  v-model="agentData.aaddress"
                  readonly
                />
                <input
                  v-if="agentData.aaddressDetail"
                  class="col-10 mt-2"
                  type="text"
                  style="width: 60%"
                  placeholder="상세주소"
                  readonly
                />
                <input
                  class="col-10 mt-2"
                  type="text"
                  v-model="agentData.apostcode"
                  style="width: 60%"
                  readonly
                />
              </div>
            </div>
          </div>
        </div>
        <h4 class="mt-5 fw-bold">비밀번호 변경</h4>
        <hr class="border border-black border-2" />
        <table class="table table-lg">
          <tbody>
            <tr>
              <th scope="row">현재 비밀번호</th>
              <td>
                <input
                  type="password"
                  v-model.trim="changePassword.oldPassword"
                  @keyup="validOldPassword"
                />
                <div class="text-danger">{{ errorMessage.oldPassword }}</div>
              </td>
            </tr>
            <tr>
              <th scope="row">새 비밀번호</th>
              <td>
                <input
                  type="password"
                  v-model.trim="changePassword.newPassword1"
                  placeholder="영문, 숫자, 특수문자 혼합 4~20자 가능합니다."
                  @keyup="validNew1Password"
                />
                <div
                  :class="
                    new1PasswordValidStyle ? 'text-success' : 'text-danger'
                  "
                >
                  {{ errorMessage.newPassword1 }}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">새 비밀번호 확인</th>
              <td colspan="2">
                <input
                  type="password"
                  v-model.trim="changePassword.newPassword2"
                  placeholder="새 비밀번호과 같은 비밀번호를 적어주세요."
                  @keyup="validNew2Password"
                />
                <div
                  :class="
                    new2PasswordValidStyle ? 'text-success' : 'text-danger'
                  "
                >
                  {{ errorMessage.newPassword2 }}
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="text-end">
          <button
            button="button"
            class="btn btn-warning btn-lg"
            :disabled="!checkChangePasswordData"
          >
            변경하기
          </button>
          <button
            type="button"
            class="btn btn-outline-warning btn-lg text-dark ms-3"
            @click="resetInfo"
          >
            취소
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import MyPageSidebar from "@/components/MyPageSidebar.vue";
import { ref, computed,onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import memberAPI from "@/apis/memberAPI";
import agentAPI from "@/apis/agentAPI";
const store = useStore();
const userData = ref({});
const agentData = ref({});
const arrPhone = ref("");
const userRole = ref("");
const memberProfile = ref(null);
const agentDetailData = ref({});
const route= useRoute();

//유저 데이터를 가져오는 메소드 정의
async function getUserData() {
  try {
    const response = await memberAPI.getUserData();
    userRole.value = response.data.userRole;
    agentData.value = response.data.agentSignupData.agent;
    agentDetailData.value = response.data.agentSignupData.agentDetail;
    console.log(response.data.agentSignupData);
    // 전화번호 하이픈을 기준으로 나누기
    arrPhone.value = agentData.value.aphone.split("-");
  } catch (error) {
    console.log(error);
  }
}
const getUattach = async (argAnumber) => {
  try {
if(store.getUserRole ==='MEMBER'){
  const response = await memberAPI.memberAttachDownload(argAnumber);
  const blob = response.data;
  memberProfile.value = URL.createObjectURL(blob);
} else{
  const response = await agentAPI.agentAttachDownload(argAnumber);
  const blob = response.data;
  memberProfile.value = URL.createObjectURL(blob);
}

  } catch (error) {
    console.log(error);
  }
};
onMounted(()=>{
  if(store.getters.getUserRoleNumber){
  getUattach(store.getters.getUserRoleNumber);
}
})

//로그인한 유저의 이메일을 가지고 데이터 가져오는 함수
getUserData(store.getters.getUemail);
const user = ref({
  name: "원민경",
  phone: "010-1234-1234",
  email: "text@email.com",
  hasQuantity: 4,
});
console.log(userData.value);

let changePassword = ref({
  oldPassword: "",
  newPassword1: "",
  newPassword2: "",
});

let errorMessage = ref({
  oldPassword: "",
  newPassword1: "",
  newPassword2: "",
});

var oldPasswordValidStyle = ref(false);
var new1PasswordValidStyle = ref(false);
var new2PasswordValidStyle = ref(false);

const tempPassword = "user123";

var passwordPattern =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{4,20}$/;
var passwordResult = ref(null);

const fileInputProfile = ref(null);
const imageFilesProfile = ref(null);

// 변경을 할 때 빈 값이 있으면 제출 버튼 비활성화
const checkChangePasswordData = computed(() => {
  var result =
    changePassword.value.oldPassword !== "" &&
    changePassword.value.newPassword1 !== "" &&
    changePassword.value.newPassword2 !== "";
  return result;
});

// 파일을 읽고 URL을 반환하는 함수
const readFile = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      resolve({ file, src: e.target.result }); // 파일과 데이터 URL을 포함한 객체 반환
    };
    reader.onerror = reject; // 실패 시 onerror 실행 됨
    reader.readAsDataURL(file); // 파일의 데이터 URL을 읽기 시작
  });
};

// input태그에 이미지 들어오면 실행
const previewImagesProfile = async (event) => {
  console.log("profile실행");
  const file = fileInputProfile.value.files[0]; // 선택된 파일 가져오기

  if (file) {
    try {
      const newImage = await readFile(file); // 파일 읽기
      imageFilesProfile.value = newImage; // imageFiles에 할당
    } catch (error) {
      console.error("파일을 읽는 중 오류 발생:", error);
    }
  }
};

function validOldPassword() {
  // 비밀번호 유효성 검사
  if (changePassword.value.oldPassword !== tempPassword) {
    errorMessage.value.oldPassword = "비밀번호가 틀렸습니다.";
    oldPasswordValidStyle.value = false;
    console.log("비밀번호 틀림 여부", oldPasswordValidStyle.value);
  } else {
    oldPasswordValidStyle.value = true;
    errorMessage.value.oldPassword = "";
  }
}

function validNew1Password() {
  if (!passwordResult.value) {
    passwordResult.value = passwordPattern.test(
      changePassword.value.newPassword1
    );
    errorMessage.value.newPassword1 = "유효하지 않은 비밀번호 입니다.";
    new1PasswordValidStyle.value = false;
    console.log("비밀번호 패턴 틀림 여부", new1PasswordValidStyle.value);
  } else {
    errorMessage.value.newPassword1 = "비밀 번호 사용이 가능합니다.";
    new1PasswordValidStyle.value = true;
  }
}

function validNew2Password() {
  if (changePassword.value.newPassword1 !== changePassword.value.newPassword2) {
    errorMessage.value.newPassword2 = "비밀번호와 비밀번호 확인이 다릅니다.";
    new2PasswordValidStyle.value = false;
    console.log("비밀번호 다름 여부", new2PasswordValidStyle.value);
  } else {
    errorMessage.value.newPassword2 = "알맞은 비밀번호 입니다.";
    new2PasswordValidStyle.value = true;
    console.log("비밀번호 맞음", new2PasswordValidStyle.value);
  }
}

function handleSubmit() {
  console.log("제출 함수 실행");
  // 유효성 검사를 모두 통과하면 실행
  if (
    oldPasswordValidStyle.value &&
    new1PasswordValidStyle &&
    new2PasswordValidStyle
  ) {
    // 검사 완료한 폼을 스프링 부트에 보내기
    // 변경되었다는 모달 창 띄우기
  }

  console.log(JSON.parse(JSON.stringify(changePassword.value)));
}

function resetInfo() {
  console.log("취소 버튼 실행");
  changePassword.value.newPassword1 = "";
  changePassword.value.newPassword2 = "";
  changePassword.value.oldPassword = "";

  errorMessage.value.newPassword1 = "";
  errorMessage.value.newPassword2 = "";
  errorMessage.value.oldPassword = "";
}
</script>

<style scoped>
.titleNcontent {
  width: 80%;
  padding: 20px;
}
.badge {
  left: 80px;
  top: 72px;
}

input[type="password"] {
  width: 70%;
}
</style>
