<template>
<div>
    <div class="agentSignup-title">
        <h2 class="fw-bold text-center">중개인 회원가입</h2>
    </div>
    <div class="agreementCheck-box border-top">
        <form>
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
.agentSignup-title {
  margin: 50px 0;
}

.form-box {
  margin-right: auto;
  margin-left: auto;
}

.emailInput-box button {
  height: 40px;
  background: rgb(21, 42, 105);
}
</style>
