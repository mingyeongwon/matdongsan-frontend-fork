<template>
  <div>
    <NoticeHeader>
      <template v-slot:header>
        공지사항
      </template>
    </NoticeHeader>
    <NoticeListFilter :noticeFilter="noticeFilter"/>
    <NoticeList :noticeList="noticeList"/>
    <Pagination :pageNo = "pageNo"/>
  
  </div>
</template>
  
<script setup>
import { ref, toRefs, watch } from "vue";
import NoticeList from "./NoticeList";
import NoticeListFilter from "./NoticeListFilter";
import NoticeHeader from "@/components/NoticeHeader";
import Pagination from "@/components/Pagination"

// 검색어와 필터를 통해 리스트를 조회하고 불러와서 NoticeList 컴포넌트에 전달?

// 리스트 가져온거 공지사항 리스트에 보내기
let noticeList = ref([
  { title: "맛동산 개인정보 처리방침 개정 안내", date: "2024-06-01" },
  { title: "맛동산 개인정보 처리방침 개정 안내", date: "2024-06-01" },
  { title: "맛동산 개인정보 처리방침 개정 안내", date: "2024-06-01" },
  { title: "맛동산 개인정보 처리방침 개정 안내", date: "2024-06-01" },
  { title: "맛동산 개인정보 처리방침 개정 안내", date: "2024-06-01" },
  { title: "맛동산 개인정보 처리방침 개정 안내", date: "2024-06-01" },
  { title: "맛동산 개인정보 처리방침 개정 안내", date: "2024-06-01" },
]);

// 공지사항 필터에서 가져오기
let noticeFilter = ref({
  searchKeyword:"",
  sort:"desc"
})

// 페이지네이션 컴포넌트에서 가져오기
let pageNo = ref(1);

watch(noticeFilter, (newNoticeFilter, oldNoticeFilter) => {
  // notice 필터의 속성 값이 바뀌면 바뀔 때마다 리스트 불러와야 함
  // 리스트를 불러오려면 페이저가 있어야 함... pageNo받아와서 같이 넘겨야 한다.
  console.log(noticeFilter.value);

}, {deep : true});




</script>

<style scoped>


</style>
    