<template>
  <div class="d-flex vh-100 w-100 mx-auto">
    <MyPageSideBar />
    <div class="titleNcontent w-75 mx-auto">
      <div class="d-flex justify-content-between">
        <h4 class="col h4 mt-2 fw-bold">허위매물 신고</h4>
        <div class="align-self-center">
          <select class="form-select" name="filter" id="">
            <option value="날짜순" selected>최신순</option>
            <option value="날짜순">오래된순</option>
          </select>
        </div>
      </div>
      <hr />
      <table class="table mt-2">
        <thead>
          <tr>
            <th scope="col" class="text-center">매물번호</th>
            <th scope="col" class="text-center">대표사진</th>
            <th scope="col" class="text-center">신고 내용</th>
            <th scope="col" class="text-center">신고한 날짜</th>
            <th scope="col" class="text-center">신고 상태</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="report in reports" :key="report.rnumber">
            <th scope="row" class="text-center align-middle">
              {{ report.rpnumber }}
            </th>
            <td class="align-middle text-center">
              <img v-if="pthumbnails[report.rpnumber] != null" :src="pthumbnails[report.rpnumber]" width="150" alt="매물 사진" />
            </td>
            <td class="align-middle text-muted">
              <div class="fw-bold">{{ report.rcontent }}</div>
            </td>
            <td class="fw-bold align-middle text-center"> {{ report.formattedDate }}</td>
            <td class="fw-bold align-middle">
              <div class="d-flex flex-column">
                <RouterLink class="routerLink " :to="{path:'/PropertyForm', query:{pnumber:report.rPnumber}}">
                <button
                  class="btn btn-dark btn-sm w-100 fw-bold mb-3">
                  자세히 보기
                </button> </RouterLink>
                <button
                  class=" btn btn-sm fw-bold btn-danger"
                  @click="showDeletePropertyModal(report.rPnumber)">
                  삭제
                </button>                
              </div>
            </td>
          </tr>
          <!-- 페이지네이션 -->
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav> 
        </tbody>
      </table>
    </div>
  </div>

</template>

<script setup>
import MyPageSideBar from "@/components/MyPageSidebar.vue";
import { ref, onMounted } from "vue";
import propertyAPI from "@/apis/propertyAPI";
import axios from "axios";
import dayjs from "dayjs";

const reports = ref([]);
const pthumbnails = ref({});

// 허위 매물 리스트
async function getUserReportList() {
  try {
    const response = await propertyAPI.getReportList();
    reports.value = response.data;
console.log(reports.value)
    reports.value.forEach(report => {
        console.log("report : " + report.rpnumber);
        getPthumbnail(report.rpnumber);
        report.formattedDate = dayjs(report.rdate).format('YYYY-MM-DD')
    });
  } catch (error) {
    console.log(error);
  }
}

// 사진 출력
const getPthumbnail = async (pnumber) => {
  try {
    const response = await propertyAPI.propertyAttachDownload(pnumber);
    pthumbnails.value[pnumber] = URL.createObjectURL(response.data);
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getUserReportList();
});


const deleteProperty = async (selectedPnumber) => {
  try {
    await propertyAPI.deleteProperty(selectedPnumber);
    await getUserReportList(); // 삭제 후 리스트 갱신
  } catch (error) {
    console.log(error);
  }
};


</script>

<style scoped>

.titleNcontent {
  width: 80%;
  padding: 20px;
}

.routerLink{
  text-decoration: none; /* 밑줄 제거 */
  color: inherit; /* 기본 텍스트 색상 상속 */
  background: none; /* 배경 제거 */
  border: none; /* 테두리 제거 */
  cursor: pointer; /* 커서 스타일 설정 */
}
</style>
