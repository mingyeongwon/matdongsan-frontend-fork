<template>
  <div>
    <p>문의하신 내용에 대한 수정 및 삭제는 답변 등록 이전에 가능합니다.</p>
    <p>
      고객센터 답변 가능 시간 : 평일 10:00 ~ 18:30 (토, 일요일, 공휴일 휴무)
    </p>
  </div>
  <div>
    <div v-if="myQnaBoards.length != 0">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">문의유형</th>
            <th scope="col">제목</th>
            <th scope="col">등록일</th>
            <th scope="col">답변상태</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in myQnaBoards" :key="item.qno">
            <td scope="row">{{ item.qtype }}</td>
            <td>{{ item.qtitle }}</td>
            <td>{{ item.qdate }}</td>
            <td>{{ item.qstatus }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>최근 6개월 간 문의하신 내역이 없습니다.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const myQnaBoards = ref([
  { qno: 1, qtype: "기타문의", qtitle: "제목1",  qdate: "2024-06-04", qstatus: "답변예정" },
  { qno: 2, qtype: "단지정보 문의",qtitle: "제목2",  qdate: "2023-08-08", qstatus: "답변완료" },
  { qno: 3, qtype: "서비스 이용문의", qtitle: "제목3",  qdate: "2021-08-09", qstatus: "답변예정" },
]);

</script>

<style scoped>
p {
  margin: 0px;
}
</style>
