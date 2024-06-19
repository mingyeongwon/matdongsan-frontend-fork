<template>
    <!-- 리스트(table) -->
     <div class="w-50 container">
    <table style="width: 100%; margin-top: 20px; ">
        <thead>
        <!-- <th>카테고리</th> -->
        <th>제목</th><th>날짜</th>
        </thead>
        <tbody>
        <tr v-for="(item, index) in noticeList" :key="index">
            <!-- <td style="text-align: center;">[공지사항]</td> -->
            <td class="ps-3">{{ item.title }}</td>
            <td style="text-align: center;">{{ item.date }}</td>
        </tr>
        
        </tbody>
    </table>
    <RouterLink to="/QNA/noticeform" style=" text-decoration: none;">
        <div class="d-flex justify-content-end">
            <div class="btn btn-sm mt-3 me-3" style="background-color: #2F4858; color: white;">글 쓰기</div>
        </div>
    </RouterLink>
</div>
</template>

<script setup>
import { ref } from 'vue';

let noticeList = ref([
    { title: "맛동산 개인정보 처리방침 개정 안내", date: "2024-06-01" },
    { title: "맛동산 개인정보 처리방침 개정 안내", date: "2024-06-01" },
    { title: "맛동산 개인정보 처리방침 개정 안내", date: "2024-06-01" },
    { title: "맛동산 개인정보 처리방침 개정 안내", date: "2024-06-01" },
    { title: "맛동산 개인정보 처리방침 개정 안내", date: "2024-06-01" },
    { title: "맛동산 개인정보 처리방침 개정 안내", date: "2024-06-01" },
    { title: "맛동산 개인정보 처리방침 개정 안내", date: "2024-06-01" },
]);


</script>

<style scoped>
    th{
      text-align: center;
      /* padding-left: 20px; */
      border-top: 2px solid black;
      border-bottom: 1px solid grey;
      height: 60px;
  
    }
    td{
      height: 60px;
      border-bottom: 1px solid gray
    }
</style>
