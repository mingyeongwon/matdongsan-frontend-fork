<template>
  <div class="d-flex">
    // <MyPageSidebar />
    <div class="content">
      <Content />
      <div>
        <p>문의하신 내용에 대한 수정 및 삭제는 답변 등록 이전에 가능합니다.</p>
        <p>
          고객센터 답변 가능 시간 : 평일 10:00 ~ 18:30 (토, 일요일, 공휴일 휴무)
        </p>
      </div>
      <div>
        <p>최근 6개월 간 문의하신 내역이 없습니다.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const mypageSidebarButtonsColor = ref("border-color : #2F4858");
const mainColor = ref("#FEC83F");
</script>

<style scoped>
.content {
  width: 80%;
  padding: 20px;
}
</style>
