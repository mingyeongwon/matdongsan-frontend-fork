<template>
<div>
    <!-- <div class="row d-flex me-4" style=" justify-content: end; align-items: center; ">
    <button type="button btn-sm" @click="goBack">뒤로 가기</button>
    </div> -->
    <form @submit.prevent="hanndleSubmit">
      <div class="row me-5">
        <span class="col-2 mb-3 text-center mt-3" >답변</span>
        <div class="col-10">
        <VueQuillEditor class=" " v-model="answer" />
      </div>
      </div>
      
      
      <div class="row d-flex me-4" style=" justify-content: center; align-items: end; ">
        <button class="mt-3" type="submit">답변 완료</button>
      </div>
      <div class="row me-5">
        <span class="mt-3 ms-2 text-center" >{{errorMessage}}</span>
      </div>
    </form>
</div>
</template>

<script setup>
import { computed, ref } from 'vue';
import VueQuillEditor from "@/components/VueQuillEditor.vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const answer = ref("");

const checkForm = computed(() => {
var result = answer.value !== ""
return result;
});

const errorMessage = ref("");

function goBack(){
    router.back();
}

async function hanndleSubmit(){
if(checkForm.value){
  // 답변 생성하는 통신 코드...
  
  // 완료 하면 뒤로가기
  goBack();

} else {
  errorMessage.value = "답변을 입력하세요"
}

}
</script>

<style scoped>

button {
background-color: #2F4858;
color: white;
border: transparent;
border-radius: 10px;
padding: 5px;
width: 10%;
/* margin-right: 100px; */
height: 40px;
font-size: small
}

input {
border: 1px solid lightgray;
height: 120px;
border-radius: 10px;
}
</style>
