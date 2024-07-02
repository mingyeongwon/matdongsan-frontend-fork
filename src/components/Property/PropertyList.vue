<template>
  <!-- 'property' 타입일 경우에만 렌더링되는 블록 -->
  <div v-if="props.type == 'property'">
    <!-- displayedProperties 배열을 순회하며 PropertyListItem 컴포넌트를 렌더링 -->
    <div
      class="p-0"
      v-for="PropertyData in displayedProperties"
      :key="PropertyData.pnumber"
    >
      <!-- PropertyListItem 컴포넌트에 exampleProperty 데이터를 전달 -->
      <PropertyListItem :propertyData="PropertyData" />
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
      v-for="AgentData in displayedAgents"
      :key="AgentData.anumber"
    >
      <!-- PropertyListItem 컴포넌트에 exampleAgent 데이터를 전달 -->
      <PropertyListItem :agentData="AgentData" />
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
import agentAPI from "@/apis/agentAPI";
import propertyAPI from "@/apis/propertyAPI";
import favoriteAPI from "@/apis/favoriteAPI";
import { useRoute, useRouter } from "vue-router";


const props = defineProps(["type"]); // props로부터 type 속성 정의
const displayedProperties = ref([]); // 표시할 property 목록
const displayedFavorites = ref([]); // 표시할 favorite 목록
const displayedAgents = ref([]); // 표시할 agent 목록
const isLoading = ref(false); // 로딩 상태
const limit = 5; // 한번에 로드할 항목 수
let offset = ref(1); // 현재 오프셋 값

const scrollTrigger = ref(null); // 스크롤 트리거 요소 참조

const loadMoreItems = async () => {
  // 인피니티 스크롤
  // 이미 로딩 중이면 함수를 종료
  if (isLoading.value) return;

  // 로딩 상태를 true로 설정
  isLoading.value = true;

  try {
    // type이 'property'인 경우
    if (props.type === "property") {
      await getPropertyList(offset.value, limit);
    }
    // type이 'agent'인 경우
    else if (props.type === "agent") {
      await getAgentList(offset.value, limit);
    }
    // type이 'favorite'인 경우
    else if (props.type === "favorite") {
      await getFavoriteList(offset.value, limit);
    }

    // offset을 limit만큼 증가시켜 다음 로드 위치를 업데이트
    offset.value++;
  } catch (error) {
    console.error(error);
  } finally {
    // 로딩 상태를 false로 설정
    isLoading.value = false;
  }
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
  () => props.type, // 타입이 변경이 되면 값 초기화
  () => {
    // 밑에는 타입이 변경되면 실행될 내용들
    console.log(props.type);
    displayedProperties.value = [];
    displayedFavorites.value = [];
    displayedAgents.value = [];
    offset.value = 1;
    loadMoreItems(); // 새로운 type에 따라 데이터를 로드
  }
);


//부동산 리스트 목록을 가져오는 메소드 정의
async function getAgentList(pageNo, size) {
  try {
    console.log(pageNo);
    const response = await agentAPI.getAgentList(pageNo, size);
    if (Array.isArray(response.data.agent)) {
      displayedAgents.value.push(...response.data.agent);
    } else {
      console.error("Agent list is not an array");
    }
  } catch (error) {
    console.log(error);
  }
}
//매물 목록을 가져오는 메소드 정의
async function getPropertyList(pageNo, size) {
  try {
    const response = await propertyAPI.getPropertyList(pageNo, size);
    if (Array.isArray(response.data.property)) {
      displayedProperties.value.push(...response.data.property);
      console.log(displayedProperties.value[0]);
    } else {
      console.error("Property list is not an array");
    }
  } catch (error) {
    console.log(error);
  }
}
//관심상품 목록을 가져오는 메소드 정의
async function getFavoriteList(pageNo, size) {
  try {
    const response = await favoriteAPI.getFavoriteList(pageNo, size);
    if (Array.isArray(response.data.favorite)) {
      displayedFavorites.value.push(...response.data.favorite);
    } else {
      console.error("Favorite list is not an array");
    }
  } catch (error) {
    console.log(error);
  }
}

</script>

<style scoped>
.loading {
  text-align: center;
  padding: 20px;
  font-size: 20px;
}
</style>
