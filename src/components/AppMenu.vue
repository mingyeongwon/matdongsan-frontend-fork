<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-warning">
    <div class="container-fluid">
      <RouterLink class="navbar-brand ms-3 pt-3" to="/"
        ><h2 class="nav-title mb-1">ZIP Easy</h2>
        <p class="sub-title g-0">쉽게 구하는 당신의 공간</p></RouterLink
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <RouterLink
              class="nav-link dropdown-toggle fw-bold"
              to="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              매물 검색
            </RouterLink>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <RouterLink class="dropdown-item" to="#">원룸</RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="#">투룸</RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="#">고시원</RouterLink>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <RouterLink
              class="nav-link dropdown-toggle fw-bold"
              to="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              중개
            </RouterLink>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <RouterLink class="dropdown-item" to="/agentList"
                  >전체 중개인</RouterLink
                >
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/agentList"
                  >내 주변 중개인</RouterLink
                >
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <RouterLink
              class="nav-link dropdown-toggle fw-bold"
              to="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              커뮤니티
            </RouterLink>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><RouterLink class="dropdown-item" to="#">Q&A</RouterLink></li>
              <li>
                <RouterLink class="dropdown-item" to="#"
                  >허위매물신고</RouterLink
                >
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/about"
                  >집이지란?</RouterLink
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link fw-bold" to="/Mypage/MyInfo"
              >마이페이지</RouterLink
            >
          </li>
          <li class="nav-item">
            <button @click="memberModalOpen">로그인 및 회원가입</button>
          </li>
          <li class="nav-item">
            <button class="btn" @click="showAgentLoginModal">중개사무소 가입 및 로그인</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- 모달 -->
  <MemberLoginModal id="MemberLoginModal" @closeModal="memberModalClose"/>
  <AgentLoginModal id="AgentLoginModal" @close="hideAgentLoginModal" /> 
</template>

<script setup>
import MemberLoginModal from './Login/MemberLoginModal.vue'
import AgentLoginModal from './Login/AgentLoginModal.vue';
import {onMounted} from "vue";
import {Modal} from "bootstrap";

let memberModalLogin = null;
let agentLoginModal = null;

onMounted(() => {
  memberModalLogin = new Modal(document.querySelector("#MemberLoginModal"));
  agentLoginModal = new Modal(document.querySelector("#AgentLoginModal"));
});

function memberModalOpen(){
  memberModalLogin.show();
}

function memberModalClose(){
  memberModalLogin.hide();
}

function showAgentLoginModal(){
  agentLoginModal.show();
}

function hideAgentLoginModal(){
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
