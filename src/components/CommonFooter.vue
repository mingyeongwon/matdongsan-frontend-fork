<template>
  <div>
    <div class="container-fluid mt-5">
      <footer class="py-5">
        <div class="row w-100">
          <div class="col-2 offset-1">
            <RouterLink class="navbar-brand ms-3 d-flex" to="/"
              ><img src="../../public/matdongsan_logo.png" width="40" />
              <div class="ms-2 logo-box">
                <h2 class="nav-title mb-1 fw-bold h4">Matdongsan</h2>
                <p class="sub-title m-0 text-center fw-bold h6">부동산 맛집</p>
              </div></RouterLink
            >
          </div>
          <div class="col-1 w-50">
            <div class="d-flex flex-row footer-parabox">
              <div class="mb-2 me-5">
                <RouterLink to="/about" class="nav-link p-0 fw-bolder">회사소개</RouterLink>
              </div>
              <div class="mb-2 me-5">
                <RouterLink to="/QNA/Notice" class="nav-link p-0 fw-bold">공지사항</RouterLink>
              </div>
              <div class="mb-2 me-5">
                <RouterLink to="#" class="nav-link p-0 fw-bold">이용약관</RouterLink>
              </div>
              <div class="mb-2 me-5">
                <RouterLink to="#" class="nav-link p-0 fw-bold"
                  >개인정보 처리방침</RouterLink
                >
              </div>
              <div class="mb-2 me-5">
                <RouterLink to="#" class="nav-link p-0"
                  >위치기반 서비스 이용약관</RouterLink
                >
              </div>
            </div>
            <div class="d-flex flex-row">
              <div class="mb-2 me-5">
                <p class="mt-4">
                  상호: (주) 맛동산 | 대표 : 원민경 | 사업자등록번호:
                  123-45-67890
                </p>
                <p class="mt-2">
                  주소 : 서울특별시 송파구 중대로 135 아이티벤처타워
                </p>
                <p class="mt-2">서비스 이용문의: 1234-5678</p>
                <p class="mt-2">
                  서비스 제휴문의: matdongsan@matdongsan.com | 분양광고 문의
                  mat@matdongsan.com
                </p>
                <p class="mt-2">
                  © 2024 Matdongsan Company, Inc. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
a {
  text-decoration: none;
  color: #fff;
}
.logo-box h2 {
  font-size: 18px;
}
.logo-box p {
  font-size: 12px;
}
.container-fluid {
  background-color: #2f4858;
  color: #fff;
}
.container-fluid p {
  font-size: 10px;
}
.copy-right-part {
  margin-right: auto;
  margin-left: auto;
}
.footer-parabox{

}
</style>
