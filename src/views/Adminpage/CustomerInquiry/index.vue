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
      page="adminCustomerInquiry"
      @update:currentPage="handlePageChange"
    />
    
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
  async function getQuestionList(){
      console.log("// 게시물 가져오기 실행");
    try {
      const response = await qnaAPI.getAllQuestionList(currentPage.value);
      page.value.question = response.data.question;
      page.value.pager = response.data.pager;
      totalPages.value = page.value.pager.totalPageNo
      console.log("문의 나와",page.value.question[0]);
      console.log("페이저",page.value.pager);
      console.log("총 페이지 수 ",page.value.pager.totalPageNo);
      console.log("현재 페이지", currentPage.value);
    } catch (error) {
      console.log("게시물 가져오기 실패",error);
    }
  }
  // 처음 페이지 들어갈 때 실행
  getQuestionList();

  // 페이지가 변하면 게시물 가져오는 메소드 실행하기
  watch(currentPage, () => {
    console.log("와치와치");
    getQuestionList();
  })

  </script>
    
    <style scoped>

  

    
    </style>
    