<template>
  <tr @click="rowData.toggle" style="cursor: pointer" >
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
        <button class="btn btn-outline-danger btn-sm" @click="showModal">삭제</button>
      </div>
    </td>
  </tr>
  <DeleteReportModal id="DeleteReportModal" @close="hideDeleteReportModal" />
  <DeleteQnaModal id="DeleteQnaModal" @close="hideDeleteQnaModal" />
</template>

<script setup>
import { onMounted } from "vue";
import DeleteReportModal from "../views/Mypage/ReportFalseListing/DeleteReportModal.vue"
import DeleteQnaModal from "../views/Mypage/CustomerInquiry/DeleteQnaModal.vue"
import { Modal } from "bootstrap";

const props = defineProps({
  kindOf: String,
  rowData: Object,
});

let deleteReportModal = null;
let deleteQnaModal = null;

onMounted(() => {
  deleteReportModal = new Modal(document.querySelector("#DeleteReportModal"));
  deleteQnaModal = new Modal(document.querySelector("#DeleteQnaModal"));
});

function showModal() {
  if(props.kindOf === "report") {
    deleteReportModal.show();
  } else if (props.kindOf === "qna") {
    deleteQnaModal.show();
  }
}

function hideDeleteReportModal() { 
  deleteReportModal.hide();
}

function hideDeleteQnaModal() { 
  deleteReportModal.hide();
}



</script>
