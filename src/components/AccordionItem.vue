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
          <button class="btn btn-outline-secondary btn-sm me-2" @click="editInquiry">수정</button>
          <button class="btn btn-outline-danger btn-sm" @click="showModal">삭제</button>
        </div>
      </div>
    </td> 
  </tr>
 
  
</template>

<script setup>
import { computed, defineProps, defineEmits } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  kindOf: String,
  rowData: Object,
});

const emit = defineEmits(["edit-inquiry", "show-deleteQnaModal", "show-deleteReportModal"]);


function showModal() {
  if(props.kindOf === "report") {
    emit("show-deleteReportModal"); // ReportFalseListing 부모로 보냄 
  } else if (props.kindOf === "qna") {
    emit("show-deleteQnaModal"); // CustomerInquiry 부모로 보냄 
  }
}


// 마이페이지에서 수정 시 1:1 문의 내역과 허위 내역 신고 구분
function editInquiry() {
  if(props.kindOf === "report") {
    emit("edit-inquiry", props.rowData.item.details); // ReportFalseListing 부모로 보냄 
  } else if (props.kindOf === "qna") {
    router.push({
      path: "/Qna/CustomerInquiryForm",
      query: {id: props.rowData.item.id}
    });
  }
}

</script>
