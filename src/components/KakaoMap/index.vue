<template>
  <div>
    <div id="map"></div>
    <div
      v-if="selectedProperty"
      style="
        position: absolute;
        top: 10px;
        left: 10px;
        background: white;
        padding: 10px;
        border-radius: 5px;
      "
    >
      <h3>{{ selectedProperty.title }}</h3>
      <p>{{ selectedProperty.description }}</p>
      <button @click="navigateToDetail(selectedProperty)">View Details</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const selectedProperty = ref(null);
const router = useRouter();
let map = null;
const properties = [
  {
    id: 1,
    lat: 33.450701,
    lng: 126.570667,
    title: "Property 1",
    description: "This is the first property.",
    url: "agentList/agentDetail",
  },
  {
    id: 2,
    lat: 33.455701,
    lng: 126.575667,
    title: "Property 2",
    description: "This is the second property.",
    url: "agentList/agentDetail",
  },
];

onMounted(() => {
  if (window.kakao && window.kakao.maps) {
    initMap();
  } else {
    const script = document.createElement("script");
    /* global kakao */
    script.onload = () => kakao.maps.load(initMap);
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAO_API_KEY}`;
    document.head.appendChild(script);
  }
});

const initMap = () => {
  const container = document.getElementById("map");
  const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 5,
  };

  map = new kakao.maps.Map(container, options);

  properties.forEach((property) => {
    const markerPosition = new kakao.maps.LatLng(property.lat, property.lng);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);

    kakao.maps.event.addListener(marker, "click", () => {
      selectedProperty.value = property;
      console.log("클릭",selectedProperty.value);
      router.push({ path: property.url });
    });
  });
};

const navigateToDetail = (property) => {
  router.push({ path: property.url });
};
</script>
<style scoped>
#map {
  width: 400px;
  height: 400px;
}
</style>
