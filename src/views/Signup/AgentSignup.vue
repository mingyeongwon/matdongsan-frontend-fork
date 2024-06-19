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
                     placeholder="영대소문자, 숫자, 언더바(_) 혼용 4~12자 가능합니다." v-model="agentSignup.agentEmail">
                    </div>
                    <button class="ms-2 btn btn-sm agentSignupPassword-btn text-light">중복확인</button>
             </div>
             <div class="d-flex mb-4">
                 <div class="d-flex col-2  pt-1">
                     <span class="agentInputTitle">비밀번호</span>
                     <span class="text-danger fs-5 fw-bold">*</span>
                 </div>
                 <div class="agentPassword-box d-flex flex-column">
                     <input class="mb-2 ps-2 border border-dark rounded" type="password" placeholder="영문, 숫자, 특수문자 혼합 4~20자 가능합니다."  v-model="agentSignup.agentPassword1">
                     <input class="ps-2 border border-dark rounded" type="password" placeholder="비밀번호를 재입력하세요." v-model="agentSignup.agentPassword2">
                 </div>
             </div>
             <div class="d-flex mb-4 agentPhone-box">
                 <div class="d-flex col-2 pt-1">
                     <span class="agentInputTitle">핸드폰번호</span>
                     <span class="text-danger fs-5 fw-bold">*</span>
                 </div>
                    
                 <div>
                     <input class="ps-2 border border-dark rounded" type="text" placeholder="숫자만 10~11자 가능합니다." v-model="agentSignup.agentPhone">
                 </div>
             </div>                
             <div class="d-flex mb-4 agentBrandName-box">
                 <div class="d-flex col-2 pt-1">
                     <span class="agentInputTitle">중개사무소 명칭</span>
                     <span class="text-danger fs-5 fw-bold">*</span>
                 </div>
                 <div>
                     <input class="ps-2 border border-dark rounded" type="text" v-model="agentSignup.agentBrandName">
                 </div>
             </div>                
             <div class="d-flex mb-4 agentBrandName-box">
                 <div class="d-flex col-2 pt-1">
                     <span class="agentInputTitle">사업자 번호</span>
                     <span class="text-danger fs-5 fw-bold">*</span>
                 </div>
                 <div>
                  <input class="ps-2 border border-dark rounded" type="text" placeholder="숫자만 10자 가능합니다." v-model="agentSignup.agentBrandNum">
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
                      <input class="mb-2 ps-2 border border-dark rounded" type="password" placeholder="우편번호">
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
                 <button class="btn btn-warning fw-bold h-100" type="button" @click="goHome" :disabled="!checkAgentSignupData">회원 가입</button>
             </div>               
         </form>
     </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, computed } from "vue";

let agentSignup = ref({
    agentEmail: "",
    agentPassword1: "",
    agentPassword2: "",
    agentPhone: "",
    agentBrandName: "",
    agentBrandNum: "",
});

const checkAgentSignupData = computed(() => {
    var result = agentSignup.value.agentEmail !== "" && agentSignup.value.agentPassword1 !== "" && agentSignup.value.agentPassword2 !== ""
                && agentSignup.value.agentPassword1 === agentSignup.value.agentPassword2 && agentSignup.value.agentPhone !== ""
                && agentSignup.value.agentBrandName !== "" && agentSignup.value.agentBrandNum !== "";
    return result;
});

function handleSubmit() {
    console.log(JSON.parse(JSON.stringify(agentSignup.value)))
}

const router = useRouter();
function goHome() {
    router.push("/")
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

    .agentPassword-box, .agentEmail-box, .agentPhone-box input, .agentBrandName-box input, .agentProfile-box input {
        width: 438px;
        
    }

    .agentPassword-box input, .agentEmail-box input, .agentPhone-box input, .agentBrandName-box input, .agentProfile-box input {
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
