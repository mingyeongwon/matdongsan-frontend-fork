<template>
    <!-- 리스트(table) -->
     <div class="w-50 container">
    <table style="width: 100%; margin-top: 20px; ">
        <thead>
        <!-- <th>카테고리</th> -->
        <th>제목</th><th>날짜</th><th>답변 여부</th>
        </thead>
        <tbody>
            <tr v-for="(item, index) in noticeList" :key="index">
                    
                    <!-- <td style="text-align: center;">[공지사항]</td> -->
                    <td class="ps-3"><RouterLink class="routerLink" to="/Adminpage/CustomerInquiryDetail">{{ item.title }}</RouterLink></td>
                
                    <td style="text-align: center;">{{ item.date }}</td>
                    <td style="text-align: center;" class="ps-5 pe-5">{{ item.status }}</td>

                </tr>
        
        </tbody>
    </table>

</div>
</template>

<script setup>
import { ref } from 'vue';

let noticeList = ref([
    { title: "매물 등록권 3개를 구매하면 3개의 매물을 한번에 등록해야 하나요?", date: "2024-06-01", status:"답변 완료" },
    { title: "매물 등록권 3개를 구매하면 3개의 매물을 한번에 등록해야 하나요?", date: "2024-06-01", status:"답변 완료" },
    { title: "매물 등록권 3개를 구매하면 3개의 매물을 한번에 등록해야 하나요?", date: "2024-06-01", status:"답변 완료" },
    { title: "매물 등록권 3개를 구매하면 3개의 매물을 한번에 등록해야 하나요?", date: "2024-06-01", status:"답변 완료" },
    { title: "매물 등록권 3개를 구매하면 3개의 매물을 한번에 등록해야 하나요?", date: "2024-06-01", status:"답변 완료" },
    { title: "매물 등록권 3개를 구매하면 3개의 매물을 한번에 등록해야 하나요?", date: "2024-06-01", status:"답변 완료" },
    { title: "매물 등록권 3개를 구매하면 3개의 매물을 한번에 등록해야 하나요?", date: "2024-06-01", status:"답변 완료" },
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
    .routerLink{
        text-decoration: none; /* 밑줄 제거 */
        color: inherit; /* 기본 텍스트 색상 상속 */
        background: none; /* 배경 제거 */
        border: none; /* 테두리 제거 */
        cursor: pointer; /* 커서 스타일 설정 */
    }

</style>
