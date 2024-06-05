<template>
  <div class="form-box w-75 text-start mt-5">
    <h2 class="fw-bolder">중개인 회원가입</h2>

    <div>
      <h4 class="mt-4">중개사무소입력</h4>
      <ul class="text-muted fw-bold">
        <li class="mt-3">
          집이지는 중개사무소를 개설 등록한 대표자(개업공인개사)가 회원가입
          가능합니다
        </li>
        <li class="mt-3">
          회원가입에 관한 문의사항은 고객센터(1600-1234)으로 연락 바랍니다.
        </li>
      </ul>
    </div>
    <form action="#">
      <div class="d-flex mt-5">
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
</template>

<script setup></script>

<style scoped>
.form-box {
  margin-right: auto;
  margin-left: auto;
}
</style>
