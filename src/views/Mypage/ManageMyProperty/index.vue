<template>
  <div class="d-flex">
    <MyPageSideBar />
    <div class="w-75 mx-auto">
      <table class="table">
        <thead>
          <tr>
            <th scope="col" class="text-center">매물번호</th>
            <th scope="col" class="text-center">대표사진</th>
            <th scope="col" class="text-center">제목 / 내용</th>
            <th scope="col" class="text-center">매물 상태</th>
            <th scope="col" class="text-center">등록한 날짜</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" class="text-center align-middle">1</th>
            <td class="align-middle text-center">
              <img src="@/assets/test.png" width="150" alt="매물 사진" />
            </td>
            <td class="align-middle text-muted">
              <small class="text-muted"> 원룸 </small>
              <div class="fw-bold">전세 7400</div>
              <small>
                반지층,20m<sup>2</sup>,관리비 5만, 전세대출가능 보증보험가입가능
              </small>
            </td>
            <td class="fw-bold align-middle text-center">2024/06/12</td>
            <td class="fw-bold align-middle">
              <div class="d-flex flex-column">
                <button class="btn btn-warning btn-sm fw-bold mb-3">수정</button
                ><button class="soldOutBtn btn btn-sm fw-bold mb-3">
                  거래완료</button
                ><button class="btn btn-danger btn-sm fw-bold">비활성화</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import MyPageSideBar from "@/components/MyPageSidebar.vue";
</script>

<style scoped>
.soldOutBtn {
  background-color: #2f4858;
  color: #fff;
}
</style>
