<template>
  <div v-if="props.type == 'property'">
    <div
      class="p-0"
      v-for="exampleProperty in displayedProperties"
      :key="exampleProperty.id"
    >
      <PropertyListItem :propertyData="exampleProperty" />
    </div>
    <div v-if="isLoading" class="loading">Loading...</div>
    <div ref="scrollTrigger" style="height: 1px"></div>
  </div>
  <div v-if="props.type == 'agent'">
    <div
      class="p-0"
      v-for="exampleAgent in displayedAgents"
      :key="exampleAgent.id"
    >
      <PropertyListItem :agentData="exampleAgent" />
    </div>
    <div v-if="isLoading" class="loading">Loading...</div>
    <div ref="scrollTrigger" style="height: 1px"></div>
  </div>
  <div v-if="props.type == 'favorite'">
    <div
      class="p-0"
      v-for="exampleFavorite in displayedFavorites"
      :key="exampleFavorite.id"
    >
      <PropertyListItem :favoriteData="exampleFavorite" />
    </div>
    <div v-if="isLoading" class="loading">Loading...</div>
    <div ref="scrollTrigger" style="height: 1px"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import PropertyListItem from "./PropertyListItem.vue";
const props = defineProps(["type"]);
const displayedProperties = ref([]);
const displayedFavorites = ref([]);
const displayedAgents = ref([]);
const isLoading = ref(false);
const limit = 5;
let offset = ref(0);

const scrollTrigger = ref(null);

const loadMoreItems = () => {
  if (isLoading.value) return;

  isLoading.value = true;
  setTimeout(() => {
    if (props.type === "property") {
      const nextItems = exampleProperties.slice(
        offset.value,
        offset.value + limit
      );
      displayedProperties.value.push(...nextItems);
    } else if (props.type === "agent") {
      const nextItems = exampleAgents.slice(offset.value, offset.value + limit);
      displayedAgents.value.push(...nextItems);
    } else if (props.type === "favorite") {
      const nextItems = exampleFavorites.slice(
        offset.value,
        offset.value + limit
      );
      displayedFavorites.value.push(...nextItems);
    }

    offset.value += limit;
    isLoading.value = false;
  }, 1000); // 1초 딜레이
};

onMounted(() => {
  loadMoreItems();
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        loadMoreItems();
      }
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }
  );
  if (scrollTrigger.value) {
    observer.observe(scrollTrigger.value);
  }
});

watch(
  () => props.type,
  () => {
    displayedProperties.value = [];
    displayedFavorites.value = [];
    displayedAgents.value = [];
    offset.value = 0;
    loadMoreItems();
  }
);

const exampleProperties = [
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
  {
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
  {
    id: 3,
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
    id: 4,
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
  {
    id: 5,
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
    id: 6,
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
  {
    id: 5,
    type: "agent",
    company: "얼룩소와 중개소",
    name: "박광배",
    phone: "010-4321-4321",
    detailInfo: "",
  },
  {
    id: 6,
    type: "agent",
    company: "황소와 중개소",
    name: "이정웅",
    phone: "010-5678-5678",
    detailInfo: "",
  },
];
</script>

<style scoped>
.loading {
  text-align: center;
  padding: 20px;
  font-size: 20px;
}
</style>
