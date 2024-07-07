<template>
    <div>
      <AdminHeader>
        <template v-slot:header>
          고객 문의 리스트
        </template>
      </AdminHeader>
      <div  class="w-50 container">
        <select  name="sortType" id="sortType" v-model="filter.type">
          <option value="" disabled hidden selected>문의 유형</option>
          <option value="useage">서비스 이용문의</option>
          <option value="reportFalse">허위매물 신고</option>
          <option value="complex">단지정보 문의</option>
          <option value="etc">기타 문의</option>
          <option value="failure-error">장애/오류 신고</option>
        </select>
      </div>
      <CustomerInquiryList class="mb-5" :question="page.question"/>

      <Pagination
      v-if="page.pager.totalPageNo != 0"
      :currentPage="currentPage"
      :totalPages="totalPages"
      page="adminCustomerInquiry"
      @update:currentPage="handlePageChange"
    />
    <div v-else class="w-50 container">
      <div class="text-center mt-5">
        검색 결과가 없습니다.
      </div>
    </div>
    </div>
  </template>
    
  <script setup>
  import CustomerInquiryList from "./CustomerInquiryList";
  import AdminHeader from "@/components/AdminHeader";
  import Pagination from "@/components/Pagination";
  import qnaAPI from "@/apis/qnaAPI";
  import { ref, watch } from "vue";
  import { useRoute, useRouter } from "vue-router";

  const router = useRouter();
  const route = useRoute();
  
  let currentPage = ref(1);
  let totalPages = ref();

  let filter = ref({
  type : ""
});

  // DB에서 가져온 리스트
  const page = ref({
    question : [],
    pager : {}
  });

  function handlePageChange(page){
    currentPage.value = page;
    router.push(`/Adminpage/CusomerInquiry?page=${currentPage.value}`);
  }

  //게시물 가져오는 메소드 정의
  async function getQuestionList(pageNo, type){
      console.log("// 게시물 가져오기 실행");
    try {
      const response = await qnaAPI.getAllQuestionListWithFilter(pageNo, type);
      page.value.question = response.data.question;
      page.value.pager = response.data.pager;
      totalPages.value = page.value.pager.totalPageNo
      console.log("문의",page.value.question[0]);
      console.log("페이저",page.value.pager);
      console.log("총 페이지 수 ",page.value.pager.totalPageNo);
      console.log("현재 페이지", currentPage.value);
    } catch (error) {
      console.log("게시물 가져오기 실패",error);
    }
  }
  // 처음 페이지 들어갈 때 실행
  getQuestionList(currentPage.value, filter.value.type);

  // 페이지가 변하면 게시물 가져오는 메소드 실행하기
  watch(currentPage, () => {
    console.log("페이지가 변하면 게시물 가져오는 메소드 실행");
    getQuestionList(currentPage.value, filter.value.type);
  })

  
  // 필터가 변하면 게시물 가져오는 메소드 실행하기
  watch(filter, () => {
    console.log("필터가 변하면 게시물 가져오는 메소드 실행");
    currentPage.value = 1; // 첫 페이지로 이동
    getQuestionList(currentPage.value, filter.value.type);
  },{deep:true});



  </script>
    
    <style scoped>

      select{
      border-radius: 15px; 
      width: 200px; 
      height: 35px; 
      border: 1px solid black; 
      padding-left: 10px; 
      margin-right: 10px; 
      background-color: transparent;
      margin-top: 30px;
    }


    
    </style>
    