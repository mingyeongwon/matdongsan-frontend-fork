<template>
  <div class="d-flex w-100 vh-100">
    <MyPageSideBar />
    <div class="vh-100 p-5 w-100">
      <h2 class="fw-bold">회원탈퇴</h2>
      <hr />
      <div class="">
        <p class="w-75 mx-auto">
          <b
            >회원 탈퇴를 신청하기 전에 아래 안내 사항을 한번 더 확인해주세요.</b
          >
        </p>
        <ul class="delete-user-info list-group list-group-numbered w-75">
          <ol class="list-group-item border-0">
            회원 탈퇴 시, 현재 로그인된 아이디는 즉시 탈퇴 처리됩니다.
          </ol>
          <ol class="list-group-item border-0">
            회원 탈퇴 시, 회원 전용 웹 서비스 이용이 불가합니다.
          </ol>
          <ol class="list-group-item border-0">
            회원 탈퇴 시, 현재 로그인된 아이디는 즉시 탈퇴 처리됩니다.
          </ol>
          <ol class="list-group-item border-0">
            탈퇴 시 회원 정보 및 찜 서비스, 등록한 게시물 이용 기록이 모두 삭제
            됩니다.
          </ol>
          <ol class="list-group-item border-0">
            회원 정보 및 서비스 이용 기록은 모두 삭제되며, 삭제된 데이터는
            복구되지 않습니다.
          </ol>
        </ul>
        <hr />
        <form action="#" class="deleteUserForm w-75 mx-auto mt-5" novalidate>
          <div class="mx-auto form-group mt-5 w-50">
            <h6>비밀번호</h6>
            <input
              class="form-control mx-auto border border-secondary"
              type="password"
            />
          </div>
          <div class="form-group mt-3 w-50 mx-auto">
            <h6>탈퇴를 하는 이유가 뭔가요?</h6>
            <select
              class="form-select form-select mb-3 mx-auto border border-secondary "
              aria-label=".form-select-lg example" 
            >
              <option selected>사용이 불편함</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="form-group mt-3 mx-auto w-50">
            <h6>다른 이유가 있다면 알려주세요</h6>
            <textarea
              name="reasonForDeleteAccount"
              id="reasonForDeleteAccount"
              class="mx-auto form-control border border-secondary"
            ></textarea>
          </div>
          <div class="form-group mt-3 mx-auto w-50">
            <input
              type="checkbox"
              name="deleteAgreement"
              id="deleteAgreement"
            />
            <label for="deleteAgreement" class="ms-2"
              ><b> 유의 사항에 동의 </b></label
            >
          </div>
          <div class="form-group mt-3 text-center">
            <button type="button" class="btn btn-dark w-25">
              돌아가기
            </button>
            <button type="button" class="ms-3 btn btn-warning w-25">
              탈퇴하기
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import MyPageSideBar from "@/components/MyPageSidebar.vue";
</script>

<style scoped>
.deleteUserForm,
.delete-user-info {
  margin-right: auto;
  margin-left: auto;
}
.ps {
}
</style>
