<template>
  <div class="list-box mt-5 w-100">
    <div class="justify-content-center">
      <!-- <h5 class="fw-bold">전체매물</h5>
      <hr /> -->
      <div class="row row-cols-4 justify-content-start mb-5 mx-auto ms-3 w-100">
        <RouterLink class="col-3 text-decoration-none text-dark me-4 w-auto" :to="{path:`/Property/${tempagentData.pnumber}`}">
          <img
            src="https://photos.zillowstatic.com/fp/0cb395938d3ec6260d3e468a2a8b5894-cc_ft_576.webp"
            class="rounded mb-2"
            width="150"
            height="150"
            alt=""
          />
          <h5 class="fw-bold">{{tempagentData.ptitle}}</h5>
          <small>{{tempagentData.pcontents}}</small>
        </RouterLink>
     
        <RouterLink class="col-3 text-decoration-none text-dark me-4 w-auto" :to="{path:`/Property/${id}`}">
          <img
            src="https://photos.zillowstatic.com/fp/0cb395938d3ec6260d3e468a2a8b5894-cc_ft_576.webp"
            class="rounded mb-2"
            width="150"
            height="150"
            alt=""
          />
          <h5 class="fw-bold">테스트</h5>
          <small>여기가 집설명</small>
        </RouterLink>
     
        <RouterLink class="col-3 text-decoration-none text-dark me-4 w-auto" :to="{path:`/Property/${id}`}">
          <img
            src="https://photos.zillowstatic.com/fp/0cb395938d3ec6260d3e468a2a8b5894-cc_ft_576.webp"
            class="rounded mb-2"
            width="150"
            height="150"
            alt=""
          />
          <h5 class="fw-bold">테스트</h5>
          <small>여기가 집설명</small>
        </RouterLink>
     
        <RouterLink class="col-3 text-decoration-none text-dark me-4 w-auto" :to="{path:`/Property/${id}`}">
          <img
            src="https://photos.zillowstatic.com/fp/0cb395938d3ec6260d3e468a2a8b5894-cc_ft_576.webp"
            class="rounded mb-2"
            width="150"
            height="150"
            alt=""
          />
          <h5 class="fw-bold">테스트</h5>
          <small>여기가 집설명</small>
        </RouterLink>
     
        <RouterLink class="col-3 text-decoration-none text-dark me-4 w-auto" :to="{path:`/Property/${id}`}">
          <img
            src="https://photos.zillowstatic.com/fp/0cb395938d3ec6260d3e468a2a8b5894-cc_ft_576.webp"
            class="rounded mb-2"
            width="150"
            height="150"
            alt=""
          />
          <h5 class="fw-bold">테스트</h5>
          <small>여기가 집설명</small>
        </RouterLink>
     
        <RouterLink class="col-3 text-decoration-none text-dark me-4 w-auto" :to="{path:`/Property/${id}`}">
          <img
            src="https://photos.zillowstatic.com/fp/0cb395938d3ec6260d3e468a2a8b5894-cc_ft_576.webp"
            class="rounded mb-2"
            width="150"
            height="150"
            alt=""
          />
          <h5 class="fw-bold">테스트</h5>
          <small>여기가 집설명</small>
        </RouterLink>
     
 
      </div>
    </div>
  </div>
</template>

<script setup>
import agentAPI from '@/apis/agentAPI';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const agentProperiesData = ref([]); 
const id = ref(0);
id.value=1;
const tempagentData = ref({});
//중개인이 올린 매물 리스트 가져오는 함수 
async function getPropertiesByAgent(){

  console.log("테스트중: "+route.params.id);
  try {
    const response = await agentAPI.getAgentProperty(route.params.id,1);
    agentProperiesData.value = response.data.agentProperty;
    console.log("어째서 아무것도 없는건가: "+ agentProperiesData.value.map((property)=>{
      tempagentData.value = property;
      console.log(property);
    }));
  } catch (error) {
   console.log(error); 
  }
}
onMounted(()=>{
  getPropertiesByAgent();
})

watch(()=>route.params.id,
()=>{
   getPropertiesByAgent();
})
</script>

<style scoped>
.list-box {
  margin-right: auto;
  margin-left: auto;
}
</style>
