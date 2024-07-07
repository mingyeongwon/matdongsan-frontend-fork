<template>
  <div>
    <NoticeHeader>
      <template v-slot:header> 공지사항 </template>
    </NoticeHeader>
    <NoticeListFilter :noticeFilter="noticeFilter" />
    <NoticeList :noticeList="page.notice" />
    <Pagination
      v-if="page.pager.totalPageNo != 0"
      :currentPage="currentPage"
      :totalPages="totalPageNo"
      page="notice"
      @update:currentPage="handlePageChange"
    />
    <div v-else class="w-50 container">
        <div class="text-center">
          검색 결과가 없습니다.
        </div>
      </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import NoticeList from "./NoticeList";
import NoticeListFilter from "./NoticeListFilter";
import NoticeHeader from "@/components/NoticeHeader";
import Pagination from "@/components/Pagination";
import { useRoute, useRouter } from "vue-router";
import qnaAPI from "@/apis/qnaAPI";

const router = useRouter();
const route = useRoute();

let currentPage = ref(1);
let totalPageNo = ref();

// DB에서 가져온 리스트
const page = ref({
    notice : [],
    pager : {}
  });

// 공지사항 필터 초기 값
let noticeFilter = ref({
  searchKeyword: "",
  sort: "desc",
});

watch(
  noticeFilter,
  (newNoticeFilter) => {
    // noticeFilter 변경 시 필요한 동작 수행
    console.log("필터 변경:", noticeFilter.value);
    currentPage.value = 1; // 첫 페이지로 이동
    getAllNoticeList(currentPage.value, noticeFilter.value.searchKeyword, noticeFilter.value.sort);
    // 필터 변경 시 리스트 다시 요청
  },
  { deep: true }
);

// 현재 페이지 변경 핸들러
const handlePageChange = (page) => {
  currentPage.value = page;
  router.push(`/QNA/Notice?pageNo=${currentPage.value}`);
  // 검색어랑 정렬 값도 보내야 하나?
};

  // 페이지가 변하면 게시물 가져오는 메소드 실행하기
  watch(currentPage, () => {
    console.log("페이지가 변하면 게시물 가져오는 메소드 실행");
    getAllNoticeList(currentPage.value, noticeFilter.value.searchKeyword, noticeFilter.value.sort);
  })


// 필터 변경 핸들러??필요한가..
// const handleFilterChange = (newFilter) => {
//   noticeFilter.value = newFilter;
//   currentPage.value = 1; // 필터 변경 시 첫 페이지로 이동
// };

//리스트 가져오는 메소드 정의
async function getAllNoticeList(pageNo, searchKeyword, sort){
  try {
    const response = await qnaAPI.getNoticeList(pageNo, searchKeyword, sort);
    page.value.notice = response.data.notice;
    page.value.pager = response.data.pager;
    totalPageNo.value = page.value.pager.totalPageNo;
    console.log("공지 첫번째: ",page.value.notice[0]);
  } catch (error) {
    console.log("공지 리스트 안 가져옴",error);
  }
}

// 리스트 가져오기
getAllNoticeList(currentPage.value, noticeFilter.value.searchKeyword, noticeFilter.value.sort);


</script>

<style scoped></style>
