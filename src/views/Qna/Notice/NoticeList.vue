<template>
    <!-- 리스트(table) -->
     <div class="w-50 container">
    <table style="width: 100%; margin-top: 20px; ">
        <thead>
        <th>카테고리</th><th>제목</th><th>날짜</th>
        </thead>
        <tbody>
        <tr>
            <td style="text-align: center;">[공지사항]</td>
            <td class="ps-3">맛동산 개인정보 처리방침 개정 안내</td>
            <td style="text-align: center;">2024-06-01</td>
        </tr>
        <tr>
            <td style="text-align: center;">[공지사항]</td>
            <td class="ps-3">Internet Explorer 11 지원 종료 안내</td>
            <td style="text-align: center;">2024-05-14</td>
        </tr>
        <tr>
            <td style="text-align: center;">[공지사항]</td>
            <td class="ps-3">맛동산 '간편문의' 서비스 종료 예정</td>
            <td style="text-align: center;">2024-05-01</td>
        </tr>
        <tr>
            <td style="text-align: center;">[공지사항]</td>
            <td class="ps-3"> 생활형숙박시설 '동산' 서비스 종료 예정 안내</td>
            <td style="text-align: center;">2024-03-21</td>
        </tr>
        <tr>
            <td style="text-align: center;">[공지사항]</td>
            <td class="ps-3"> 맛동산 개인정보 처리방침 주요 개정사항에 대한 안내</td>
            <td style="text-align: center;">2024-03-17</td>
        </tr>
        <tr>
            <td style="text-align: center;">[공지사항]</td>
            <td class="ps-3">맛동산 허위매물 예방 5계명 안내</td>
            <td style="text-align: center;">2024-02-11</td>
        </tr>
        <tr>
            <td style="text-align: center;">[공지사항]</td>
            <td class="ps-3">맛동산 정직프로젝트</td>
            <td style="text-align: center;">2024-01-21</td>
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
</script>

<style scoped>
    th{
      text-align: center;
      border-top: 2px solid black;
      border-bottom: 1px solid grey;
      height: 60px;
  
    }
    td{
      height: 60px;
      border-bottom: 1px solid gray
    }
</style>
