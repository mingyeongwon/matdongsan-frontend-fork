<template>
<div>메인서비스 - 매물</div>
<button class="btn btn-info btn-sm mt-2" @click="showReportFalseModal">
             허위매물 신고하기
            </button>
<ReportFalseModal id="ReportFalseModal" @close="hideReportFalseModal"/>
</template>

<script setup>
import ReportFalseModal from "@/components/ReportFalseModal.vue"
import { onMounted } from "vue";
import { Modal } from "bootstrap";

let reportFalseModal = null;

onMounted(() => {
    reportFalseModal = new Modal(document.querySelector("#ReportFalseModal"));
});


function showReportFalseModal() {
    reportFalseModal.show();
}

function hideReportFalseModal() {
    reportFalseModal.hide();
}
</script>

<style scoped>
</style>
