<template>
    <div class=" overflow-hidden w-75 mx-auto">
        <div>
            <div class="d-flex ps-3 pe-3 pb-3">
                <div class="property-list-box w-25 h-100">
                <div class="col mt-3" @click="backToPropertyList">
                    <PropertyList type="favorite" />
                </div>
                
                
                </div>
                <!-- 카카오맵 -->
                <div class="right-box ms-4 col vh-100" v-if="status">
                    <KakaoMap page="favorite"/>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import PropertyList from "@/components/Property/PropertyList.vue";
  import KakaoMap from "@/components/KakaoMap.vue";
  import { ref } from "vue";

    let status = ref(true);

    function backToPropertyList() {
    status.value = !status.value;
    }
  </script>
  
  <style scoped>
  
  
  .right-box {
    width: 800px;
    }
  

  </style>
  