<template>
    <div>
      <h2 style="text-align: center; margin-top: 20px; margin-bottom: 20px">문의하기</h2>
      <!-- 버튼 tab -->
    <div class="row" style="margin-left: 50px; margin-right: 50px; height: 50px;">
      <RouterLink to="/QnA/notice" class="askMenu col-4 d-flex" style="text-decoration: none;">
        <button class="askMenuBtn" style="background-color: transparent; border: none; width: 100%;">공지 사항</button>
      </RouterLink>

       <RouterLink to="/QnA/Ask" class="askMenu col-4 d-flex" style="background-color: #2F4858; color: white; text-decoration: none;">
        <button style="background-color: transparent; border: none; width: 100%; color: white">1:1 문의</button>
      </RouterLink>
      
      <RouterLink to="/QnA/FAQ" class="askMenu col-4 d-flex" style="text-decoration: none;">
        <button class="askMenuBtn" style="background-color: transparent; border: none; width: 100%;">자주 묻는 질문</button>
      </RouterLink>
    </div>
    <p style="text-align: center; margin-top: 10px; margin-bottom: 30px;">집이지에 궁금하신 점을 문의해주세요 <br>
      문의 내용과 답변은 '1:1 문의 내역'에서 확인하실 수 있습니다.</p>
    <div style="margin-left: 100px; margin-right: 100px;">
      <hr>
      <div class="row me-5">
        <span class="col-2" style="text-align: center;">문의 유형</span>
        <select name="askType" id="askType" class="col-10">
          <option value="select">선택</option>
          <option value="useage">서비스 이용문의</option>
          <option value="fake-room">허위매물 신고</option>
          <option value="complex">단지정보 문의</option>
          <option value="etc">기타 문의</option>
          <option value="failure-error">장애/오류 신고</option>
        </select>
      </div>
      <hr>
      <div class="row me-5">
        <span class="col-2" style="text-align: center;">제목</span>
        <input class="col-10" type="text" name="askTitle">
      </div>
      <hr>
      <div class="row me-5">
        <span class="col-2" style="line-height: 300px; height: 100%; text-align: center">문의 내용</span>
        <textarea class="col-10" type="text" name="askContent" style="height: 20rem; resize: none;"></textarea>
      </div>
      <hr>
      <div class="row me-5">
        <span class="col-2" style="text-align: center;">사진</span>
        <div class="col-10">
          <div name="askAttach" style="border: 1px solid gray; height: 106px; width:106px; justify-content: center; align-items: center;" class="d-flex flex-column"><i class="fa-solid fa-camera"></i><span>사진첨부</span></div>
          <div>
            <span>- 사진 용량은 사진 한 장당 10MB가지 등록이 가능합니다.</span><br>
            <span>- 사진은 최대 3장까지 등록이 가능합니다.</span>
          </div>
        </div>
      </div>
      <hr>
      <div class="row d-flex" style=" justify-content: center; align-items: center; ">
        <button type="button" style="background-color: #2F4858; color: white; width: 216px; height: 52px;">문의하기</button>
      </div>
      <div class="row d-flex" style="border: 1px solid gray; margin-left: 150px; margin-right: 150px; margin-top: 20px">
        <p style="text-align: center; margin-top: 10px">고객센터: 02-1899-6840</p><br>
        <span style="text-align: center; margin-bottom: 10px;">평일 10:00 ~ 18:30 (토, 일요일, 공휴일 휴무)</span>
      </div>
      </div>
      <!-- 컴포넌트 삽입 -->
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

.askMenuBtn:hover{
  color: white;
}

</style>
