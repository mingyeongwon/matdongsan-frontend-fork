<template>
  <div id="map" @change="emit('getPropertyData', propertyListData)"></div>
</template>

<script setup>
import { ref, onMounted, defineEmits } from "vue";
const emit = defineEmits(["getPropertyData"]);
const props = defineProps(["page"]);

let map;
let cluster = null;
const bounds = ref(null);
const markers = ref({});

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
    disableDoubleClickZoom: true,
  };

  //Map 초기 설정 및 불러올 위치 태그
  map = new kakao.maps.Map(container, mapOptions);
  kakao.maps.event.addListener(map, "dragend", updateMarkersInView);
  kakao.maps.event.addListener(map, "zoom_changed", updateMarkersInView);
  //관심목록 컴포넌트에서 접근시 아래 코드들 실행
  if (props.page === "favorite") {
    let imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; // 마커이미지의 주소
    let imageSize = new kakao.maps.Size(34, 45); // 마커이미지의 크기
    let imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정.
    let markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );
    // 마커가 표시될 임시 위치입니다
    let markerPosition = new kakao.maps.LatLng(
      37.561110808242056,
      126.9831268386891
    );

    // 즐겨찾기 마커를 생성
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
    disableClickZoom: true, //더블클릭 줌 방지
  };

  //클러스터 초기 설정
  cluster = new kakao.maps.MarkerClusterer(clusterOptions);

  // 마커를 클러스터러에 추가
  cluster.addMarkers(markers.value);

  //클러스터로 만들 마커의 최소 수
  cluster.setMinClusterSize(1);

  updateMarkersInView();
  //클러스터 클릭 이벤트
  kakao.maps.event.addListener(cluster, "clusterclick", function (cluster) {
    //클러스터에 존재하는 마커들 정보
    const markers = cluster.getMarkers();
    // 클러스터 마커 좌표 배열
    const markerPositions = [];
    // 클러스터 마커를 배열에 push
    markers.map((marker) => {
      markerPositions.push(marker.getPosition());
      console.log(markerPositions);

      //저장된 좌표 배열을 가지고 정보 불러와야함
    });
  });
};

//마커 출력 함수 설정
const displayMarker = (markerPositions) => {
  if (markers.value.length > 0) {
    markers.value.forEach((marker) => marker.setMap(null));
  }
  // 지도 마커 좌표
  const positions = markerPositions.map(
    (position) => new kakao.maps.LatLng(...position)
  );
  //마커의 좌표가 1개이상 존재할 때 마커를 지도에 표시
  if (positions.length > 0) {
    markers.value = positions.map(
      (position) =>
        new kakao.maps.Marker({
          position,
        })
    );
  }
};

const updateMarkersInView = () => {
  bounds.value = map.getBounds();
  const propertyListData = [];
  if (markers.value.length > 0) {
    markers.value.forEach((marker) => {
      const pos = marker.getPosition();
      if (bounds.value.contain(pos)) {
        propertyListData.push({ Ma: pos.Ma, La: pos.La });
      }
    });
  }

  emit("getPropertyData", propertyListData);
};
//Mounted 이후 설정해야하는 작업들
onMounted(() => {
  if (!("geolocation" in navigator)) {
    alert("Geolocation is not supported by this browser.");
    return;
  }

  //사용자의 현재 위치 좌표를 중심으로 지도 설정
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
</script>

<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
