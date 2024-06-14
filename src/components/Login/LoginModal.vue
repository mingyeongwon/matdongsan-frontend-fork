<template>
  <!--  -->
  <div class="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="d-flex" style="justify-content: end">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="$emit('close')">
            </button>
          </div>
          <div>
            <div class="d-flex" style="margin-bottom: 30px;">
              <img class="col me-3" src="../../../public/matdongsan_logo.png" width="60" />
              <div>
                <h2 class="nav-title mb-1">Matdongsan</h2>
                <p class="sub-title m-0 text-center">부동산 맛집</p>
              </div>              
            </div>
            <form>
              <div>
                <div>
                  <h4 class="fs-6 fw-bold">아이디</h4>
                </div>
                <div class="loginInputBox">
                  <input class="h-100" type="text" name="email" placeholder="이메일 주소 입력">
                </div>
              </div>
              <div>
                <div>
                  <h4 class="fs-6 fw-bold">비밀번호</h4>
                </div>
                <div class="loginInputBox">
                  <input class="h-100" type="password" name="email" placeholder="비밀번호 입력">
                </div>
              </div>
              <div class="d-flex flex-column w-75 mx-auto">
                <button type="submit" class="btn btn-warning">로그인</button>
              </div>
            </form>
            <div class="d-flex justify-content-evenly">
              <span>아이디 찾기</span>
              <span>비밀번호 찾기</span>
            </div>
            <div class="d-grid gap-2  w-75 mx-auto">
              <p>회원이 아니신가요?</p>
              <button class="btn btn-secondary">일반 회원 가입하기</button>
              <button class="btn btn-secondary">업체 회원 가입하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["close"]);
</script>

<style scoped>
input {
  border: 1px solid rgb(237, 237, 237);
}

.loginInputBox {
  height: 40px;
}
</style>
