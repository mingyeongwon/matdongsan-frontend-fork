<template>
  <div id="map"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";

let map;
const cluster = ref(null);
const bounds = ref(null);
const markers = ref({});
const propertyListData =ref([]);
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
    bounds.value = map.getBounds();
    if (markers.value.length > 0) {
      markers.value.map((marker) => {
        let pos = marker.getPosition();
        bounds.value = map.getBounds();
        if (bounds.value.contain(pos))
          console.log("아아 여기가 판매하는 위치가 있는 곳인가? ", pos);
      });
    }
  });
  displayMarker(
    exampleProperties.map((property) => [property.lat, property.lng])
  );

  const clusterOptions = {
    map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
    averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
  };

  cluster.value = new kakao.maps.MarkerClusterer(clusterOptions);

  // 마커를 클러스터러에 추가
  cluster.value.addMarkers(markers.value);
  cluster.value.setMinClusterSize(1);
  console.log(cluster.value);
};

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
</script>

<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
