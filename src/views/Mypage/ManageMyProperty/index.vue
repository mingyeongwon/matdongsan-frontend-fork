<template>
  <div class="d-flex vh-100 w-100 mx-auto">
    <MyPageSideBar />
    <div class="titleNcontent w-75 mx-auto">
      <div class="d-flex justify-content-between">
        <h4 class="col h4 mt-2 fw-bold">매물 관리</h4>
        <div class="align-self-center">
          <select class="form-select" name="filter" id="">
            <option value="날짜순" selected>최신순</option>
            <option value="날짜순">오래된순</option>
            <option value="날짜순">거래완료</option>
            <option value="날짜순">거래중</option>
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
            <th scope="col" class="text-center">등록한 날짜</th>
            <th scope="col" class="text-center">매물 상태</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="property in properties" :key="property.pnumber">
            <th scope="row" class="text-center align-middle">
              {{ property.pnumber }}
            </th>
            <td class="align-middle text-center">
              <img v-if="pthumbnails[property.pnumber] != null" :src="pthumbnails[property.pnumber]" width="150" alt="매물 사진" />
            </td>
            <td class="align-middle text-muted text-center">
              <div class="fw-bold">{{ property.pcategory }} {{ property.pdeposite }}만원
                <span v-if="property.pcategory == '월세'"> / {{ property.prentalfee }}만원</span>
              </div>
              <small>
                {{ property.pfloortype }},{{ property.psize }}m<sup>2</sup>,관리비 {{ property.pmaintenance }}만원
              </small>
              <div><small>{{ property.ptitle }}</small></div>
            </td>
            <td class="fw-bold align-middle text-center"> {{ property.formattedDate }}</td>
            <td class="fw-bold align-middle">
              <div class="d-flex flex-column">
                <RouterLink class="routerLink " :to="{path:`/PropertyForm/${property.pnumber}`}">
                <button
                  class="btn btn-warning btn-sm w-100 fw-bold mb-3"
                  v-if="property.pstatus !== '거래완료'"
                >
                <!-- 거래 완료 버튼 누르면 버튼 안 보임 -->
                <!--버튼 누르면 id값 가지고 수정페이지로 가기-->
                  수정
                </button> </RouterLink>
                <button
                  class="soldOutBtn btn btn-sm fw-bold mb-3"
                  @click="showTransactionModal(property.pnumber)"
                  :disabled="property.pstatus === '거래완료'"
                >
                  <!-- 거래 완료 버튼 누르면 버튼 비활성화 -->
                  거래완료
                </button>
                <button
                  :class="[
                    'btn btn-sm fw-bold mb-3',
                    property.isActive ? 'btn-danger' : 'btn-success',
                  ]"
                  @click="toggleActive(property)"
                  v-if="property.pstatus !== '거래완료'"
                >
                  {{ property.isActive ? "비활성화" : "활성화" }}
                </button>
                <button
                  class="btn btn-sm btn-outline-secondary fw-bold"
                  @click="showDeletePropertyModal(property.pnumber)">
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
  <TransactionModal
    id="TransactionModal"
    @close="hideTransactionModal"
    :pnumber = "selectedPnumber"
    @change-property-status="changePropertyStatus"
  />
  <DeletePropertyModal
    id="DeletePropertyModal"
    :pnumber = "selectedPnumber"
    @close="hideDeletePropertyModal"
    @delete-property="deleteProperty" />

</template>

<script setup>
import MyPageSideBar from "@/components/MyPageSidebar.vue";
import TransactionModal from "./TransactionCompleted.vue";
import DeletePropertyModal from "./DeletePropertyModal.vue";
import { onMounted, ref } from "vue";
import { Modal } from "bootstrap";
import propertyAPI from "@/apis/propertyAPI";
import axios from "axios";
import dayjs from "dayjs";


let transactionModal = null;
let deletePropertyModal = null;
let idNumber = ref(0);
const properties = ref([]);
const pthumbnails = ref({});
const selectedPnumber = ref(0); // 모달에 보내는 pnumber
const pstatus = ref("");

onMounted(() => {
  transactionModal = new Modal(document.querySelector("#TransactionModal"));
  deletePropertyModal = new Modal(document.querySelector("#DeletePropertyModal"));
});

function toggleActive(property) {
  property.isActive = !property.isActive;
}


const property = ref([
  { id: 1, isActive: false,checkTransactionCompletedData:true },
  { id: 2, isActive: false,checkTransactionCompletedData:true },
  // 추가 매물 데이터
]);


// 거래완료 모달 열기
function showTransactionModal(pnumber) {
  selectedPnumber.value = pnumber;
  pstatus.value = "거래완료";
  transactionModal.show();
}

// 거래완료 모달 닫기
function hideTransactionModal() { // 거래 완료 확인 모달에서 거래 완료 버튼 클릭 시 실행되는 함수
  transactionModal.hide();
}

// 삭제 모달
function showDeletePropertyModal(pnumber) {
  selectedPnumber.value = pnumber;
  deletePropertyModal.show();
}

function hideDeletePropertyModal() { 
  deletePropertyModal.hide();
}

//유저 매물 리스트 목록을 가져오는 메소드 정의
async function getUserPropertyList() {
  try {
    const response = await propertyAPI.getUserPropertyList();
    properties.value = response.data;
    properties.value.forEach(property => {
      if (property.pthumbnailoname != null) {
        getPthumbnail(property.pnumber);
      }
    });
    properties.value.forEach(property => {
      property.formattedDate = dayjs(property.pdate).format('YYYY-MM-DD')
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
  getUserPropertyList();
});


const deleteProperty = async () => {
  try {
    await propertyAPI.deleteProperty(selectedPnumber.value);
    await getUserPropertyList(); // 삭제 후 리스트 갱신
  } catch (error) {
    console.log(error);
  }
};

const changePropertyStatus = async () => {
  try {
    console.log("pstatus + pnumber in index : " + selectedPnumber.value + pstatus.value);
    await propertyAPI.updatePropertyStatus(selectedPnumber.value, pstatus.value);
    await getUserPropertyList(); // 수정 후 리스트 갱신
  } catch (error) {
    console.log(error);
  }
};


</script>

<style scoped>
.soldOutBtn {
  background-color: #2f4858;
  color: #fff;
}
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
