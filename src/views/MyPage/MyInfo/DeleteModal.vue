<template>
    <div class="modal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
                회원탈퇴
            </h5>
          </div>
          <div class="modal-body">
            <div>
              <h1>회원 탈퇴를 신청하기 전에 아래 안내 사항을 한번 더 확인해주세요.</h1>
            </div>
            <div>
              <p>1. 회원 탈퇴 시, 현재 로그인된 아이디는 즉시 탈퇴 처리됩니다.</p>
              <p>2. 회원 탈퇴 시, 회원 전용 웹 서비스 이용이 불가합니다.</p>
              <p>3. 탈퇴 시 회원 정보 및 웹 서비스, 등록한 게시물 이용 기록이 모두 삭제됩니다.</p>
            </div>
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-info btn-sm" data-bs-dismiss="modal">확인</button>
              <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">닫기</button>
          </div>
        </div>
      </div>
    </div>
  </template>

<script setup>
// const emit = defineEmits(["close"]);
</script>

<style scoped>
</style>