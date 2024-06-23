<template>
  <div v-if="props.type == 'property'">
    <div
      class="p-0"
      v-for="exampleProperty in exampleProperties"
      :key="exampleProperty"
    >
      <PropertyListItem :propertyData="exampleProperty" />
    </div>
  </div>
  <div v-if="props.type == 'agent'">
    <div class="p-0" v-for="exampleAgent in exampleAgents" :key="exampleAgent">
      <PropertyListItem :agentData="exampleAgent" />
    </div>
  </div>
  <div v-if="props.type == 'favorite'">
    <div class="p-0" v-for="exampleFavorite in exampleFavorites" :key="exampleFavorite">
      <PropertyListItem :favoriteData="exampleFavorite" /> favorite
    </div>
  </div>
</template>

<script setup>
import PropertyListItem from "./PropertyListItem.vue";
const props = defineProps(["type"]);

const exampleProperties = [
  // 사용자 위치 주변의 임의 위치들
  {
    id: 1,
    type: "property",
    pcategory: "전세",
    pdeposite: 12000,
    prentalfee: 50,
    title: "O강남역 5분거리O",
    floor: 5,
    size: 18,
    maintenance: 10,
    detailInfo: "",
  },
  {
    id: 2,
    type: "property",
    pcategory: "월세",
    pdeposite: 3000,
    prentalfee: 20,
    title: "O성북천변 신축급 풀옵션원룸O성신여대역도보4분거리O",
    floor: 1,
    size: 25,
    maintenance: 8,
    detailInfo: "",
  },
  {
    id: 3,
    type: "property",
    pcategory: "월세",
    pdeposite: 3000,
    prentalfee: 20,
    title: "O성북천변 신축급 풀옵션원룸O성신여대역도보4분거리O",
    floor: 1,
    size: 25,
    maintenance: 8,
    detailInfo: "",
  },
  {
    id: 4,
    type: "property",
    pcategory: "월세",
    pdeposite: 3000,
    prentalfee: 20,
    title: "O성북천변 신축급 풀옵션원룸O성신여대역도보4분거리O",
    floor: 1,
    size: 25,
    maintenance: 8,
    detailInfo: "",
  },
  {
    id: 5,
    type: "property",
    pcategory: "월세",
    pdeposite: 3000,
    prentalfee: 20,
    title: "O성북천변 신축급 풀옵션원룸O성신여대역도보4분거리O",
    floor: 1,
    size: 25,
    maintenance: 8,
    detailInfo: "",
  },
];
const exampleFavorites = [
  // 사용자 찜하기 임의 위치들
  {
    id: 1,
    type: "favorite",
    pcategory: "전세",
    pdeposite: 12000,
    prentalfee: 50,
    title: "O강남역 5분거리O",
    floor: 5,
    size: 18,
    maintenance: 10,
    detailInfo: "",
  },
  {
    id: 2,
    type: "favorite",
    pcategory: "월세",
    pdeposite: 3000,
    prentalfee: 20,
    title: "O성북천변 신축급 풀옵션원룸O성신여대역도보4분거리O",
    floor: 1,
    size: 25,
    maintenance: 8,
    detailInfo: "",
  },
  
];
const exampleAgents = [
  // 사용자 위치 주변의 임의 위치들
  {
    id: 1,
    type: "agent",
    company: "검은소와 중개소",
    name: "김철수",
    phone: "010-1111-1111",
    detailInfo: "",
  },
  {
    id: 2,
    type: "agent",
    company: "흰소와 중개소",
    name: "김춘자",
    phone: "010-1234-1234",
    detailInfo: "",
  },
  {
    id: 3,
    type: "agent",
    company: "얼룩소와 중개소",
    name: "박광배",
    phone: "010-4321-4321",
    detailInfo: "",
  },
  {
    id: 4,
    type: "agent",
    company: "황소와 중개소",
    name: "이정웅",
    phone: "010-5678-5678",
    detailInfo: "",
  },
];
</script>

<style scoped></style>
