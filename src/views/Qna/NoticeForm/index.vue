<template>
    <div>
      <h2 style="text-align: center; margin-top: 70px; margin-bottom: 50px; font-weight: bold">공지사항</h2>
    <div class="w-50 container">
      <!-- <hr>
      <div class="row me-5">
        <span class="col-2" style="text-align: center;">카테고리</span>
        <select class="col-10" name="sortType" id="sortType" style="border-radius: 15px; height: 35px; border: 1px solid black; padding-left: 10px; background-color: transparent;">
          <option value="sort1">카테고리</option>
          <option value="sort2">정렬2</option>
          <option value="sort3">정렬3</option>
        </select>
      </div> -->
      <hr>
      <form @submit.prevent="handleSubmit">
      <div class="row me-5">
        <span class="col-2" style="text-align: center;">제목</span>
        <input class="col-10" type="text" name="askTitle" v-model="notice.title"> 
      </div>
      <hr>
      <div class="row me-5">
        <span class="col-2" style="line-height: 300px; height: 100%; text-align: center">공지 내용</span>
        <textarea class="col-10" type="text" name="askContent" style="height: 20rem; resize: none;" v-model="notice.content"></textarea>
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
        <button type="submit" style="background-color: #2F4858; color: white; width: 216px; height: 52px;" :disabled="!checkForm">공지 하기</button>
      </div>
    </form>
      </div>
      <!-- 컴포넌트 삽입 -->
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

const notice = ref({
  title:"",
  content:"",
});

function handleSubmit(){
  console.log(JSON.parse(JSON.stringify(notice.value)));
}

// 제목, 내용이 없으면 제출버튼 비활성화
const checkForm = computed(() => {
  var result = notice.value.title !== "" && notice.value.content !== "";
  console.log('result: ',result);
  return result;
});

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

button, input, textarea{
  border: transparent;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px;
}

</style>
