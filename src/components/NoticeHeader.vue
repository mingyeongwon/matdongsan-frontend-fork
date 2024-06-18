<template>
<div class="container w-50">
    <h2 style="text-align: center; margin-top: 70px; margin-bottom: 50px; font-weight: bold"><slot name="header">Qna 헤더 내용</slot></h2>
      <!-- 버튼 tab -->
      <div class="row" style="height: 50px;">
          <RouterLink to="/QNA/Notice" class="askMenu col-4 d-flex" style="text-decoration: none; padding: none;">
            <button class="askMenuBtn" style="background-color: transparent; border: none; width: 100%;">공지 사항</button>
          </RouterLink>
  
           <RouterLink to="/QNA/CustomerInquiryForm" class="askMenu col-4 d-flex" style="text-decoration: none;">
            <button class="askMenuBtn" style="background-color: transparent; border: none; width: 100%;">1:1 문의</button>
          </RouterLink>
          
          <RouterLink to="/QnA/FAQ" class="askMenu col-4 d-flex" style="text-decoration: none;">
            <button class="askMenuBtn" style="background-color: transparent; border: none; width: 100%;">자주 묻는 질문</button>
          </RouterLink>
        </div>
</div>
</template>

<script setup>
// 스크립트로 해당 페이지 버튼 색 넣는거 추후 구현해야 할듯
//background-color: #2F4858; color: white;, 글씨 흰색...등등


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
</style>
