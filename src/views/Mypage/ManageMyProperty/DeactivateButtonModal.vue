<template>
    <MyPropertyModal @close="closeModal">
      <template #body>
        <div class="modal-body">
          <p class="fw-bold p-4 h-4 text-center">
            {{ property.isActive ? '매물을 비활성화 하시겠습니까?' : '매물을 활성화 하시겠습니까?' }}
            <br />
            이 작업은 되돌릴 수 없습니다.
          </p>
        </div>
      </template>
      <template #footer>
        <div class="modal-footer border border-0 mx-auto mb-3">
          <button
            type="button"
            class="btn btn-outline-light ps-4 pe-4 text-dark border border-secondary fw-bold"
            @click="closeModal"
          >
            취소
          </button>
          <button
            type="button"
            class="btn btn-warning ms-5 ps-4 pe-4 fw-bold"
            @click="confirmAction"
          >
            {{ property.isActive ? '비활성화' : '활성화' }}
          </button>
        </div>
      </template>
    </MyPropertyModal>
  </template>
  
  <script setup>
  import MyPropertyModal from './TransactionCompleted.vue';
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    property: Object
  });
  
  const emit = defineEmits(['update:isActive', 'close']);
  
  function closeModal() {
    emit('close');
  }
  
  function confirmAction() {
    emit('update:isActive', !props.property.isActive);
    closeModal();
  }
  </script>
  
  <style scoped>
  </style>
  