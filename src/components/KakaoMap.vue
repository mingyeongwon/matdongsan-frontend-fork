<template>
  <div id="map" @change="emit('getPropertyData', propertyListData)"></div>
</template>

<script setup>
import { ref, onMounted, defineEmits, defineProps } from "vue";
const emit = defineEmits(["getPropertyData"]);
const props = defineProps(["page"]);

let map;
const cluster = ref(null);
const bounds = ref(null);
const markers = ref({});
const propertyListData = ref([]);
const userLatitude = ref(0);
const userLongitude = ref(0);
const exampleProperties = [
  // 사용자 위치 주변의 임의 위치들
  { title: "num1", lat: 37.5072528, lng: 127.0294288 },
  { title: "num2", lat: 37.5052528, lng: 127.0274288 },
  { title: "num3", lat: 37.5067528, lng: 127.0289288 },
  { title: "num4", lat: 37.27943075229118, lng: 127.01763998406159 },
  { title: "num5", lat: 37.55915668706214, lng: 126.92536526611102 },
  { title: "num6", lat: 35.13854258261161, lng: 129.1014781294671 },
  { title: "num7", lat: 37.55518388656961, lng: 126.92926237742505 },
  { title: "num8", lat: 35.20618517638034, lng: 129.07944301057026 },
  { title: "num9", lat: 37.561110808242056, lng: 126.9831268386891 },
];

const initMap = () => {
  const container = document.getElementById("map");
  const mapOptions = {
    center: new kakao.maps.LatLng(userLatitude.value, userLongitude.value),
    level: 5,
    maxLevel: 7,
  };

  //Map 초기 설정 및 불러올 위치 태그
  map = new kakao.maps.Map(container, mapOptions);
  //카카오맵 이벤트 설정 영역이 변경이 되면 자동으로 함수가 실행이 됨
  kakao.maps.event.addListener(map, "bounds_changed", function () {
    //영역값 불러오기
    bounds.value = map.getBounds();
    //마커가 1개 이상인 경우에 실행
    if (markers.value.length > 0) {
      //마커들이 여러개일 경우 map으로 하나씩 값 확인
      markers.value.map((marker) => {
        //마커의 좌표값
        let pos = marker.getPosition();
        //지도의 영역값
        bounds.value = map.getBounds();
        //지도의 영역값 안에 마커의 좌표값이 있는가?
        if (bounds.value.contain(pos)) {
          console.log("아아 여기가 판매하는 위치가 있는 곳인가? ", pos);
          if (propertyListData.value !== null)
            emit("getPropertyData", (propertyListData.value = pos));
        }
      });
    }
  });
  if (props.page === "favorite") {
    console.log("여기가 관심페이지?");
    let imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png"; // 마커이미지의 주소입니다
    let imageSize = new kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
    let imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    let markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );
    let markerPosition = new kakao.maps.LatLng(
      37.561110808242056,
      126.9831268386891
    ); // 마커가 표시될 위치입니다

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage, // 마커이미지 설정
    });
    marker.setMap(map);
  } else {
    //마커 지도에 출력 함수 실행 (현재는 클러스터로 대체 하여 핀마커가 보이지 않음)
    displayMarker(
      exampleProperties.map((property) => [property.lat, property.lng])
    );
  }

  //클러스터 옵션값
  const clusterOptions = {
    map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
    averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
  };

  //클러스터 초기 설정
  cluster.value = new kakao.maps.MarkerClusterer(clusterOptions);

  // 마커를 클러스터러에 추가
  cluster.value.addMarkers(markers.value);
  cluster.value.setMinClusterSize(1);
};

//마커 출력 함수 설정
const displayMarker = (markerPositions) => {
  if (markers.value.length > 0) {
    markers.value.forEach((marker) => marker.setMap(null));
  }

  const positions = markerPositions.map(
    (position) => new kakao.maps.LatLng(...position)
  );

  if (positions.length > 0) {
    markers.value = positions.map(
      (position) =>
        new kakao.maps.Marker({
          position,
        })
    );
  }
};
//Mounted 이후 설정해야하는 작업들
onMounted(() => {
  if (!("geolocation" in navigator)) {
    alert("Geolocation is not supported by this browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      userLatitude.value = pos.coords.latitude;
      userLongitude.value = pos.coords.longitude;

      if (window.kakao && window.kakao.maps) {
        initMap();
      } else {
        const script = document.createElement("script");
        /* global kakao */
        script.onload = () => kakao.maps.load(initMap);
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAO_API_KEY}`;
        document.head.appendChild(script);
      }
    },
    (err) => {
      alert(err.message);
    }
  );
});

function getPropertyData() {}
</script>

<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
