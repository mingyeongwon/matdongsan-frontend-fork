<template>
  <div id="map"></div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
const emit = defineEmits(["getPropertyData"]);
const props = defineProps(["position", "page"]);

let map;
let cluster = null;
const bounds = ref(null);
const markers = ref([]);
const agentMarker = ref(null);
const kakao = window.kakao;
const userLatitude = ref(0);
const userLongitude = ref(0);

const exampleProperties = [];
const exampleAgents = [{ title: "num1", lat: 38.5072528, lng: 127.0294288 }];
const exampleFavorites = [
  { title: "num1", lat: 37.5072528, lng: 127.0294288 },
  { title: "num9", lat: 37.561110808242056, lng: 126.9831268386891 },
];

// 지도 초기화 함수
const initMap = () => {
  const container = document.getElementById("map");
  const mapOptions = {
    center: new kakao.maps.LatLng(userLatitude.value, userLongitude.value), // 초기 중심 좌표
    level: 5,
    maxLevel: 14,
    disableDoubleClickZoom: true,
  };

  map = new kakao.maps.Map(container, mapOptions);
  kakao.maps.event.addListener(map, "dragend", updateMarkersInView); // 지도 드래그 이벤트
  kakao.maps.event.addListener(map, "zoom_changed", updateMarkersInView); // 줌 변경 이벤트

  if (props.page === "favorite") {
    // 페이지가 favorite인 경우 이미지 마커 표시
    let imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; // 마커 이미지의 주소
    let imageSize = new kakao.maps.Size(34, 45); // 마커 이미지의 크기
    let imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커 이미지 옵션
    let markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );

    exampleFavorites.forEach((property) => {
      let markerPosition = new kakao.maps.LatLng(property.lat, property.lng); // 마커 위치

      // 즐겨찾기 마커 생성
      let marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage, // 마커 이미지 설정
      });
      marker.setMap(map);
    });
  } else {
    // 페이지가 favorite가 아닌 경우 예제 마커와 클러스터 표시
    if (
      props.page == "agentList" &&
      props.position &&
      Array.isArray(props.position)
    ) {
      console.log("실행");

      displayMarker(
        props.position.map((agent) => [agent.alatitude, agent.alongitude])
      );
    } else if (props.page == "property") {
      displayMarker(
        exampleProperties.map((property) => [property.lat, property.lng])
      );
    }

    if (props.page === "property") {
      const clusterOptions = {
        map: map,
        averageCenter: true,
        disableClickZoom: true,
      };

      cluster = new kakao.maps.MarkerClusterer(clusterOptions);
      cluster.addMarkers(markers.value);
      cluster.setMinClusterSize(1);

      // 클러스터 클릭 이벤트
      kakao.maps.event.addListener(cluster, "clusterclick", function (cluster) {
        const markers = cluster.getMarkers();
        const markerPositions = markers.map((marker) => marker.getPosition());
        console.log(markerPositions);
      });
    }
  }

  // 에이전트 위치 마커 추가
  if (
    props.page === "agent" &&
    props.position &&
    typeof props.position === "object" &&
    !Array.isArray(props.position)
  ) {
    const agentLatLng = new kakao.maps.LatLng(
      props.position.lat,
      props.position.lng
    );
    agentMarker.value = new kakao.maps.Marker({
      position: agentLatLng,
      map: map,
    });
    map.setCenter(agentLatLng); // 에이전트 위치로 중심 이동
  }
};

// 마커 표시 함수
const displayMarker = (markerPositions) => {
  markers.value.forEach((marker) => marker.setMap(null)); // 기존 마커 제거
  markers.value = markerPositions.map(
    (position) =>
      new kakao.maps.Marker({
        position: new kakao.maps.LatLng(...position),
      })
  );
  markers.value.forEach((marker) => marker.setMap(map)); // 새 마커 추가
  if (cluster && props.page === "property") {
    cluster.clear(); // 클러스터 초기화
    cluster.addMarkers(markers.value); // 클러스터에 마커 추가
  }
};

// 현재 뷰에 있는 마커 업데이트 함수
const updateMarkersInView = () => {
  if (props.page === "favorite") return; // favorite 페이지에서는 업데이트하지 않음

  bounds.value = map.getBounds();
  const propertyListData = markers.value
    .filter((marker) => bounds.value.contain(marker.getPosition()))
    .map((marker) => {
      const pos = marker.getPosition();
      return { Ma: pos.Ma, La: pos.La };
    });

  emit("getPropertyData", propertyListData); // 현재 뷰에 있는 마커 데이터 전달
};

// 컴포넌트 마운트 시 지도 초기화
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

// props.position이 변경될 때마다 에이전트 마커 위치 업데이트
watch(
  () => props.position,
  (newPosition) => {
    if (map && newPosition) {
      if (Array.isArray(newPosition)) {
        displayMarker(
          newPosition.map((agent) => [agent.alatitude, agent.alongitude])
        );
      } else {
        const newCenter = new kakao.maps.LatLng(
          newPosition.lat,
          newPosition.lng
        );
        if (agentMarker.value) {
          agentMarker.value.setPosition(newCenter);
        } else {
          agentMarker.value = new kakao.maps.Marker({
            position: newCenter,
            map: map,
          });
        }
        map.setCenter(newCenter); // 지도 중심을 에이전트 위치로 변경
      }
    }
  }
);
</script>

<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
