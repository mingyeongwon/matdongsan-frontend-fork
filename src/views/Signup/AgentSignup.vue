<template>
 <div>
     <div class="agentSignup-title">
         <h2 class="fw-bold text-center">중개인 회원가입</h2>
     </div>
     <div class="agentSignup-box border-top">
         <form>
             <div class="d-flex mb-4">
                 <div class="d-flex col-2 pt-1">
                     <span class="agentInputTitle">이메일</span>
                     <span class="text-danger fs-5 fw-bold">*</span>
                 </div>
                 <div class="agentEmail-box">
                     <input class="ps-2 me-3" type="text" placeholder="영대소문자, 숫자, 언더바(_) 혼용 4~12자 가능합니다.">
                     <button class="agentSignupPassword-btn text-light w-25">중복확인</button>
                 </div>
             </div>
             <div class="d-flex mb-4">
                 <div class="d-flex col-2  pt-1">
                     <span class="agentInputTitle">비밀번호</span>
                     <span class="text-danger fs-5 fw-bold">*</span>
                 </div>
                 <div class="agentPassword-box d-flex flex-column">
                     <input class="mb-2 ps-2" type="password" placeholder="영문, 숫자, 특수문자 혼합 4~20자 가능합니다.">
                     <input class="ps-2" type="password" placeholder="비밀번호를 재입력하세요.">
                 </div>
             </div>
             <div class="d-flex mb-4 agentPhone-box">
                 <div class="d-flex col-2 pt-1">
                     <span class="agentInputTitle">핸드폰번호</span>
                     <span class="text-danger fs-5 fw-bold">*</span>
                 </div>
                    
                 <div>
                     <input class="ps-2" type="text" placeholder="숫자만 10~11자 가능합니다.">
                 </div>
             </div>                
             <div class="d-flex mb-4 agentBrandName-box">
                 <div class="d-flex col-2 pt-1">
                     <span class="agentInputTitle">중개사무소 명칭</span>
                     <span class="text-danger fs-5 fw-bold">*</span>
                 </div>
                 <div>
                     <input class="ps-2" type="text">
                 </div>
             </div>                
             <div class="d-flex mb-4 agentBrandName-box">
                 <div class="d-flex col-2 pt-1">
                     <span class="agentInputTitle">사업자 번호</span>
                     <span class="text-danger fs-5 fw-bold">*</span>
                 </div>
                 <div>
                  <input class="ps-2" type="text" placeholder="숫자만 10자 가능합니다.">
                 </div>
             </div>                
             <div class="d-flex mb-4 agentProfile-box">
                 <span class="col-2 agentInputTitle">대표 사진</span>
                 <div>
                     <input type="file" id="agentProfile">
                     <label class="agentProfile-label" for="agentProfile">
                         <div class="x"></div>
                         <div class="y"></div>
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
                      <input class="mb-2 ps-2" type="password" placeholder="우편번호">
                      <button type="button" class="btn btn-dark btn-sm ms-2 ">주소검색</button>
                    </div>
                     <input class="mb-2 ps-2" type="password" placeholder="주소">
                     <input class="ps-2" type="password" placeholder="상세주소">
                 </div>
             </div>  
             <div class="d-flex mb-5 agentProfile-box">
                <div class="d-flex col-2 pt-1">
                     <span class="agentInputTitle">서류 첨부</span>
                     <span class="text-danger fs-5 fw-bold">*</span>
                 </div>
                 <div>
                     <input type="file" id="agentProfile">
                     <label class="agentProfile-label" for="agentProfile">
                         <div class="x"></div>
                         <div class="y"></div>
                     </label>
                 </div>
                 <div>
                     <input type="file" id="agentProfile">
                     <label class="agentProfile-label" for="agentProfile">
                         <div class="x"></div>
                         <div class="y"></div>
                     </label>
                 </div>
             </div>                         
             <div class="text-center agentSignupBtn-box">
                 <button class="btn btn-warning fw-bold h-100" type="submit">회원 가입</button>
             </div>               
         </form>
     </div>
  </div>
  <!-- <div class="form-box w-75 text-start mt-5">
    <div>
      <h2 class="fw-bold text-center agentSignup-title">중개인 회원가입</h2>
    </div>

    <div class="border-top">
      <form action="#">
        <div class="d-flex mt-5">
          <section>
            <div class="d-">
              <span>아이디</span>
              <div class="emailInput-box d-flex">
                <input placeholder="영대소문자, 숫자 혼용 4~12자 가능합니다.">
                <button class="text-white">중복확인</button>
              </div>
            </div>
            <div>
              <span></span>
              <div></div>
            </div>
            <div>
              <span></span>
              <div></div>
            </div>
          </section>
          <div class="row">
            <b>중개사무소 정보*</b>
            <p class="text-muted">
              조회하기 클릭 후, 중개사무소를 검색하면 관련 정보가 자동입력 됩니다.
            </p>
          </div>
          <div class="row">
            <button type="button" class="btn btn-dark btn-sm">조회하기</button>
          </div>
        </div>

        <div class="d-flex">
          <b class="me-5">사업자 상호</b>
          <input type="text" />
        </div>
        <hr />
        <div>
          <b class="me-4">사업자 대표명</b>
          <input type="text" />
        </div>
        <hr />
        <div>
          <b class="me-3">중개사 등록번호</b>
          <input type="text" />
        </div>

        <div class="mt-3">
          <router-link to="#">중개사무소 정보 직접 입력</router-link>
        </div>
        <hr />
        <b>사업자 등록번호 확인*</b>
        <div>
          <input type="text" placeholder="'-' 없이 입력해주세요." />
          <button type="button" class="btn btn-dark btn-sm ms-2 g-0">조회하기</button>
        </div>
        <hr />
        <b>주소지*</b>
        <div>
          <input type="text" placeholder="우편번호" />
          <button type="button" class="btn btn-dark btn-sm ms-2 ">주소검색</button>
        </div>
        <div>
          <input class="mt-2 form-control form-control-sm w-50" type="text" placeholder="주소" />
        </div>
        <div>
          <input class="mt-2 form-control form-control-sm w-50" type="text" placeholder="상세주소" />
        </div>
        <hr />
        <b>서류 첨부*</b>
        <p class="text-muted fw-bold">
          정보를 수정 할 경우, 서류는 신규 제출해야 합니다.
        </p>
        <div class="d-flex">
          <div class="mb-3">
            <b>사업자등록증 첨부*</b> <input type="file" />
            <div class="border border-dark p-5 mt-2">10mb 이하로 1장만 첨부 가능합니다.</div>
          </div>
          <div class="ms-3">
            <b>사업자등록증 첨부*</b> <input type="file" />
            <div class="border border-dark p-5 mt-2">10mb 이하로 1장만 첨부 가능합니다.</div>
          </div>
        </div>

        <button class="submitBtn btn btn-warning w-100 disabled mt-3 mb-5">
          다음
        </button>
      </form>
    </div>
  </div> -->
</template>

<script setup></script>

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
