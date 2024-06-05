<template>
  <div>
    <h2 style="text-align: center; margin-top: 20px; margin-bottom: 20px">자주 묻는 질문</h2>
    <!-- 버튼 tab -->
  <div class="row" style="margin-left: 50px; margin-right: 50px; height: 50px;">
    <button class="askMenu col-4" style="background-color: #2F4858; color: white;">자주 묻는 질문</button>
    <button class="askMenu col-4">1:1 문의</button>
    <button class="askMenu col-4">공지사항</button>
  </div>
  <!-- 검색 및 정렬 -->
  <select name="sortType" id="sortType" style="margin-right: 10px;">
    <option value="sort1">정렬1</option>
    <option value="sort2">정렬2</option>
    <option value="sort3">정렬3</option>
  </select>
  <input type="text" placeholder="검색어를 입력해주세요">
  <button style="border-radius: 100%; border:none; background-color: #FEC83F; width: 30px; height:30px"><img src="" /></button>
  <!-- 리스트(table) -->
  <table>
    <thead>
      <th>

      </th>
    </thead>
  </table>

  
  </div>
</template>
  
  <script setup>
  
  </script>
  
  <style scoped>
    .askMenu{
    background-color: transparent;
    color: black;
    border: none;
  }

    .askMenu:hover{
      background-color: #2F4858;
      color: white;
      border: 2px solid black;
  }
  </style>
  