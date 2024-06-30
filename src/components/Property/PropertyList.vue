<template>
  <!-- 'property' 타입일 경우에만 렌더링되는 블록 -->
  <div v-if="props.type == 'property'">
    <!-- displayedProperties 배열을 순회하며 PropertyListItem 컴포넌트를 렌더링 -->
    <div
      class="p-0"
      v-for="exampleProperty in displayedProperties"
      :key="exampleProperty.id"
    >
      <!-- PropertyListItem 컴포넌트에 exampleProperty 데이터를 전달 -->
      <PropertyListItem :propertyData="exampleProperty" />
    </div>
    <!-- 로딩 중일 때 표시되는 로딩 메시지 -->
    <div v-if="isLoading" class="loading">Loading...</div>
    <!-- 스크롤 트리거 요소 -->
    <div ref="scrollTrigger" style="height: 1px"></div>
  </div>
  
  <!-- 'agent' 타입일 경우에만 렌더링되는 블록 -->
  <div v-if="props.type == 'agent'">
    <!-- displayedAgents 배열을 순회하며 PropertyListItem 컴포넌트를 렌더링 -->
    <div
      class="p-0"
      v-for="exampleAgent in displayedAgents"
      :key="exampleAgent.id"
    >
      <!-- PropertyListItem 컴포넌트에 exampleAgent 데이터를 전달 -->
      <PropertyListItem :agentData="exampleAgent" />
    </div>
    <!-- 로딩 중일 때 표시되는 로딩 메시지 -->
    <div v-if="isLoading" class="loading">Loading...</div>
    <!-- 스크롤 트리거 요소 -->
    <div ref="scrollTrigger" style="height: 1px"></div>
  </div>

  <!-- 'favorite' 타입일 경우에만 렌더링되는 블록 -->
  <div v-if="props.type == 'favorite'">
    <!-- displayedFavorites 배열을 순회하며 PropertyListItem 컴포넌트를 렌더링 -->
    <div
      class="p-0"
      v-for="exampleFavorite in displayedFavorites"
      :key="exampleFavorite.id"
    >
      <!-- PropertyListItem 컴포넌트에 exampleFavorite 데이터를 전달 -->
      <PropertyListItem :favoriteData="exampleFavorite" />
    </div>
    <!-- 로딩 중일 때 표시되는 로딩 메시지 -->
    <div v-if="isLoading" class="loading">Loading...</div>
    <!-- 스크롤 트리거 요소 -->
    <div ref="scrollTrigger" style="height: 1px"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import PropertyListItem from "./PropertyListItem.vue";
const props = defineProps(["type"]);  // props로부터 type 속성 정의
const displayedProperties = ref([]);  // 표시할 property 목록
const displayedFavorites = ref([]);   // 표시할 favorite 목록
const displayedAgents = ref([]);      // 표시할 agent 목록
const isLoading = ref(false);         // 로딩 상태
const limit = 5;                      // 한번에 로드할 항목 수
let offset = ref(0);                  // 현재 오프셋 값

const scrollTrigger = ref(null);      // 스크롤 트리거 요소 참조

const loadMoreItems = () => {         // 인피니티 스크롤
  // 이미 로딩 중이면 함수를 종료
  if (isLoading.value) return;

  // 로딩 상태를 true로 설정
  isLoading.value = true;
  // 1초 딜레이 후 데이터 로드
  setTimeout(() => {
    // type이 'property'인 경우
    if (props.type === "property") {
      // 현재 offset에서 limit만큼 데이터를 가져옴
      const nextItems = exampleProperties.slice(
        offset.value,
        offset.value + limit
      );
      // 가져온 데이터를 displayedProperties 배열에 추가
      displayedProperties.value.push(...nextItems);
    } 
    // type이 'agent'인 경우
    else if (props.type === "agent") {
      // 현재 offset에서 limit만큼 데이터를 가져옴
      const nextItems = exampleAgents.slice(offset.value, offset.value + limit);
      // 가져온 데이터를 displayedAgents 배열에 추가
      displayedAgents.value.push(...nextItems);
    } 
    // type이 'favorite'인 경우
    else if (props.type === "favorite") {
      // 현재 offset에서 limit만큼 데이터를 가져옴
      const nextItems = exampleFavorites.slice(
        offset.value,
        offset.value + limit
      );
      // 가져온 데이터를 displayedFavorites 배열에 추가
      displayedFavorites.value.push(...nextItems);
    }

    // offset을 limit만큼 증가시켜 다음 로드 위치를 업데이트
    offset.value += limit;
    // 로딩 상태를 false로 설정
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
  () => props.type,           // 타입이 변경이 되면 값 초기화
  () => {                     // 밑에는 타입이 변경되면 실행될 내용들
    displayedProperties.value = [];
    displayedFavorites.value = [];
    displayedAgents.value = [];
    offset.value = 0;
    loadMoreItems();           // 새로운 type에 따라 데이터를 로드
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
