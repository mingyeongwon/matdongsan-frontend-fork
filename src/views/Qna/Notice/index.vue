<template>
  <div>
    <NoticeHeader>
      <template v-slot:header> 공지사항 </template>
    </NoticeHeader>
    <NoticeListFilter :noticeFilter="noticeFilter" />
    <NoticeList :noticeList="noticeList" />
    <Pagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      page="notice"
      @update:currentPage="handlePageChange"
    />
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import NoticeList from "./NoticeList";
import NoticeListFilter from "./NoticeListFilter";
import NoticeHeader from "@/components/NoticeHeader";
import Pagination from "@/components/Pagination";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();


// 현재 페이지 변경 핸들러
const handlePageChange = (page) => {
  currentPage.value = page;
  router.push(`/QNA/Notice?pageNo=${currentPage.value}`);
};

// 필터 변경 핸들러
const handleFilterChange = (newFilter) => {
  noticeFilter.value = newFilter;
  currentPage.value = 1; // 필터 변경 시 첫 페이지로 이동
};

// 공지사항 리스트 (예제 데이터)
let noticeList = ref([
  { title: "맛동산 개인정보 처리방침 개정 안내1", date: "2024-06-01" },
  { title: "맛동산 개인정보 처리방침 개정 안내2", date: "2024-06-01" },
  { title: "맛동산 개인정보 처리방침 개정 안내3", date: "2024-06-01" },
  { title: "맛동산 개인정보 처리방침 개정 안내4", date: "2024-06-01" },
  { title: "맛동산 개인정보 처리방침 개정 안내5", date: "2024-06-01" },
  { title: "맛동산 개인정보 처리방침 개정 안내6", date: "2024-06-01" },
  { title: "맛동산 개인정보 처리방침 개정 안내7", date: "2024-06-01" },
  { title: "맛동산 개인정보 처리방침 개정 안내1", date: "2024-06-01" },
  { title: "맛동산 개인정보 처리방침 개정 안내2", date: "2024-06-01" },
  { title: "맛동산 개인정보 처리방침 개정 안내3", date: "2024-06-01" },
  { title: "맛동산 개인정보 처리방침 개정 안내4", date: "2024-06-01" },
  { title: "맛동산 개인정보 처리방침 개정 안내5", date: "2024-06-01" },
  { title: "맛동산 개인정보 처리방침 개정 안내6", date: "2024-06-01" },
  { title: "맛동산 개인정보 처리방침 개정 안내7", date: "2024-06-01" },
  { title: "맛동산 개인정보 처리방침 개정 안내1", date: "2024-06-01" },
  { title: "맛동산 개인정보 처리방침 개정 안내2", date: "2024-06-01" },
  { title: "맛동산 개인정보 처리방침 개정 안내3", date: "2024-06-01" },
  { title: "맛동산 개인정보 처리방침 개정 안내4", date: "2024-06-01" },
  { title: "맛동산 개인정보 처리방침 개정 안내5", date: "2024-06-01" },
  { title: "맛동산 개인정보 처리방침 개정 안내6", date: "2024-06-01" },
  { title: "맛동산 개인정보 처리방침 개정 안내7", date: "2024-06-01" },
]);

const currentPage = ref(1);
const itemsPerPage = 7;

const totalPages = computed(() =>
  Math.ceil(noticeList.value.length / itemsPerPage)
);

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return noticeList.value.slice(start, end);
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
  },
  { deep: true }
);
</script>

<style scoped></style>
