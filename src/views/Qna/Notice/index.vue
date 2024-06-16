<template>
    <div>
      <NoticeHeader>
        <template v-slot:header>
          공지사항
        </template>
      </NoticeHeader>
      <NoticeListFilter/>
      <NoticeList/>
    
    </div>
  </template>
    
    <script setup>
    import NoticeList from "./NoticeList";
    import NoticeListFilter from "./NoticeListFilter";
    import NoticeHeader from "@/components/NoticeHeader";
    import Pagination from "@/components/CommonProperty/Pagination"
    </script>
    
    <style scoped>

  

    
    </style>
    