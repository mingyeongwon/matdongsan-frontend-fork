<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-warning">
    <div class="container-fluid">
      <RouterLink class="navbar-brand ms-3 d-flex" to="/"
        ><img class="col me-3" src="../../public/matdongsan_logo.png" width="60" />
        <div>
          <h2 class="nav-title mb-1">Matdongsan</h2>
          <p class="sub-title m-0 text-center">부동산 맛집</p>
        </div></RouterLink
      >

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link fw-bold" to="/Property"
              >원룸</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link fw-bold" to="/Agent"
              >부동산</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link fw-bold" to="/FavoriteProperty"
              >관심목록</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link fw-bold" to="/Mypage/MyInfo"
              >마이페이지</RouterLink
            >
          </li>
         
          <li class="nav-item">
            <button class="btn btn-info btn-sm mt-2" @click="showAgentLoginModal">
             중개사무소 가입 및 로그인
            </button>
          </li>
          <li class="nav-item ">
            <RouterLink class="nav-link fw-bold" to="/Payment/PaymentInfo"
              ><div class="btn btn-success btn-sm">등록하기</div></RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- 모달 -->
  <AgentLoginModal id="AgentLoginModal" @close="hideAgentLoginModal" />
</template>

<script setup>
import AgentLoginModal from "./Login/AgentLoginModal.vue";
import { onMounted } from "vue";
import { Modal } from "bootstrap";

let agentLoginModal = null;

onMounted(() => {
  agentLoginModal = new Modal(document.querySelector("#AgentLoginModal"));
});


function showAgentLoginModal() {
  agentLoginModal.show();
}

function hideAgentLoginModal() {
  agentLoginModal.hide();
}
</script>

<style scoped>
.nav-title {
  font-weight: bold;
  margin-bottom: 0;
}
.sub-title {
  font-size: 11px;
  color: #fff;
  font-weight: bold;
}
</style>
