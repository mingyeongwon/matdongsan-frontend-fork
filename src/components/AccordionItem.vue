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
        <div v-if="!(rowData.item.status == '답변 완료' || rowData.item.status == '처리완료')">
          <button class="btn btn-outline-secondary btn-sm me-2" @click="editInquiry(rowData.item)">수정</button>
          <button class="btn btn-outline-danger btn-sm" @click="showModal">삭제</button>
        </div>
      </div>
    </td> 
  </tr>
  <DeleteReportModal id="DeleteReportModal" @close="hideDeleteReportModal" />
  <DeleteQnaModal id="DeleteQnaModal" @close="hideDeleteQnaModal" />
  <ReportFalseModal id="ReportFalseModal" @close="hideReportFalseModal" :reportDetail="rowData.item.details" />
</template>

<script setup>
import { computed, defineProps, onMounted } from "vue";
import { useRouter } from 'vue-router';
import { Modal } from "bootstrap";
import DeleteReportModal from "../views/Mypage/ReportFalseListing/DeleteReportModal.vue"
import DeleteQnaModal from "../views/Mypage/CustomerInquiry/DeleteQnaModal.vue"
import ReportFalseModal from "./ReportFalseModal.vue";
const router = useRouter();

const props = defineProps({
  kindOf: String,
  rowData: Object,
});



let deleteReportModal = null;
let deleteQnaModal = null;
let reportFalseModal = null;


onMounted(() => {
  deleteReportModal = new Modal(document.querySelector("#DeleteReportModal"));
  deleteQnaModal = new Modal(document.querySelector("#DeleteQnaModal"));
  reportFalseModal = new Modal(document.querySelector("#ReportFalseModal"));
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

function hideReportFalseModal() { 
  reportFalseModal.hide();
}

// 마이페이지에서 수정 시 1:1 문의 내역과 허위 내역 신고 구분
function editInquiry(data) {

  if(props.kindOf === "report") {
    reportFalseModal.show();
  } else if (props.kindOf === "qna") {
    router.push({
      path: "/Qna/CustomerInquiryForm",
      query: {id: props.rowData.item.id}
    });
  }
}


</script>
