<template>
  <div class=" overflow-hidden w-75 mx-auto">
    <div class="d-flex p-3">
      <div
        class="property-list-box w-25  h-100 p-3 row row-cols-2"
      >
        <div class="col w-50 mt-3">
          <PropertyItem />
        </div>
        <div class="col w-50 mt-3">
          <PropertyItem />
        </div>
        <div class="col w-50 mt-3">
          <PropertyItem />
        </div>
        <div class="col w-50 mt-3">
          <PropertyItem />
        </div>
      </div>
      <div class="right-box ms-4 col  h-100 p-3">
        <DetailPhotos/>
        <DetailInfos />
      </div>
    </div>
  </div>
</template>

<script setup>
import PropertyItem from "@/components/PropertyItem.vue";
import DetailPhotos from "./DetailPhotos.vue";
import DetailInfos from "./DetailInfos.vue";
</script>

<style scoped>
.right-box {
  width: 800px;
}
</style>
