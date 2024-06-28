<template>
    <div>
      <!-- 공용 컴포넌트 -->
      <NoticeHeader>
        <template v-slot:header>
         문의하기
        </template>
      </NoticeHeader>
    
    <p style="text-align: center; margin-top: 60px; margin-bottom: 50px;">맛동산에 궁금하신 점을 문의해주세요 <br>
      문의 내용과 답변은 <span style="color:#FEC83F; font-weight: bold">'1:1 문의 내역'</span>에서 확인하실 수 있습니다.</p>
    <div class="w-50 container">
      <hr>
      <form @submit.prevent="handleSubmit">
      <div class="row me-5">
        <span class="col-2" style="text-align: center;">문의 유형</span>
        <select name="askType" id="askType" class="col-10" v-model="customerInquiry.type">
          <option value="" disabled hidden selected>문의 유형을 선택하세요</option>
          <option value="useage">서비스 이용문의</option>
          <option value="reportFalse">허위매물 신고</option>
          <option value="complex">단지정보 문의</option>
          <option value="etc">기타 문의</option>
          <option value="failure-error">장애/오류 신고</option>
        </select>
      </div>
      <hr>
      <div class="row me-5">
        <span class="col-2" style="text-align: center;">제목</span>
        <input class="col-10" type="text" name="askTitle" v-model="customerInquiry.title">
      </div>
      <hr>
      <div class="row me-5">
        <span class="col-2 mb-3 text-center" >문의 내용</span>
      </div>
      <div class="row me-5 container ms-2">
        <VueQuillEditor class="col " v-model="customerInquiry.content" />
      </div>
      <hr>
      <div class="row me-5">
        <span class="col-2" style="text-align: center;">사진</span>
        <div class="col-10">
          <div>
            <input type="file" id="agentProfile" ref="attach" @change="changeAttach">
            <label class="agentProfile-label border border-1 border-secondary me-5" for="agentProfile">
                <div class="x border border-1 border-secondary"></div>
                <div class="y border border-1 border-secondary"></div>
            </label>
        </div>
          <div style="margin-top: 10px">
            <span>- 사진 용량은 최대 10MB까지 등록이 가능합니다.</span><br>
            <span>- 사진은 1장만 등록 가능합니다.</span>
          </div>
        </div>
      </div>
      <hr>
      <div class="row d-flex" style=" justify-content: center; align-items: center; ">
        <button type="submit" class="btn" style="background-color: #2F4858; color: white; width: 216px; height: 52px; border: none; border-radius: 10px;" :disabled="!checkForm">문의하기</button>
      </div>
      <div class="row d-flex" style="border: 1px solid gray; border-radius: 10px; margin-left: 150px; margin-right: 150px; margin-top: 20px">
        <p style="text-align: center; margin-top: 15px">고객센터: 02-1899-6840</p><br>
        <span style="text-align: center; margin-bottom: 15px;">평일 10:00 ~ 18:30 (토, 일요일, 공휴일 휴무)</span>
      </div>
    </form>
      </div>
      <!-- 컴포넌트 삽입 -->
    </div>

</template>

<script setup>
import NoticeHeader from "@/components/NoticeHeader";
import { ref, computed, createApp, reactive } from "vue";
import { useRoute } from "vue-router";
import VueQuillEditor from "@/components/VueQuillEditor.vue";


const route = useRoute();

const customerInquiry = ref({
  type:"",
  title:"",
  content:"",
  attach:[],
});

const attach = ref(null);

// 문의 타입, 제목, 내용이 없으면 제출버튼 비활성화
const checkForm = computed(() => {
  var result = customerInquiry.value.type !== "" && customerInquiry.value.title !== "" && customerInquiry.value.content !== "";
  console.log('result: ',result);
  return result;
});

function handleSubmit(){
  //multipartFile 분해 해서 문자 데이터랑 같이 담을 formData 객체 생성
  const formData = new FormData();

  // 문자 데이터 formData에 넣기
  formData.append("qcategory", customerInquiry.value.type);
  formData.append("qtitle", customerInquiry.value.title);
  formData.append("qcontent", customerInquiry.value.content);

  const elAttach = attach.value;

  // 파일 데이터 formData에 넣기
  if(elAttach != null){

    for(var i=0; i<attach.value.files.length; i++){
      formData.append("attach", elAttach.files[i]);
      customerInquiry.value.attach.push(elAttach.files[i]);
    }
    console.log("attach에 파일 들어옴", attach.value.files[0].name); // 이름만 추출(바이트 배열은 file객체 자체에 저장되어있음)
  }
  console.log("FileList로 나옴",attach.value.files.length);
  console.log("customerInquiry: ", customerInquiry.value);

  


  // 고객문의 insert 요청
  // ...


  // 요청 성공 후 홈으로 가거나 마이페이지로 가기
  // ...

}

function changeAttach(){

}



</script>

<style scoped>
.agentProfile-label {
        width: 125px;
        height: 125px;
        cursor: pointer;
        display: block;
        border: 1px solid rgb(233, 236, 239);
        position: relative;
    }

#agentProfile {
    display: none;
}
.agentProfile-label .x, .agentProfile-label .y{
  border: 1px solid rgb(222, 226, 230);
  position: absolute;
  top: 50%;
  left: 50%; 
}

.agentProfile-label .x {
    transform: translateX(-50%);
    width: 44px;
  }

  .agentProfile-label .y {
    transform: translateY(-50%);
    height: 44px;
  }

  input, textarea,label, select {
    border-radius: 10px;
    border: transparent;
    border:1px solid black;
    padding: 5px;
  }

 
</style>
