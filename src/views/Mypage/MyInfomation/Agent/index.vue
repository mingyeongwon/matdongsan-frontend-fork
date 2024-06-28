<template>
  <div class="d-flex h-100 w-100 mx-auto">
    <MyPageSidebar />
    <div class="titleNcontent w-75 mx-auto">
      <div class="d-flex justify-content-between mb-3">
        <h4 class="fw-bold mt-2 ">내 정보</h4>
      </div>
      <hr>
      <form action="" class="w-75 mx-auto" v-on:submit.prevent="handleSubmit">
        <div class="d-flex justify-content-between w-75">
          <h6 class="text-muted fw-bold align-self-center">프로필 사진</h6>
          <label class="profile-input" for="profile-input">
            <div type="button" class="btn position-relative ms-5">
              <img
                src="https://photos.zillowstatic.com/h_l/ISjrsb703kq2pu1000000000.jpg"
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
          <input type="file" name="profile-input" id="profile-input" style="display: none;">

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
            <h6 class="text-center">4개 남음</h6>
          </div>
        </div>
        <hr />
        <div>
          이름
          <input class="ms-5" type="text" value="원민경" readonly>
        </div>
        <hr class="mb-4" />
        전화번호
        <input
          type="text"
          class="me-2 ms-4 ps-2"
          value="010"
          readonly
          size="1"
        />-
        <input type="text" class="ms-2 me-2 ps-2" value="1234" size="2" readonly/>-
        <input type="text" class="ms-2 ps-2" value="5678"  size="2" readonly/>

        <h4 class="mt-5 fw-bold">중개소 정보</h4>
        <hr class="border border-black border-2" />
        <div class="d-flex justify-content-between w-75">
          <h6 class="text-muted fw-bold align-self-center">중개소 사진</h6>
          <label class="profile-input" for="profile-input">
            <div type="button" class="btn position-relative">
              <img
                src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20150901_183%2F14410444107431iJ8n_JPEG%2FSUBMIT_1283497390526_13484098.jpg"
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
          <input type="file" name="profile-input" id="profile-input" style="display: none;">


          <h6 class="align-self-center ms-5 me-5 fw-bold text-muted">
          </h6>
          <div class="align-self-center mt-4">
            <div class="align-self-center p-2"></div>
          </div>
        </div>
        <hr/>
        <div>
          중개소 이름
          <input class="ms-5" type="text" value="검은소와 중개소" readonly>
        </div>
        <hr class="mb-4" />
        사업자 등록 번호
        <input
          type="text"
          class="me-2 ms-4 ps-2"
          value="012"
          readonly
          size="1"
        />-
        <input type="text" class="ms-2 me-2 text-center" value="34" size="1" readonly/>-
        <input type="text" class="ms-2 ps-2" value="56789"  size="3" readonly/>
        <hr />
        <div class="row">
          <div class="row">
            <div class="col-2">주소</div>
            <input class="col-10" type="text" value="서울 송파구 마천로 30" style="margin-right: 70px; width: 40%;" readonly>
          </div>
          <div class="row mt-4">
            <div class="col-2">상세주소</div>
            <input class="col-10" type="text" value="코오롱아파트 단지내 A상가 109호" style="width: 60%" readonly>
          </div>
        </div>


        <h4 class="mt-5 fw-bold">비밀번호 변경</h4>
        <hr class="border border-black border-2" />
        <table class="table table-lg">
          <tbody>
            <tr>
              <th scope="row">현재 비밀번호</th>
              <td>
                <input type="password" v-model.trim="changePassword.oldPassword"/>
                <div class="text-danger">{{ errorMessage.oldPassword }}</div>
              </td>
              
            </tr>
            <tr>
              <th scope="row">새 비밀번호</th>
              <td>
                <input type="password" v-model.trim="changePassword.newPassword1" placeholder="영문, 숫자, 특수문자 혼합 4~20자 가능합니다.">
                <div :class="passwordValidStyle? 'text-success':'text-danger'">{{ errorMessage.newPassword1 }}</div>
              </td>
            </tr>
            <tr>
              <th scope="row">새 비밀번호 확인</th>
              <td colspan="2">
                <input type="password" v-model.trim="changePassword.newPassword2" placeholder="새 비밀번호과 같은 비밀번호를 적어주세요.">
                <div :class="passwordValidStyle? 'text-success':'text-danger'">{{ errorMessage.newPassword2 }}</div>
              </td>

            </tr>
          </tbody>
        </table>

        <div class="text-end">
          <button button="button" class="btn btn-warning btn-lg" :disabled="!checkChangePasswordData">
            변경하기
          </button>
          <button type="button" class="btn btn-outline-warning btn-lg text-dark ms-3">취소</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import MyPageSidebar from "@/components/MyPageSidebar.vue";
import { ref, computed } from "vue";

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

var passwordValidStyle = ref(false);

const tempPassword = "user123";

// 변경을 할 때 빈 값이 있으면 제출 버튼 비활성화
const checkChangePasswordData = computed(() => {
  var result = changePassword.value.oldPassword !== "" && changePassword.value.newPassword1 !== "" && changePassword.value.newPassword2 !== "";
  return result;
});

var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{4,20}$/;
var passwordResult = ref(null);


function handleSubmit() {
  console.log("제출 함수 실행");
  // 비밀번호 유효성 검사
  if(changePassword.value.oldPassword !== tempPassword) {
    errorMessage.value.oldPassword = "비밀번호가 틀렸습니다.";
    passwordValidStyle.value = false;
    console.log("비밀번호 틀림 여부",passwordValidStyle.value);
  } else {
    errorMessage.value.oldPassword = "";
  }
  
  // 바꿀 비밀번호 유효성 검사
  if(!passwordResult.value){
    passwordResult.value = passwordPattern.test(changePassword.value.newPassword1);
    errorMessage.value.newPassword1 = "유효하지 않은 비밀번호 입니다.";
    passwordValidStyle.value = false;
    console.log("비밀번호 패턴 틀림 여부",passwordValidStyle.value);

  } else if(changePassword.value.newPassword1 !== changePassword.value.newPassword2){
    errorMessage.value.newPassword2 = "비밀번호와 비밀번호 확인이 다릅니다.";
    errorMessage.value.newPassword1 = "";
    passwordValidStyle.value = false;
    console.log("비밀번호 다름 여부",passwordValidStyle.value);

  } else{
    errorMessage.value.newPassword2 = "알맞은 비밀번호 입니다.";
    errorMessage.value.newPassword1 = "";
    passwordValidStyle.value = true;
    console.log("비밀번호 맞음",passwordValidStyle.value);
  }

  // 유효성 검사를 모두 통과하면 실행
  if(passwordValidStyle.value){
    // 검사 완료한 폼을 스프링 부트에 보내기


    // 변경되었다는 모달 창 띄우기

  }

  console.log(JSON.parse(JSON.stringify(changePassword.value)));
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
    width:70%
}
</style>
