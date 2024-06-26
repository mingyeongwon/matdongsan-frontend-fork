<template>
    <div>
      <AdminHeader>
        <template v-slot:header>
          허위매물 신고 리스트
        </template>
      </AdminHeader>
      <ReportFalseList/>
      <Pagination/>
    
    </div>
  </template>
    
    <script setup>
    import ReportFalseList from "./ReportFalseList";
    import AdminHeader from "@/components/AdminHeader";
    import Pagination from "@/components/Pagination";
    </script>
    
    <style scoped>

  

    
    </style>
    