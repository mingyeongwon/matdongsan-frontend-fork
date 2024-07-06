<template>
  <div id="map"></div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
const emit = defineEmits(["getPropertyData"]);
const props = defineProps(["positionList", "position", "page"]);

let map;
let cluster = null;
const bounds = ref(null);
const markers = ref([]);
const agentMarker = ref(null);
const kakao = window.kakao;
const userLatitude = ref(0);
const userLongitude = ref(0);

// 지도 초기화 함수
const initMap = () => {
  const container = document.getElementById("map");
  const mapOptions = {
    center: new kakao.maps.LatLng(userLatitude.value, userLongitude.value), // 초기 중심 좌표 설정
    level: 5, // 초기 줌 레벨
    maxLevel: 14,
    disableDoubleClickZoom: true,
  };

  map = new kakao.maps.Map(container, mapOptions);
  kakao.maps.event.addListener(map, "dragend", updateMarkersInView);
  kakao.maps.event.addListener(map, "zoom_changed", updateMarkersInView);

  // 페이지별 마커 로직 처리
  if (props.page === "favorite") {
    displayFavorites();
  } else if (props.page === "agentList" && Array.isArray(props.positionList)) {
    console.log("중개인 리스트 맵 실행");
    displayMarker(props.positionList.map(agent => [agent.alatitude, agent.alongitude]));
  } else if (props.page === "property") {
    setupPropertyMarkers();
  }

  if (props.page === "agent" && props.position && typeof props.position === "object" && !Array.isArray(props.position)) {
    const agentLatLng = new kakao.maps.LatLng(props.position.lat, props.position.lng);
    agentMarker.value = new kakao.maps.Marker({ position: agentLatLng, map: map });
    map.setCenter(agentLatLng);
  }
};

// 마커 표시 함수 최적화
const displayMarker = (markerPositions) => {
  // 기존 마커들 중 필요없는 마커 제거
  markers.value.forEach(marker => {
    if (!markerPositions.some(pos => pos[0] === marker.getPosition().getLat() && pos[1] === marker.getPosition().getLng())) {
      marker.setMap(null);
      markers.value = markers.value.filter(m => m !== marker);
    }
  });

  // 새로운 마커들만 추가
  markerPositions.forEach(position => {
    if (!markers.value.some(m => m.getPosition().getLat() === position[0] && m.getPosition().getLng() === position[1])) {
      const newMarker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(...position),
        map: map,
      });
      markers.value.push(newMarker);
    }
  });

  // 클러스터 있을 경우 클러스터 업데이트
  if (cluster) {
    cluster.clear();
    cluster.addMarkers(markers.value);
  }
};

// 즐겨찾기 페이지 마커 표시
const displayFavorites = () => {
  const exampleFavorites = [
    { lat: 37.5072528, lng: 127.0294288 },
    { lat: 37.561110808242056, lng: 126.9831268386891 },
  ];
  displayMarker(exampleFavorites.map(fav => [fav.lat, fav.lng]));
};

// 부동산 페이지 클러스터 설정
const setupPropertyMarkers = () => {
  const clusterOptions = {
    map: map,
    averageCenter: true,
    disableClickZoom: true,
  };
  cluster = new kakao.maps.MarkerClusterer(clusterOptions);
  cluster.addMarkers(markers.value);
};

// 현재 뷰에 있는 마커 데이터 업데이트
const updateMarkersInView = () => {
  if (props.page === "favorite") return;

  bounds.value = map.getBounds();
  const propertyListData = markers.value.filter(marker => bounds.value.contain(marker.getPosition())).map(marker => {
    const pos = marker.getPosition();
    return { Ma: pos.Ma, La: pos.La };
  });
  emit("getPropertyData", propertyListData);
};

onMounted(() => {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      userLatitude.value = pos.coords.latitude;
      userLongitude.value = pos.coords.longitude;
      initMap();
    },
    (err) => {
      console.error("Geolocation error:", err);
      alert(err.message);
    }
  );
});

watch(() => props.position, (newPosition) => {
  if (map && newPosition) {
    if (Array.isArray(newPosition)) {
      displayMarker(newPosition.map(agent => [agent.alatitude, agent.alongitude]));
    } else {
      updateAgentMarker(newPosition);
    }
  }
});

watch(() => props.positionList ? props.positionList.length : 0, (newLength) => {
  if (map && newLength > 0) {
    displayMarker(props.positionList.map(agent => [agent.alatitude, agent.alongitude]));
  }
});

// 에이전트 마커 위치 업데이트
const updateAgentMarker = (position) => {
  const newCenter = new kakao.maps.LatLng(position.lat, position.lng);
  if (agentMarker.value) {
    agentMarker.value.setPosition(newCenter);
  } else {
    agentMarker.value = new kakao.maps.Marker({
      position: newCenter,
      map: map,
    });
  }
  map.setCenter(newCenter);
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
