<template>
    <div>
      <h2 style="text-align: center; margin-top: 70px; margin-bottom: 50px; font-weight: bold">공지사항</h2>
    <div style="margin-left: 400px; margin-right: 400px;">
      <hr>
      <div class="row me-5">
        <span class="col-2" style="text-align: center;">카테고리</span>
        <select class="col-10" name="sortType" id="sortType" style="border-radius: 15px; height: 35px; border: 1px solid black; padding-left: 10px; background-color: transparent;">
          <option value="sort1">카테고리</option>
          <option value="sort2">정렬2</option>
          <option value="sort3">정렬3</option>
        </select>
      </div>
      <hr>
      <div class="row me-5">
        <span class="col-2" style="text-align: center;">제목</span>
        <input class="col-10" type="text" name="askTitle">
      </div>
      <hr>
      <div class="row me-5">
        <span class="col-2" style="line-height: 300px; height: 100%; text-align: center">공지 내용</span>
        <textarea class="col-10" type="text" name="askContent" style="height: 20rem; resize: none;"></textarea>
      </div>
      <!-- <hr>
      <div class="row me-5">
        <span class="col-2" style="text-align: center;">사진</span>
        <div class="col-10">
          <div name="askAttach" style="border: 1px solid gray; height: 106px; width:106px; justify-content: center; align-items: center;" class="d-flex flex-column"><i class="fa-solid fa-camera"></i><span>사진첨부</span></div>
          <div>
            <span>- 사진 용량은 사진 한 장당 10MB가지 등록이 가능합니다.</span><br>
            <span>- 사진은 최대 3장까지 등록이 가능합니다.</span>
          </div>
        </div>
      </div> -->
      
      <hr>
      <div class="row d-flex" style=" justify-content: center; align-items: center; ">
        <button type="button" style="background-color: #2F4858; color: white; width: 216px; height: 52px;">공지 하기</button>
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
