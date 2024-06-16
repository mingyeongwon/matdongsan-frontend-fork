<template>
  <div id="map"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const map = ref(null);
const markers = ref([]);
const latitude = ref(0);
const longitude = ref(0);
const exampleProperties = [
  // 사용자 위치 주변의 임의 위치들
  { lat: 37.5072528, lng: 127.0294288 },
  { lat: 37.5052528, lng: 127.0274288 },
  { lat: 37.5067528, lng: 127.0289288 },
];
const initMap = () => {
  const container = document.getElementById("map");
  const options = {
    center: new kakao.maps.LatLng(latitude.value, longitude.value),
    level: 5,
  };
  map.value = new kakao.maps.Map(container, options);
  displayMarker(
    exampleProperties.map((property) => [property.lat, property.lng])
  );
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
          map: map.value,
          position,
        })
    );

    const bounds = positions.reduce(
      (bounds, latlng) => bounds.extend(latlng),
      new kakao.maps.LatLngBounds()
    );

    map.value.setBounds(bounds);
  }
};

onMounted(() => {
  if (!("geolocation" in navigator)) {
    alert("Geolocation is not supported by this browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      latitude.value = pos.coords.latitude;
      longitude.value = pos.coords.longitude;

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
