<template>
  <div>
    <h2 style="text-align: center; margin-top: 70px; margin-bottom: 50px; font-weight: bold">공지사항</h2>
    <!-- 버튼 tab -->
    <div class="row" style="margin-left: 400px; margin-right: 400px; height: 50px;">
        <RouterLink to="/QnA/notice" class="askMenu col-4 d-flex" style="background-color: #2F4858; color: white; text-decoration: none;">
          <button style="background-color: transparent; border: none; width: 100%; color: white">공지 사항</button>
        </RouterLink>

         <RouterLink to="/QnA/ask" class="askMenu col-4 d-flex" style="text-decoration: none;">
          <button class="askMenuBtn" style="background-color: transparent; border: none; width: 100%;">1:1 문의</button>
        </RouterLink>
        
        <RouterLink to="/QnA/FAQ" class="askMenu col-4 d-flex" style="text-decoration: none;">
          <button class="askMenuBtn" style="background-color: transparent; border: none; width: 100%;">자주 묻는 질문</button>
        </RouterLink>
      </div>
    <!-- 검색 및 정렬 -->
    <div style="margin-left: 500px; margin-right: 500px;">
      <div class="d-flex" style="justify-content: end; margin-top: 60px">
        
        <select name="sortType" id="sortType" style="border-radius: 15px; width: 200px; height: 35px; border: 1px solid black; padding-left: 10px; margin-right: 10px; background-color: transparent;">
            <option value="sort1">카테고리</option>
            <option value="sort2">정렬2</option>
            <option value="sort3">정렬3</option>
          </select>
        
        <input type="text" placeholder="검색어를 입력해주세요" style="border-radius: 5px; width: 250px; border: 1.5px solid grey;">
        <div class="ms-2">
        <button style="border-radius: 100%; border:none; background-color: #FEC83F; width: 30px; height:30px; justify-content: center; align-items: center;"  class="d-flex"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </div>  
    
      <!-- 리스트(table) -->
      <table style="width: 100%; margin-top: 20px">
        <thead>
          <th>카테고리</th><th>제목</th><th>날짜</th>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: center;">[공지사항]</td>
            <td >맛동산 개인정보 처리방침 개정 안내</td>
            <td style="text-align: center;">2024-06-01</td>
          </tr>
          <tr>
            <td style="text-align: center;">[공지사항]</td>
            <td >[공지사항] Internet Explorer 11 지원 종료 안내</td>
            <td style="text-align: center;">2024-06-01</td>
          </tr>
          <tr>
            <td style="text-align: center;">[공지사항]</td>
            <td >[공지사항] 맛동산 '간편문의' 서비스 종료 예정 (12월5일)</td>
            <td style="text-align: center;">2024-06-01</td>
          </tr>
        </tbody>
      </table>
    </div>  
  
  </div>
</template>
  
  <script setup>
  
  </script>
  
  <style scoped>
    .askMenu{
    background-color: transparent;
    color: black;
    border: 1px solid lightgrey;

  }

    .askMenu:hover{
      background-color: #2F4858;
      color: white;
      /* border: 2px solid black; */
  }

  .askMenuBtn:hover{
    color: white;
  }

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
  