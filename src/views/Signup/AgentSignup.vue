<template>
 <div>
     <div class="agentSignup-title">
         <h2 class="fw-bold text-center">중개인 회원가입</h2>
     </div>
     <div class="agentSignup-box border-top ">
         <form v-on:submit.prevent="handleSubmit">
             <div class="d-flex mb-4">
                 <div class="d-flex col-2 pt-1">
                     <span class="agentInputTitle">이메일</span>
                     <span class="text-danger fs-5 fw-bold">*</span>
                 </div>
                 <div class="agentEmail-box">
                     <input class="ps-2 me-3 border border-dark rounded mb-2 w-100" type="text" 
                     placeholder="영대소문자, 숫자, 언더바(_) 혼용 4~12자 가능합니다." v-model.trim="agentSignup.agentEmail">
              <span :style="emailValidStyle ? 'color:green': 'color:red'">{{ errorMessage.emailValid }}</span>

                    </div>
            <button type="button" class="ms-2 btn btn-sm agentSignupPassword-btn text-light" @click="uniqueCheck">중복확인</button>
             </div>
             <div class="d-flex mb-4">
                 <div class="d-flex col-2  pt-1">
                     <span class="agentInputTitle">비밀번호</span>
                     <span class="text-danger fs-5 fw-bold">*</span>
                 </div>
                 <div class="agentPassword-box d-flex flex-column">
                     <input class="mb-2 ps-2 border border-dark rounded" type="password" placeholder="영문, 숫자, 특수문자 혼합 4~20자 가능합니다."  v-model.trim="agentSignup.agentPassword1">
                     <input class="ps-2 border border-dark rounded" type="password" placeholder="비밀번호를 재입력하세요." v-model.trim="agentSignup.agentPassword2">
              <span :style="passwordValidStyle ? 'color:green': 'color:red'">{{ errorMessage.passwordValid }}</span>

                 </div>
             </div>
             <div class="d-flex mb-4 agentName-box">
                 <div class="d-flex col-2 pt-1">
                     <span class="agentInputTitle">이름</span>
                     <span class="text-danger fs-5 fw-bold">*</span>
                 </div>
                    
                 <div class="agentPassword-box d-flex flex-column">
                     <input class="ps-2 border border-dark rounded" type="text" placeholder="본명을 작성하세요." v-model.trim="agentSignup.agentName">
                      <span :style="nameValidStyle ? 'color:green': 'color:red'">{{ errorMessage.nameValid }}</span>

                 </div>
             </div>     
             <div class="d-flex mb-4 agentPhone-box">
                 <div class="d-flex col-2 pt-1">
                     <span class="agentInputTitle">핸드폰번호</span>
                     <span class="text-danger fs-5 fw-bold">*</span>
                 </div>
                    
                 <div class="agentPassword-box d-flex flex-column">
                     <input class="ps-2 border border-dark rounded" type="text" placeholder="하이픈을 포함하여 작성하세요." v-model.trim="agentSignup.agentPhone">
                      <span :style="phoneValidStyle ? 'color:green': 'color:red'">{{ errorMessage.phoneValid }}</span>

                 </div>
             </div>             
             <div class="d-flex mb-4 agentBrandName-box">
                 <div class="d-flex col-2 pt-1">
                     <span class="agentInputTitle">중개사무소 명칭</span>
                     <span class="text-danger fs-5 fw-bold">*</span>
                 </div>
                 <div>
                     <input class="ps-2 border border-dark rounded" type="text" v-model.trim="agentSignup.agentBrandName">
                 </div>
             </div>                
             <div class="d-flex mb-4 agentBrandName-box">
                 <div class="d-flex col-2 pt-1">
                     <span class="agentInputTitle">사업자 번호</span>
                     <span class="text-danger fs-5 fw-bold">*</span>
                 </div>
                 <div class="agentPassword-box d-flex flex-column">
                  <input class="ps-2 border border-dark rounded" type="text" placeholder="하이픈을 포함하여 작성하세요." v-model.trim="agentSignup.agentBrandNum">
                  <span :style="brandNumValidStyle ? 'color:green': 'color:red'">{{ errorMessage.brandNumValid }}</span>

                 </div>
             </div>                
             <div class="d-flex mb-4 agentProfile-box">
                 <span class="col-2 agentInputTitle">대표 사진</span>
                 <div>
                     <input type="file" id="agentProfile">
                     <label class="agentProfile-label border border-1 border-secondary rounded" for="agentProfile">
                         <div class="x border border-1 border-secondary"></div>
                         <div class="y border border-1 border-secondary"></div>
                     </label>
                 </div>
             </div> 
             <div class="d-flex mb-4 agentAddress-box">
                 <div class="d-flex col-2 pt-1">
                     <span class="agentInputTitle">주소</span>
                     <span class="text-danger fs-5 fw-bold">*</span>
                 </div>
                 <div class="agentPassword-box d-flex flex-column">
                    <div>
                      <input class="mb-2 ps-2 border border-dark rounded" type="password" placeholder="우편번호" >
                      <button type="button" class="btn btn-dark btn-sm ms-2 ">주소검색</button>
                    </div>
                     <input class="mb-2 ps-2 border border-dark rounded" type="password" placeholder="주소">
                     <input class="ps-2 border border-dark rounded" type="password" placeholder="상세주소">
                 </div>
             </div>  
             <div class="d-flex mb-5 agentProfile-box">
                <div class="d-flex col-2 pt-1">
                     <span class="agentInputTitle">서류 첨부</span>
                     <span class="text-danger fs-5 fw-bold">*</span>
                 </div>
                 <div>
                     <input type="file" id="agentProfile">
                     <label class="agentProfile-label border border-1 border-secondary me-5" for="agentProfile">
                         <div class="x border border-1 border-secondary"></div>
                         <div class="y border border-1 border-secondary"></div>
                     </label>
                 </div>
                 <div>
                     <input type="file" id="agentProfile">
                     <label class="agentProfile-label border border-1 border-secondary" for="agentProfile">
                         <div class="x border border-1 border-secondary"></div>
                         <div class="y border border-1 border-secondary"></div>
                     </label>
                 </div>
             </div>                         
             <div class="text-center agentSignupBtn-box">
                 <button class="btn btn-warning fw-bold h-100" type="submit" :disabled="!checkAgentSignupData">회원 가입</button>
             </div>               
         </form>
     </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
const router = useRouter();

let agentSignup = ref({
    agentEmail: "",
    agentPassword1: "",
    agentPassword2: "",
    agentPhone: "",
    agentBrandName: "",
    agentBrandNum: "",
    agentName: "",
});

let errorMessage = ref({
  emailValid:"",
  passwordValid:"",
  phoneValid:"",
  brandNumValid:"",
  nameValid:"",
});

let tempEmail = "user@gmail.com"
var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{4,20}$/;
var phonePattern = /^(01[016789])-(\d{3,4})-(\d{4})$/;
var brandNumPattern = /^\d{3}-\d{2}-\d{5}$/;
var namePattern = /^[가-힣]{2,17}$/;


// 비어있는 필수 값이 있다면 제출 버튼을 비활성화
const checkAgentSignupData = computed(() => {
    var result = agentSignup.value.agentEmail !== "" && agentSignup.value.agentPassword1 !== "" && agentSignup.value.agentPassword2 !== ""
                && agentSignup.value.agentPhone !== "" && agentSignup.value.agentBrandName !== "" && agentSignup.value.agentBrandNum !== ""
                && agentSignup.value.agentName !== "";
    return result;
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

function uniqueCheck(){
  // 중복 확인을 하면서 전체적인 이메일 유효성 검사도 실행
  emailResult.value = emailPattern.test(agentSignup.value.agentEmail);
  if(!emailResult.value){
    errorMessage.value.emailValid = "유효하지 않은 이메일 입니다.";
    emailValidStyle.value = false;
  }else if(agentSignup.value.agentEmail === tempEmail){
    errorMessage.value.emailValid = "이미 사용중인 이메일 입니다.";
    emailValidStyle.value = false;
  } else{
    errorMessage.value.emailValid = "사용 가능한 이메일 입니다.";
    emailValidStyle.value = true;
  }
//   console.log("출력",emailValidStyle.value);
}

// 중복 확인을 아예 하지 않았을 경우와, 비밀번호와 휴대폰 번호, 사업자 번호, 이름 정규식 검사
function handleSubmit() {
  // 중복 확인 여부
  if(errorMessage.value.emailValid===""){
    errorMessage.value.emailValid = "중복 확인을 해주세요";
    emailValidStyle.value = false;
  }

  // 휴대폰 번호 유효성 검사
  phoneResult.value = phonePattern.test(agentSignup.value.agentPhone);
  if(!phoneResult.value){
    errorMessage.value.phoneValid = "유효하지 않은 휴대폰 번호 입니다.";
    phoneValidStyle.value = false;
  } else {
    errorMessage.value.phoneValid = "사용 가능한 휴대폰 번호 입니다.";
    phoneValidStyle.value = true;
  }
  
  // 사업자 번호 유효성 검사
  brandNumResult.value = brandNumPattern.test(agentSignup.value.agentBrandNum);
  if(!brandNumResult.value){
    errorMessage.value.brandNumValid = "유효하지 않은 사업자 번호 입니다.";
    brandNumValidStyle.value = false;
  } else {
    errorMessage.value.brandNumValid = "사용 가능한 사업자 번호 입니다.";
    brandNumValidStyle.value = true;
  }

  // 비밀번호 유효성 검사
  passwordResult.value = passwordPattern.test(agentSignup.value.agentPassword1);
  if(!passwordResult.value){
    errorMessage.value.passwordValid = "유효하지 않은 비밀번호 입니다.";
    passwordValidStyle.value = false;
  } else if(agentSignup.value.agentPassword1 !== agentSignup.value.agentPassword2){
    errorMessage.value.passwordValid = "비밀번호와 비밀번호 확인이 같지 않습니다.";
    passwordValidStyle.value = false;
  } else{
    errorMessage.value.passwordValid = "사용 가능한 휴대폰 번호 입니다.";
    passwordValidStyle.value = true;
  }

   // 이름 유효성 검사
   nameResult.value = namePattern.test(agentSignup.value.agentName);
  if(!nameResult.value){
    errorMessage.value.nameValid = "유효하지 않은 이름 입니다.";
    nameValidStyle.value = false;
  } else {
    errorMessage.value.nameValid = "사용 가능한 이름 입니다.";
    nameValidStyle.value = true;
  }

    console.log(JSON.parse(JSON.stringify(agentSignup.value)))

      // 유효성 검사가 모두 통과되면
  if(emailValidStyle.value && passwordValidStyle.value && phoneValidStyle.value && brandNumValidStyle.value && nameValidStyle.value){
    // axios로 통신하여 폼 보내고

    // 홈으로 돌아가기
    router.push("/");
}
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

    .agentPassword-box, .agentEmail-box, .agentPhone-box input, .agentBrandName-box input, .agentProfile-box input, .agentName-box input {
        width: 438px;
        
    }

    .agentPassword-box input, .agentEmail-box input, .agentPhone-box input, .agentBrandName-box input, .agentProfile-box input, .agentName-box input  {
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

    .agentProfile-label .x, .agentProfile-label .y{
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

</style>
