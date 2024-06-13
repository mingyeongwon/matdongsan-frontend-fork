<template>
  <div class="sidebar">
    <ul class="list-group">
      <li class="list-group-item">마이페이지</li>
      <li class="list-group-item">
        <RouterLink to="/MyPage/MyInfo">내 정보</RouterLink>
      </li>
      <li class="list-group-item">
        <RouterLink to="/MyPage/ManageMyProperty">매물 관리</RouterLink>
      </li>
      <li class="list-group-item">
        <RouterLink to="/MyPage/ReportFalseListing">허위매물 신고</RouterLink>
      </li>
      <li class="list-group-item">
        <RouterLink to="/MyPage/CustomerInquiry">1:1 문의내역</RouterLink>
      </li>
      <li class="list-group-item">
        <RouterLink to="/MyPage/DeleteAccount">회원 탈퇴</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const mypageSidebarButtonsColor = ref("border-color : #2F4858");
</script>

<style scoped>
.sidebar {
  width: 20%;
  padding: 10px;
  border-right: 1px solid #ddd;
}

.btn {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}
</style>
