<template>
  <div class="d-flex h-auto w-100 mx-auto">
    <MyPageSidebar />
    <div class="titleNcontent w-75 mx-auto">
      <div class="d-flex justify-content-between">
        <h4 class="fw-bold mt-2">내 정보</h4>
      </div>
      <hr class="border border-black border-2" />
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

          <h6 class="align-self-center ms-5 me-5 fw-bold text-muted">등록권</h6>
          <div class="align-self-center mt-4">
            <img
              src="@/assets/house-img.png"
              alt="집 이미지"
              width="60"
              height="60"
              class="bg-warning rounded align-self-center p-2"
            />
            <h6 class="text-center mt-1 fw-bold">{{ hasQuantity }}개</h6>
          </div>
        </div>
        <hr />
        <div class="d-flex">
          <div class="align-self-center col-2 fw-bold">이름</div>
          <input
            v-if="userRole === 'AGENT'"
            class="ms-5"
            type="text"
            v-model="agentData.aname"
          />
          <input v-else class="ms-5" type="text" v-model="memberData.mname" />
        </div>
        <hr class="mb-4" />
        <div class="d-flex">
          <div class="align-self-center col-2 fw-bold">전화번호</div>
          <div>
            <input
              type="text"
              class="me-2 ms-5 ps-2"
              v-model="arrPhone[0]"
              size="1"
            />-
            <input
              type="text"
              class="ms-2 me-2 ps-2"
              v-model="arrPhone[1]"
              size="2"
            />-
            <input
              type="text"
              class="ms-2 ps-2"
              v-model="arrPhone[2]"
              size="2"
            />
          </div>
        </div>
        <hr class="mb-4" />
        <div class="d-flex">
          <div class="align-self-center me-5 col-2 fw-bold">이메일 주소</div>
          <input
            type="email"
            class="readonly-box"
            v-model="store.getters.getUemail"
            readonly
          />
        </div>
        <div v-if="userRole === 'AGENT'" class="need-to-add-type-variable-here">
          <hr />
          <div class="d-flex">
            <div class="align-self-center col-2 fw-bold">중개소 이름</div>
            <input class="ms-5" type="text" v-model="agentData.abrand" />
          </div>
          <hr class="mb-4" />
          <div class="d-flex">
            <div class="align-self-center col-2 me-4 fw-bold">
              사업자 등록 번호
            </div>
            <input
              type="text"
              class="me-2 ms-4 ps-2"
              v-model="agentDetailData.adbrandnumber"
              size="30"
            />
          </div>

          <hr />
          <div class="row">
            <div class="d-flex">
              <div class="col-2 me-5 fw-bold">주소</div>
              <div>
                <input
                  class="col w-75 readonly-box"
                  type="text"
                  style="margin-right: 20px; width: 70%"
                  v-model="agentData.aaddress"
                  readonly
                />
                <div class="btn btn-dark btn-sm" @click="openPostSearch">
                  검색
                </div>
                <input
                  class="col mt-2 w-75"
                  type="text"
                  style="width: 60%"
                  placeholder="상세주소"
                  v-model="agentData.aaddressdetail"
                />
                <div>
                  <input
                    class="col mt-2 w-25 readonly-box"
                    type="text"
                    v-model="agentData.apostcode"
                    style="width: 60%"
                    readonly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="text-end me-5">
          <button class="btn btn-success me-3">수정하기</button>
          <button type="button" @click="resetInfoBtn" class="btn btn-danger">취소</button>
        </div>
      </form>

      <h4 class="mt-5 fw-bold">비밀번호 변경</h4>
      <hr class="border border-black border-2" />
      <form action="" class="w-75 mx-auto">
        <table class="table table-lg w-75">
          <tbody>
            <tr>
              <th scope="row" class="w-25">현재 비밀번호</th>
              <td>
                <input
                  type="password"
                  class="ms-4 w-100"
                  v-model.trim="changePassword.oldPassword"
                  @keyup="validOldPassword"
                />
                <div class="text-danger ms-4 mt-1">
                  {{ errorMessage.oldPassword }}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">새 비밀번호</th>
              <td>
                <input
                  type="password"
                  class="ms-4 w-100"
                  v-model.trim="changePassword.newPassword1"
                  placeholder="영문, 숫자, 특수문자 혼합 4~20자 가능합니다."
                  @keyup="validNew1Password"
                />
                <div
                  :class="
                    new1PasswordValidStyle ? 'text-success' : 'text-danger'
                  "
                  class="ms-4 mt-1"
                >
                  {{ errorMessage.newPassword1 }}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">새 비밀번호 확인</th>
              <td colspan="2" class="h-50">
                <input
                  type="password"
                  class="ms-4 w-100"
                  v-model.trim="changePassword.newPassword2"
                  placeholder="새 비밀번호과 같은 비밀번호를 적어주세요."
                  @keyup="validNew2Password"
                />
                <div
                  :class="
                    new2PasswordValidStyle ? 'text-success' : 'text-danger'
                  "
                  class="ms-4 mt-1"
                >
                  {{ errorMessage.newPassword2 }}
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="text-end me-5">
          <button
            button="button"
            class="btn btn-warning"
            :disabled="!checkChangePasswordData"
          >
            변경하기
          </button>
          <button
            type="button"
            class="btn btn-outline-warning text-dark ms-3"
            @click="resetPasswordInfo"
          >
            취소
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- 업데이트 완료 모달 -->
  <div
    class="modal fade"
    id="updateInfoDoneModal"
    tabindex="-1"
    aria-labelledby="updateInfoDoneModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="updateInfoDoneModalLabel">알림</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
        {{updateMessage}}
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MyPageSidebar from "@/components/MyPageSidebar.vue";
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import memberAPI from "@/apis/memberAPI";
import agentAPI from "@/apis/agentAPI";
import { Modal } from "bootstrap";
const store = useStore();
const agentData = ref({});
const memberData = ref({});
const arrPhone = ref("");
const userRole = ref("");
const memberProfile = ref(null);
const agentDetailData = ref({});
const hasQuantity = ref(0);
const updateMessage = ref("");
//유저 데이터를 가져오는 메소드 정의
async function getUserData() {
  try {
    const response = await memberAPI.getUserData();
    userRole.value = response.data.userRole;
    hasQuantity.value = response.data.propertyListing;
    if (userRole.value == "AGENT") {
      agentData.value = response.data.agentSignupData.agent;
      agentDetailData.value = response.data.agentSignupData.agentDetail;
      // 전화번호 하이픈을 기준으로 나누기
      arrPhone.value = agentData.value.aphone.split("-");
    } else {
      memberData.value = response.data.member;
      arrPhone.value = memberData.value.mphone.split("-");
    }
  } catch (error) {
    console.log(error);
  }
}
const getUattach = async (argAnumber) => {
  try {
    if (store.getters.getUserRole === "MEMBER") {
      const response = await memberAPI.memberAttachDownload(argAnumber);
      const blob = response.data;
      memberProfile.value = URL.createObjectURL(blob);
    } else {
      const response = await agentAPI.agentAttachDownload(argAnumber);
      const blob = response.data;
      memberProfile.value = URL.createObjectURL(blob);
    }
  } catch (error) {
    console.log(error);
  }
};
onMounted(() => {
  if (store.getters.getUserRoleNumber) {
    getUattach(store.getters.getUserRoleNumber);
  }
});

//로그인한 유저의 이메일을 가지고 데이터 가져오는 함수
getUserData(store.getters.getUemail);

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
//주소 검색 모달
function openPostSearch() {
  new window.daum.Postcode({
    oncomplete: (data) => {
      agentData.value.apostcode = data.zonecode;
      agentData.value.aaddress = data.address;
      showMap(data.address); // 주소로 좌표 저장하기
    },
  }).open();
}
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
//주소에 따른 좌표 등록
function showMap(address) {
  const kakao = window.kakao;
  const geocoder = new kakao.maps.services.Geocoder();

  geocoder.addressSearch(address, function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
      agentData.value.alongitude = result[0].x;
      agentData.value.alatitude = result[0].y;
    }
  });
}
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

async function handleSubmit() {
  console.log("제출 함수 실행");
  //중개인 제출 데이터 폼
  if (store.getters.getUserRole === "AGENT") {
    const formData = new FormData();
    formData.append("agent.abrand", agentData.value.abrand);
    formData.append("agent.aname", agentData.value.aname);
    formData.append(
      "agent.aphone",
      arrPhone.value[0] + "-" + arrPhone.value[1] + "-" + arrPhone.value[2]
    );
    formData.append("agent.aaddress", agentData.value.aaddress);
    formData.append("agent.aaddressdetail", agentData.value.aaddressdetail);
    formData.append("agent.apostcode", agentData.value.apostcode);
    formData.append("agent.alatitude", agentData.value.alatitude);
    formData.append("agent.alongitude", agentData.value.alongitude);
    if (imageFilesProfile.value)
      formData.append("agent.aprofile", imageFilesProfile.value.file);

    formData.append(
      "agentDetail.adbrandnumber",
      agentDetailData.value.adbrandnumber
    );
    try {
      await agentAPI.updateAgentData(formData);
      updateMessage.value = "회원 정보 업데이트 성공";
    } catch (error) {
      console.log(error.response ? error.response.data : error.message);
    }
  } else{
    const formData = new FormData();
    formData.append("mname", memberData.value.mname);

    formData.append(
      "mphone",
      arrPhone.value[0] + "-" + arrPhone.value[1] + "-" + arrPhone.value[2]
    );
    if (imageFilesProfile.value)
      formData.append("mprofile", imageFilesProfile.value.file);
    try {
      await memberAPI.updateMemberData(formData);
      updateMessage.value = "회원 정보 업데이트 성공"

    } catch (error) {
      console.log(error.response ? error.response.data : error.message);
    }
  }
  const updateInfoDoneModal = new Modal(document.getElementById("updateInfoDoneModal"));
  updateInfoDoneModal.show();
  // 유효성 검사를 모두 통과하면 실행
  if (
    oldPasswordValidStyle.value &&
    new1PasswordValidStyle &&
    new2PasswordValidStyle
  ) {
    // 검사 완료한 폼을 스프링 부트에 보내기
    // 변경되었다는 모달 창 띄우기
  }

  // console.log(JSON.parse(JSON.stringify(changePassword.value)));
}
//수정 완료 업데이트

function resetPasswordInfo() {
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
.readonly-box {
  background-color: #ced4da;
}
</style>
