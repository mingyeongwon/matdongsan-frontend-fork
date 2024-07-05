<template>
    <!-- 리스트(table) -->
     <div class="w-50 container">
    <table style="width: 100%; margin-top: 20px; margin-bottom: 20px">
        <thead>
        <!-- <th>카테고리</th> -->
        <th>제목</th><th>날짜</th>
        </thead>
        <tbody>
            <tr v-for="(item, index) in noticeList" :key="index">
                    
                    <!-- <td style="text-align: center;">[공지사항]</td> -->
                    <td class="ps-5"><RouterLink class="routerLink" :to="`/QNA/noticedetail?nnumber=${item.nnumber}`">{{ item.ntitle }}</RouterLink></td>
                
                    <td style="text-align: center;">{{ item.ndate }}</td>
                </tr>
        
        </tbody>
    </table>
    <RouterLink class="routerLink" to="/QNA/noticeform">
        <div v-if="$store.state.userRole == 'ADMIN'" class="d-flex justify-content-end">
            <div class="btn btn-sm mt-3 me-3" style="background-color: #2F4858; color: white;">글 쓰기</div>
        </div>
    </RouterLink>
</div>
</template>

<script setup>
import { ref, toRefs } from 'vue';

const props = defineProps({
    noticeList: Object,
});

const { noticeList } = toRefs(props);


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
