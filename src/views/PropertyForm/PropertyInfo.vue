<template>
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
              v-model="property.paddress"
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
            v-model="property.ppostcode"
            readonly
          />
          <input
            type="text"
            class="row ms-0 mt-3"
            placeholder="상세주소 입력"
            v-model="property.paddressdetail"
            size="20"
            @input="emitUpdate"
          />
        </div>
        <div
          class="map-box col border border-1 border-secondary rounded text-center text-muted"
          id="map"
        >
          여기에 지도가 표시 됩니다.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRefs, watch, onMounted } from "vue";

const props = defineProps({
  property: Object,
});
const emit = defineEmits(["update:property"]);
const { property } = toRefs(props);

// 주소 검색
function openPostSearch() {
  new window.daum.Postcode({
    oncomplete: (data) => {
      property.value.ppostcode = data.zonecode;
      property.value.paddress = data.address;
      emitUpdate();
      showMap(data.address); // 주소 검색 완료 후 지도에 표시
    },
  }).open();
}

// 주소 지도 표시
function showMap(address) {
  const mapContainer = document.getElementById("map");
  const mapOption = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
  };

  const map = new kakao.maps.Map(mapContainer, mapOption);
  const geocoder = new kakao.maps.services.Geocoder();

  geocoder.addressSearch(address, function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
      const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
      property.value.plongitude = result[0].x;
      property.value.platitude = result[0].y;
      const marker = new kakao.maps.Marker({
        map: map,
        position: coords,
      });
      map.setCenter(coords);
    }
  });
}

function emitUpdate() {
  emit("update:property", { property });
  console.log(property.value);
}

watch(
  () => props.property,
  (newValue) => {
    Object.assign(property, newValue);
  }
);

onMounted(() => {
  const script = document.createElement("script");
  script.onload = () =>
    kakao.maps.load(() => {
      const mapContainer = document.getElementById("map");
      const mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
        draggable: false,
        disableDoubleClickZoom: true,
      };
      new kakao.maps.Map(mapContainer, mapOption);
    });
  script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAO_API_KEY}&libraries=services`;
  document.head.appendChild(script);
});
const kakao = window.kakao;
</script>

<style scoped>
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
