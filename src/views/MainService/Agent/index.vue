<template>
  <div class="AgentMap-container w-75 mx-auto">
    <div class=" h-100">
      <div class="d-flex p-3 h-100" >
          <div class="property-list-box w-25 border border-1 border-dark h-100 p-3 row row-cols-2 overflow-auto">
            <div class="col w-50 mt-3">
                <PropertyItem/>
            </div>
            <div class="col w-50 mt-3">
                <PropertyItem/>
            </div>
            <div class="col w-50 mt-3">
                <PropertyItem/>
            </div>
            <div class="col w-50 mt-3">
                <PropertyItem/>
            </div>
            <div class="col w-50 mt-3">
                <PropertyItem/>
            </div>
            <div class="col w-50 mt-3">
                <PropertyItem/>
            </div>
            <div class="col w-50 mt-3">
                <PropertyItem/>
            </div>
            <div class="col w-50 mt-3">
                <PropertyItem/>
            </div>
            <div class="col w-50 mt-3">
                <PropertyItem/>
            </div>
            <div class="col w-50 mt-3">
                <PropertyItem/>
            </div>
            <div class="col w-50 mt-3">
                <PropertyItem/>
            </div>
            <div class="col w-50 mt-3">
                <PropertyItem/>
            </div>
          </div>
          <div class="right-box ms-4 col border border-1 border-dark p-3">
            <KakaoMap class="w-100 h-100" />
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PropertyItem from "@/components/PropertyItem.vue";
import KakaoMap from "@/components/KakaoMap.vue";
</script>

<style scoped>


/* .right-box{
    width:800px;
} */

.AgentMap-container {
  height: 800px;
}
</style>
