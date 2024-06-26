<template>
    <div>
      <AdminHeader>
        <template v-slot:header>
          고객 문의 리스트
        </template>
      </AdminHeader>
      <CustomerInquiryList/>
      <Pagination/>
    
    </div>
  </template>
    
    <script setup>
    import CustomerInquiryList from "./CustomerInquiryList";
    import AdminHeader from "@/components/AdminHeader";
    import Pagination from "@/components/Pagination";
    </script>
    
    <style scoped>

  

    
    </style>
    