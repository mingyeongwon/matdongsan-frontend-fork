<template>
  <div class="mt-5 container mb-5">
    <h4 class="fw-bold mb-4">메인 서비스</h4>
    <div class="d-flex justify-content-evenly mx-auto">
      <div class="card border border-2" style="width: 18rem">
        <img
          src="@/assets/main-service1.png"
          class="card-img pt-2 ps-5 pe-5"
          alt="..."
        />
        <div class="card-body text-center mb-5">
          <h5 class="card-title fw-bold">원룸</h5>
          <p class="card-text text-muted">
            집이지가 선정한 <br />
            원룸 리스트 정보를 찾아보세요.
          </p>
          <RouterLink to="/Property" class="btn text-light ps-5 pe-5"
            >보러가기</RouterLink
          >
        </div>
      </div>
      <div class="card border border-2" style="width: 18rem">
        <img
          src="@/assets/main-service2.png"
          class="card-img pt-2 ps-5 pe-5"
          alt="..."
        />
        <div class="card-body text-center">
          <h5 class="card-title fw-bold">전/월세</h5>
          <p class="card-text text-muted">
            집이지를 통해 타 사이트보다 <br />
            저렴한 등록비로 집을 홍보하세요.
          </p>
          <RouterLink to="/Payment/PaymentInfo" class="btn text-light ps-5 pe-5"
            >집내놓기</RouterLink
          >
        </div>
      </div>
      <div class="card border border-2" style="width: 18rem">
        <img
          src="@/assets/main-service3.png"
          class="card-img pt-2 ps-5 pe-5"
          alt="..."
        />
        <div class="card-body text-center">
          <h5 class="card-title fw-bold">부동산</h5>
          <p class="card-text text-muted">
            집이지와 같이 일을 하는 <br />
            중개업자에게 연락해보세요.
          </p>
          <RouterLink to="/Agent" class="btn text-light ps-5 pe-5"
            >중개인 목록보기</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.btn {
  background-color: #2f4858;
}
.btn:hover {
  background-color: #8d8f91;
}
</style>
