<template>
  <tr @click="rowData.toggle" style="cursor: pointer">
    <td>{{ rowData.index + 1 }}</td>
    <td class="fw-bold">{{ rowData.item.title }}</td>
    <td class="text-muted">{{ rowData.item.date }}</td>
    <td
      class="text-muted"
      v-if="
        rowData.item.status == '답변 완료' || rowData.item.status == '처리완료'
      "
    >
      <small class="bg-success p-2 rounded fw-bold text-light">{{
        rowData.item.status
      }}</small>
    </td>
    <td class="text-muted" v-else>
      <small class="bg-warning p-2 rounded text-dark fw-bold">{{
        rowData.item.status
      }}</small>
    </td>
  </tr>
  <tr v-if="rowData.isOpen">
    <td colspan="4">
      <div class="p-3 text-start ps-5">
        <p class="fw-bold">내용:</p>
        <p class="text-muted">{{ rowData.item.details }}</p>
        <button class="btn btn-outline-secondary btn-sm me-2">수정</button>
        <button class="btn btn-outline-danger btn-sm">삭제</button>
      </div>
    </td>
  </tr>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  rowData: Object,
});
</script>
