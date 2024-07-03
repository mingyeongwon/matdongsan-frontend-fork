<template>
    <!-- 리스트(table) -->
     <div class="w-50 container">
    <table style="width: 100%; margin-top: 20px; ">
        <thead class="row pt-2">
        <!-- <th>카테고리</th> -->
        <th class="col-6" >제목</th><th class="col-4">날짜</th><th class="col-2">답변 여부</th>
        </thead>
        <tbody>
            <tr class="row" v-for="question in props.question" :key="question.qnumber">
                    
                <!-- <td style="text-align: center;">[공지사항]</td> -->
                <td class="col-6"><RouterLink class="routerLink" :to="`/Adminpage/CusomerInquiryDetail=${question.qnumber}`">{{ question.qtitle }}</RouterLink></td>
            
                <td class="col-4" style="text-align: center;">{{ formatDate(question.qdate) }}</td>
                <td style="text-align: center;" :class="question.qisAnswer == 1 ? '' : 'text-danger'" class="answer col-2">{{ hasAnswer(question.qisAnswer) }}</td>

            </tr>
        
        </tbody>
    </table>

</div>
</template>

<script setup>

// 날짜 형식 맞추기
function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 필요
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// 답변 여부 반환
function hasAnswer(isAnswer){
  if(isAnswer == 1 ){
    return "답변 완료";
  } else {
    return "답변 미완료";
  }
}

const props = defineProps({
    question: Array,
});



// let noticeList = ref([
//     { title: "매물 등록권 3개를 구매하면 3개의 매물을 한번에 등록해야 하나요?", date: "2024-06-01", status:"답변 완료" },
//     { title: "매물 등록권 3개를 구매하면 3개의 매물을 한번에 등록해야 하나요?", date: "2024-06-01", status:"답변 완료" },
//     { title: "매물 등록권 3개를 구매하면 3개의 매물을 한번에 등록해야 하나요?", date: "2024-06-01", status:"답변 완료" },
//     { title: "매물 등록권 3개를 구매하면 3개의 매물을 한번에 등록해야 하나요?", date: "2024-06-01", status:"답변 완료" },
//     { title: "매물 등록권 3개를 구매하면 3개의 매물을 한번에 등록해야 하나요?", date: "2024-06-01", status:"답변 완료" },
//     { title: "매물 등록권 3개를 구매하면 3개의 매물을 한번에 등록해야 하나요?", date: "2024-06-01", status:"답변 완료" },
//     { title: "매물 등록권 3개를 구매하면 3개의 매물을 한번에 등록해야 하나요?", date: "2024-06-01", status:"답변 완료" },
// ]);


</script>

<style scoped>
    th{
      text-align: center;
      padding-top: 15px;
      border-top: 2px solid black;
      border-bottom: 1px solid grey;
      height: 60px;
    }
    td{
      height: 60px;
      border-bottom: 1px solid gray;
      padding-top: 15px;

    }
    .routerLink{
        text-decoration: none; /* 밑줄 제거 */
        color: inherit; /* 기본 텍스트 색상 상속 */
        background: none; /* 배경 제거 */
        border: none; /* 테두리 제거 */
        cursor: pointer; /* 커서 스타일 설정 */
    }


</style>
