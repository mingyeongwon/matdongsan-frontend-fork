<template>
  <div class="d-flex vh-100">
    <MyPageSidebar />
    <div class="titleNcontent">
      <h4>내 정보</h4>
      <hr />
      <form action="">
        <div class="d-flex">
          <h6 class="text-muted fw-bold align-self-center me-5">프로필 사진</h6>
          <div>
            <div type="button" class="btn position-relative">
              <img
                src="data:image/png;base64,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"
                width="100"
                class="rounded-circle"
                alt=""
              />
              <span
                class="position-absolute badge rounded-circle bg-warning p-2"
                ><img src="@/assets/stylus.png" width="15" alt="" /><span
                  class="visually-hidden"
                  >unread messages</span
                ></span
              >
            </div>
          </div>

          <h6 class="align-self-center ms-5">남은 개수</h6>

          <img src="" alt="집 이미지" class="rounded-circle" />
        </div>
        <hr />
        *이름
        <input type="text" />
        <hr />
        *전화번호
        <input type="text" />
      </form>
    </div>
  </div>
</template>

<script setup>
import MyPageSidebar from "@/components/MyPageSidebar.vue";
</script>

<style scoped>
.titleNcontent {
  width: 80%;
  padding: 20px;
}
.badge {
  left: 80px;
  top: 72px;
}
</style>
