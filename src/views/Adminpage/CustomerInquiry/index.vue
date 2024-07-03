<template>
    <div>
      <AdminHeader>
        <template v-slot:header>
          고객 문의 리스트
        </template>
      </AdminHeader>
      <CustomerInquiryList class="mb-5" :question="page.question"/>
      <Pagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      page="adminCustomerInquiryList"
      @update:currentPage="handlePageChange"
    />
    
    </div>
  </template>
    
  <script setup>
  import CustomerInquiryList from "./CustomerInquiryList";
  import AdminHeader from "@/components/AdminHeader";
  import Pagination from "@/components/Pagination";
  import qnaAPI from "@/apis/qnaAPI";
  import { ref } from "vue";
  import { useRoute, useRouter } from "vue-router";

  const router = useRouter();
  const route = useRoute();
  
  let currentPage = ref(1);
  let totalPages = ref(500);

  // DB에서 가져온 리스트
  const page = ref({
    question : [],
    pager : {}
  });

  function handlePageChange(){
    currentPage.value = page;
    router.push(`/Adminpage/CusomerInquiry=${currentPage.value}`);
  }

  //게시물 가져오는 메소드 정의
  async function getQuestionList(){
      console.log("// 게시물 가져오기 실행");
    try {
      const response = await qnaAPI.getAllQuestionList(currentPage.value);
      page.value.question = response.data.question;
      page.value.pager = response.data.pager;
      console.log("나와라잇",page.value.question);
      console.log("페이저",page.value.pager);
    } catch (error) {
      console.log("게시물 가져오기 실패",error);
    }
  }
  // 처음 페이지 들어갈 때 실행
  getQuestionList();

  </script>
    
    <style scoped>

  

    
    </style>
    