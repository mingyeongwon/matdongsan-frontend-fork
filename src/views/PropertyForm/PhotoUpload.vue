<template>
    <div class="mt-5">
      <div class="d-flex">
        <h4 class="col">사진 등록</h4>
        <span class="text-danger fw-bold align-self-center">사전 등록전 반드시 알려주세요!</span>
      </div>
      <hr />
      <div>
        <span class="me-5 col-2 align-self-center">일반 사진 *</span>
        <input
          class="mt-3 form-control border border-secondary border-1 w-50"
          type="file"
          id="formFileMultiple"
          multiple
          @change="handleFileUpload"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  const emit = defineEmits(['fileUpload']);
  
  function handleFileUpload(event) {
    emit('fileUpload', event.target.files);
  }
  </script>
  