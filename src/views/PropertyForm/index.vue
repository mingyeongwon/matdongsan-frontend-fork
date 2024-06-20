<template>
  <div class="product-container w-75">
    <h3 class="text-center fw-bold mt-3 mb-3">방내놓기</h3>
    <div class="ps-5 pt-3">
      <ul>
        <li>
          전 / 월세 매물만 등록할 수 있습니다. 매매는 집이지에서만 등록하실 수
          있습니다. 소유중인 공실 매매와 다중 매물 등록을 한번에 하고 싶다면
          집이지를 이용해주세요.
        </li>
        <li class="mt-3">
          1개의 매물만 등록 가능하며, 집이지에서 직거래로 표시됩니다.
        </li>
        <li class="mt-3">
          주소를 다르게 입력할 경우 허위매물로 신고될 수 있으니 꼭 동일하게 입력
          바랍니다.
        </li>
      </ul>
    </div>
    <form action="#" class="mb-5" v-on:submit.prevent="handleSubmit">
      <div>
        <div class="d-flex">
          <h4 class="col fw-bold">매물 정보</h4>
          <p class="m-0 fw-bold">*필수항목</p>
        </div>
        <hr />
        <div class="mt-5">
          <div class="d-flex">
            <span class="fw-bold">매물 유형 *</span>
            <div class="col ms-5">원룸</div>
          </div>
        </div>
        <div class="mt-5">
          <div class="d-flex">
            <span class="fw-bold">매물 주소 *</span>
            <div class="col ms-5">
              <label for="address1" class="mb-3">주소검색</label><br />
              <div class="d-flex">
                <input
                  type="text"
                  name="address1"
                  class="address me-2"
                  placeholder="예) 서울시 강남구 봉은사로 1길 12,1층"
                  size="40"
                  v-model="propertyInfo.address"
                  readonly
                />
                <div
                  type="button"
                  class="address-search-btn btn btn-dark btn-sm"
                  @click="openPostSearch"
                >
                  검색
                </div>
              </div>
              <input
                type="text"
                class="row ms-0 mt-3 postcode"
                placeholder="우편번호"
                size="20"
                v-model="propertyInfo.postcode"
                readonly
              />
              <input
                type="text"
                class="row ms-0 mt-3"
                placeholder="상세주소 입력"
                v-model="propertyInfo.addressDetail"
                size="20"
              />
            </div>
            <div
              class="map-box col border border-1 border-secondary rounded text-center text-muted"
            >
              여기에 지도가 표시 됩니다.
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <div>
          <h4>거래 정보</h4>
        </div>
        <hr />
        <span class="me-5">거래 종류 *</span>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input border bodrer-1 border-secondary"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            v-model="propertyInfo.paymentType"
            value="전세"
          />
          <label class="form-check-label me-3" for="inlineRadio1">전세</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input border bodrer-1 border-secondary"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            v-model="propertyInfo.paymentType"
            value="월세"
          />
          <label class="form-check-label" for="inlineRadio2">월세</label>
        </div>

        <div class="mt-3">
          <span class="me-5">가격 정보 *</span>
          <input type="text" v-model="propertyInfo.price" /> 만원
        </div>

        <div class="mt-3">
          <span class="me-4">공용관리비 * </span>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input border bodrer-1 border-secondary"
              type="radio"
              name="mainteneceOptions"
              id="maintenece1"
              value="No"
              v-model="propertyInfo.maintenance"
            />
            <label class="form-check-label me-3" for="maintenece1">없음</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input border bodrer-1 border-secondary"
              type="radio"
              name="mainteneceOptions"
              id="maintenece2"
              value="Yes"
              v-model="propertyInfo.maintenance"
            />
            <label class="form-check-label me-3" for="maintenece2">있음</label>
            <input
              type="text"
              placeholder="관리비"
              :disabled="isAbled == false"
            />
            원
          </div>
        </div>

        <div class="mt-3">
          <span class="me-4">입주 가능 일자 *</span>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input border bodrer-1 border-secondary"
              type="radio"
              name="move-in-date-Options"
              id="move-in1"
              value="today"
              v-model="moveIn"
            />
            <label class="form-check-label me-3" for="move-in1">즉시입주</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input border bodrer-1 border-secondary"
              type="radio"
              name="move-in-date-Options"
              id="move-in2"
              value="notToday"
              v-model="moveIn"
            />
            <label class="form-check-label me-3" for="move-in2"
              >일자 선택</label
            >
            <input
              type="text"
              :disabled="moveIn !== 'notToday'"
              placeholder="예) 20250512"
              v-model="moveIn"
            />
          </div>
        </div>
      </div>
      <div>
        <div class="mt-5">
          <h4 class="fw-bold">추가 정보</h4>
        </div>
        <hr />
        <div class="d-flex">
          <span class="me-5">층수 *</span>
          <div class="col-1">
            <small class="">전체 층수</small>
            <select
              class="form-select form-select-sm mb-3 border bodrer-1 border-secondary"
              aria-label=".form-select-sm example"
            >
              <option selected>지상</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-1 ms-5">
            <small class="">전체 층수</small>
            <select
              class="form-select form-select-sm mb-3 border bodrer-1 border-secondary"
              aria-label=".form-select-sm example"
            >
              <option selected>지상</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div class="d-flex">
          <div class="col">
            <span class="me-5">엘리베이터 *</span>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input border bodrer-1 border-secondary"
                type="radio"
                name="lift-Options"
                id="lift1"
                value="No"
                v-model="propertyInfo.elevator"
              />
              <label class="form-check-label me-3" for="lift1">없음</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input border bodrer-1 border-secondary"
                type="radio"
                name="lift-Options"
                id="lift2"
                value="Yes"
                v-model="propertyInfo.elevator"
              />
              <label class="form-check-label me-3" for="lift2">있음</label>
            </div>
          </div>
        </div>
        <div class="mt-3">
          <span>주차 가능 여부 * </span>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input border border-1 border-secondary"
              type="radio"
              name="parking-Options"
              id="parking-Option1"
              value="No"
              v-model="propertyInfo.parkingLot"
            />
            <label class="form-check-label me-3" for="parking-Option1"
              >없음</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input border border-1 border-secondary"
              type="radio"
              name="parking-Options"
              id="parking-Option2"
              value="Yes"
              v-model="propertyInfo.parkingLot"
            />
            <label class="form-check-label me-3" for="parking-Option2"
              >있음</label
            >
          </div>
        </div>
      </div>
      <div class="mt-5">
        <h4>시설 정보</h4>
        <hr />
        <div class="mt-3">
          <span class="me-5">난방시설</span>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input border border-1 border-secondary"
              type="radio"
              name="heating-Options border border-1 border-secondary"
              id="heating-Option1"
              value="Yes"
              v-model="propertyInfo.heating"
            />
            <label class="form-check-label me-3" for="heating-Option1"
              >없음</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input border border-1 border-secondary"
              type="radio"
              name="heating-Options border border-1 border-secondary"
              id="heating-Option2"
              value="No"
              v-model="propertyInfo.heating"
            />
            <label class="form-check-label me-3" for="heating-Option2"
              >있음</label
            >
          </div>
        </div>
        <div class="mt-3 mb-3">
          <span class="me-5">냉방시설</span>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input border border-1 border-secondary"
              type="radio"
              name="cooling-Options"
              id="cooling-Option1"
              value="No"
              v-model="propertyInfo.cooling"
            />
            <label class="form-check-label me-3" for="cooling-Option1"
              >없음</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input border border-1 border-secondary"
              type="radio"
              name="cooling-Options"
              id="cooling-Option2"
              value="Yes"
              v-model="propertyInfo.cooling"
            />
            <label class="form-check-label me-3" for="cooling-Option2"
              >있음</label
            >
          </div>
        </div>
        <span class="col-1 me-3">생활시설</span>
        <div class="mt-3 d-flex flex-wrap justify-content-start">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input border border-1 border-secondary"
              type="checkbox"
              name="util-Options"
              id="util-Option"
              value="option1"
            />
            <label class="form-check-label me-3" for="util-Option"
              >전체선택</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input border border-1 border-secondary"
              type="checkbox"
              name="util-Options"
              id="util-Option1"
              value="option1"
            />
            <label class="form-check-label me-3" for="util-Option1">침대</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input border border-1 border-secondary"
              type="checkbox"
              name="util-Options"
              id="util-Option2"
              value="option2"
            />
            <label class="form-check-label me-3" for="util-Option2">책상</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input border border-1 border-secondary"
              type="checkbox"
              name="util-Options"
              id="util-Option3"
              value="option3"
            />
            <label class="form-check-label me-3" for="util-Option3">옷장</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input border border-1 border-secondary"
              type="checkbox"
              name="util-Options"
              id="util-Option4"
              value="option4"
            />
            <label class="form-check-label me-3" for="util-Option4"
              >신발장</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input border border-1 border-secondary"
              type="checkbox"
              name="util-Options"
              id="util-Option5"
              value="option5"
            />
            <label class="form-check-label me-3" for="util-Option5"
              >냉장고</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input border border-1 border-secondary"
              type="checkbox"
              id="util-Option6"
              value="option6"
            />
            <label class="form-check-label me-3" for="util-Option6"
              >세탁기</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input border border-1 border-secondary"
              type="checkbox"
              id="util-Option7"
              value="option7"
            />
            <label class="form-check-label me-3" for="util-Option7"
              >가스레인지</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input border border-1 border-secondary"
              type="checkbox"
              id="util-Option8"
              value="option8"
            />
            <label class="form-check-label me-3" for="util-Option8"
              >인덕션</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input border border-1 border-secondary"
              type="checkbox"
              id="util-Option9"
              value="option9"
            />
            <label class="form-check-label me-3" for="util-Option9"
              >전자레인지</label
            >
          </div>
          <div class="form-check form-check-inline display-none">
            <input
              class="form-check-input border border-1 border-secondary"
              type="checkbox"
              id="util-Option10"
              value="option10"
            />
            <label class="form-check-label me-3" for="util-Option10">TV</label>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <div class="d-flex">
          <h4 class="col">사진 등록</h4>
          <span class="text-danger fw-bold align-self-center"
            >사전 등록전 반드시 알려주세요!</span
          >
        </div>
        <hr />
        <div class="">
          <span class="me-5 col-2 align-self-center">일반 사진 *</span>
          <input
            class="mt-3 form-control border border-secondary border-1 w-50"
            type="file"
            id="formFileMultiple"
            multiple
          />
        </div>
      </div>
      <div class="mt-5">
        <h4>상세 설명</h4>
        <hr />
        <div class="d-flex mb-3">
          <span class="me-5 align-self-center">제목 *</span>
          <input
            type="text"
            class="col form-control form-control-sm border border-1 border-secondary p-2"
            placeholder="리스트에 노출되는 문구입니다. 40자 미만으로 작성해주세요"
          />
          <div class="col-5"></div>
        </div>

        <div class="w-75">
          <span class="me-5 align-self-center"></span>
          <VueQuillEditor />
        </div>
      </div>
      <RouterLink to="/" class="mt-4 btn btn-warning btn-lg w-100 fw-bold"
        >등록하기</RouterLink
      >
    </form>
  </div>
</template>

<script setup>
import VueQuillEditor from "@/components/VueQuillEditor.vue";
import { ref } from "vue";

const isAbled = ref(false);
let propertyInfo = ref({
  address: "",
  addressDetail: "",
  postcode: "",
  paymentType: "",
  price: "",
  maintenance: "",
  moveIn: "",
  floor: "",
  totalFloor: "",
  elevator: "",
  parkingLot: "",
  heating: "",
  cooling: "",
  utility: [],
  title: "",
  content: "",
});

//카카오 주소 검색 모달
function openPostSearch() {
  new window.daum.Postcode({
    oncomplete: (data) => {
      propertyInfo.value.postcode = data.zonecode;
      propertyInfo.value.address = data.address;
    },
  }).open();
}
if (propertyInfo.value.maintenance == "Yes") {
  isAbled.value = true;
} else {
  isAbled.value = false;
}
</script>

<style scoped>
.product-container {
  margin-right: auto;
  margin-left: auto;
}
.postcode,
.address {
  background-color: #dfdfdf;
  cursor: default;
}
.map-box {
  height: 250px;
}
.address-search-btn {
  width: 100px;
}
</style>
