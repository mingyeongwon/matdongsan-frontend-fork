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
            <th scope="col" class="text-center">가격 / 제목</th>
            <th scope="col" class="text-center">신고한 날짜</th>
            <th scope="col" class="text-center">신고 내용</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="report in reports" :key="report.rnumber">
            <th scope="row" class="text-center align-middle">
              {{ report.rpnumber }}
            </th>
            <td class="align-middle text-center">
              <img v-if="pthumbnails[report.rpnumber] != null" :src="pthumbnails[report.rpnumber]" 
              width="150" height="150" class="rounded-1" alt="매물 사진" />
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
                  @click="openDeleteReportModal(report.rpnumber)">
                  삭제
                </button>                
              </div>
            </td>
          </tr> 
        </tbody>
      </table>
      <Pagination
        class="mt-5"
        :currentPage="pager.pageNo"
        :totalPages="pager.totalPageNo"
        :maxVisiblePages="4"
        @update:currentPage="handlePageChange"
      />        
    </div>
  </div>

  <!-- 모달 -->
  <div class="modal" tabindex="-1" id="DeleteReportModal" >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <slot name="body">
            <div class="modal-body">
              <p class="fw-bold p-4 h-4 text-center">
                삭제 하시겠습니까? <br />
                삭제 후에 수정 불가합니다.
              </p>
            </div>
          </slot>
          <slot name="footer">
            <div class="modal-footer border border-0 mx-auto mb-3">
              <button
                type="button"
                class="btn btn-outline-light ps-4 pe-4 text-dark border border-secondary fw-bold"
                data-bs-dismiss="modal">
                돌아가기
              </button>
              <button
                type="button"
                class="btn btn-danger ms-5 ps-4 pe-4 fw-bold"
                data-bs-dismiss="modal"
                @click="confirmDeleteReport">
                신고 삭제하기
              </button>
            </div>
          </slot>
        </div>
      </div>
    </div>

</template>

<script setup>
import MyPageSideBar from "@/components/MyPageSidebar.vue";
import { ref, onMounted } from "vue";
import propertyAPI from "@/apis/propertyAPI";
import axios from "axios";
import dayjs from "dayjs";
import { Modal } from "bootstrap";
import Pagination from "@/components/Pagination.vue";

const reports = ref([]);
const pthumbnails = ref({});
const selectedRpnumber = ref(0);
const currentPage = ref(0);
const pager = ref({});

const handlePageChange = (page) => {
  currentPage.value = page;
  getUserReportList(page);
};

// 모달 열기
function openDeleteReportModal(pnumber) {
  const deleteReportModal = new Modal(document.getElementById("DeleteReportModal"));
  deleteReportModal.show();
  selectedRpnumber.value = pnumber;
  console.log("selectedRpnumber : " + selectedRpnumber.value);
}

// 허위 매물 리스트
async function getUserReportList(pageNo = 1) {
  try {
    const response = await propertyAPI.getReportList(pageNo);
    reports.value = response.data.userReportList;
    reports.value.forEach(report => {
        getPthumbnail(report.rpnumber);
        report.formattedDate = dayjs(report.rdate).format('YYYY-MM-DD');
    });
    pager.value = response.data.pager;
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

// 모달에서 삭제 버튼 클릭 시 실행
const confirmDeleteReport = () => {
    console.log("received selectedRpnumber : " + selectedRpnumber.value);
    deleteReportProperty(selectedRpnumber.value);
    // 모달 닫기
    const deleteReportModal = Modal.getInstance(document.getElementById("DeleteReportModal"));
    deleteReportModal.hide();
}

// 허위 신고 삭제
const deleteReportProperty = async (pnumber) => {
  try {
    await propertyAPI.deletePropertyReport(pnumber);
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
