<template>
  <div>
    <SignupAgreement>
      <template v-slot:buttons>
        <RouterLink
          to="/Signup/AgentSignup"
          class="text-decoration-none text-dark"
          ><button class="btn btn-lg btn-warning fw-bold me-4" type="submit">
            다음
          </button></RouterLink
        >
        <RouterLink to="/" class="text-decoration-none text-dark"
          ><button
            class="btn btn-lg fw-bold text-dark ms-4 cancelBtn"
            type="submit"
          >
            돌아가기
          </button></RouterLink
        >
      </template>
    </SignupAgreement>
  </div>
</template>

<script setup>
import SignupAgreement from "./SignupAgreement.vue";
</script>

<style scoped>
.agreementCheck-box button {
  width: 254px;
}

.agreementCheck-box .cancelBtn {
  background-color: #d9d9d9;
}
</style>
